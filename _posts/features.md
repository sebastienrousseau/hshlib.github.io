---
name: "hsh"
short_name: "hsh"
title: "Features: one policy, rehash on login, pepper and FIPS 140-3 mode | hsh"
description: "What hsh does: hashing and verifying under one policy, rehash on login, Argon2id, bcrypt, scrypt and PBKDF2, a versioned HMAC pepper, a fail-closed FIPS 140-3 mode, safety rails, a command-line tool and general-purpose digests."
keywords: "hsh features, password policy Rust, rehash on login, password pepper Rust, FIPS PBKDF2 Rust, bcrypt 72 bytes"
author: "Sebastien Rousseau"
date: "2026-10-26"
news_publication_date: "2026-10-26"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "monthly"
eyebrow: "Features"
headline: "What hsh does, and where it stops"
lead: "Each section says what the feature is, how to turn it on and what is not finished yet."
nav_features: "true"
---
## Hash and verify with one policy

**A `Policy` says which algorithm new hashes use and with which parameters.**
`Policy::owasp_minimum_2025()` follows the OWASP Password Storage Cheat Sheet's
2025 minimums; `PolicyBuilder` starts from a preset or from scratch.

```rust
use hsh::{api, Policy, PrimaryAlgorithm};
use hsh::policy::PolicyBuilder;

let policy = Policy::owasp_minimum_2025();
let stored = api::hash(&policy, "correct horse battery staple")?;
// $argon2id$v=19$m=19456,t=2,p=1$...

let bcrypt_policy = PolicyBuilder::from_preset(&Policy::owasp_minimum_2025())
    .primary(PrimaryAlgorithm::Bcrypt)
    .build()?;
```

Hashes are stored as PHC strings (`$argon2id$...`, `$scrypt$...`,
`$pbkdf2-sha256$...`), or in bcrypt's own `$2b$` format. Salts come from the
operating system's random-number generator.

## Rehash on login

**`api::verify_and_upgrade` verifies against whatever algorithm made the
stored hash, then compares it with the current policy.**

```rust
use hsh::{api, Outcome};

match api::verify_and_upgrade(&policy, password, &stored)? {
    Outcome::Valid { rehashed: Some(new_hash) } => { /* sign in, save new_hash */ }
    Outcome::Valid { rehashed: None } => { /* sign in */ }
    Outcome::Invalid => { /* deny */ }
}
```

A new hash comes back when the stored one used another algorithm, lower cost
parameters, a different PBKDF2 hash function or an older pepper key. A bcrypt
hash checked under the default policy, for example, comes back as Argon2id.
Old hashes keep verifying at their original cost until then, so there is no
batch migration and no forced password reset.

## Four algorithms

| Algorithm | Default in the OWASP 2025 preset | Notes |
| :--- | :--- | :--- |
| Argon2id | 19,456 KiB, 2 passes, 1 lane | The default, and memory-hard |
| bcrypt | cost 10 | Rejects input over 72 bytes unless pre-hashing is turned on |
| scrypt | N = 2<sup>17</sup>, r = 8, p = 1 | |
| PBKDF2 | HMAC-SHA-256, 600,000 iterations | HMAC-SHA-512 is also supported; the only option in FIPS mode |

`hsh calibrate` measures how long each setting takes on your hardware and
suggests the parameters that meet a time budget.

## A pepper with key rotation

**With the `pepper` feature, a server-side secret is mixed into every
password with HMAC-SHA-256 before hashing**, so a stolen database alone is
not enough to crack passwords offline. Keys are numbered, and the number is
stored with the hash:

```rust
use hsh::{api, Policy};
use hsh_kms::{KeyVersion, LocalPepper};

let pepper = LocalPepper::builder()
    .add(KeyVersion::new(1), b"server-pepper-bytes-keep-secret!".to_vec())
    .current(KeyVersion::new(1))
    .build()
    .unwrap();

let policy = Policy::owasp_minimum_2025().with_pepper(pepper);
let stored = api::hash(&policy, "user-password")?;
// hsh-pepper:1:$argon2id$...
```

Add a second key and make it current, and each hash made under key 1 is
rehashed under key 2 at its next successful verify. A peppered hash checked
without the pepper is `Invalid`, never accepted.

`LocalPepper` keeps the keys in your process. The AWS KMS, Google Cloud KMS,
Azure Key Vault and HashiCorp Vault providers in `hsh-kms` are stubs in
0.0.10: they return an error.

## FIPS 140-3 mode

**`Policy::fips_140_pbkdf2()` hashes with PBKDF2 only, and only when it can
use a FIPS-validated implementation.** Build `hsh` with the `fips` feature
and PBKDF2 runs inside the AWS-LC FIPS module through `aws-lc-rs`, by way of
the `hsh-backend-awslc` crate. Without the feature, a FIPS policy refuses to
hash and returns an error instead of falling back to the pure-Rust code; a
FIPS policy asked to use Argon2id refuses too.

The `fips` build needs Go, CMake and a recent clang to compile AWS-LC. hsh
itself is not FIPS-validated: the validated part is the AWS-LC module, so
check its version and certificate with your compliance team.

## Safety rails

- **No silent truncation.** bcrypt only reads 72 bytes; hsh rejects a longer
  password rather than hash part of it, unless you opt into pre-hashing.
- **Constant-time comparisons** with `subtle` wherever a hash is compared.
- **Secrets wiped from memory** with `zeroize` when their buffers are dropped.
- **No unsafe code**: every crate in the workspace is `#![forbid(unsafe_code)]`.
  The default build is pure Rust; the `fips` feature links the AWS-LC C
  library through `aws-lc-rs`.

## Command-line tool

**`cargo install hsh-cli` installs the `hsh` command.** It reads passwords on
standard input:

```bash
echo -n "correct horse battery staple" | hsh hash --algorithm argon2id
echo -n "correct horse battery staple" | hsh verify -H '$argon2id$v=19$...'
hsh inspect '$argon2id$v=19$m=19456,t=2,p=1$...'
hsh calibrate --algorithm argon2id --target-ms 500
```

`verify` prints `valid` and exits with 0, or prints `invalid` and exits with
1. The other commands are `rehash`, `inspect-backend`, which shows the route a
preset would take, and `completions` for shell completions. `--json` switches
the output to JSON. Avoid passing passwords in arguments, where shell history
and the process list can see them.

## General-purpose digests

**`hsh-digest` offers SHA-256, SHA-384, SHA-512, SHA3-256, SHA3-384, SHA3-512
and BLAKE3** behind one interface, one-shot or streaming. It is for content
addressing and checksums, not for passwords. KangarooTwelve and Ascon have
feature names but no implementation yet.

```rust
use hsh_digest::{hash, Algorithm};

let digest = hash(Algorithm::Sha256, b"hello, world").unwrap();
assert_eq!(digest.len(), 32);
```

## Signed releases

**The release workflow signs what it attaches to a GitHub release.** For
0.0.10 that is a Linux x86-64 build of the `hsh` command and a `SHA256SUMS`
file, each with a keyless cosign bundle, and the binary carries SLSA build
provenance. The [security page](/security/#verifying-a-release) shows how to
check them.
