---
name: "hsh"
short_name: "hsh"
title: "Getting started with hsh: hash, verify and upgrade a password | hsh"
description: "Add hsh to a Rust project, hash a password under the OWASP 2025 policy, verify it and save the upgraded hash, choose another algorithm, and install the command-line tool."
keywords: "hsh getting started, cargo add hsh, Rust password hashing example, Argon2id Rust example"
author: "Sebastien Rousseau"
date: "2026-10-26"
news_publication_date: "2026-10-26"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "monthly"
eyebrow: "Getting started"
headline: "Your first stored password"
lead: "From an empty Rust project to a hash you can store and verify, in one file."
nav_docs: "true"
---
## What do I need?

Rust 1.85 or newer for the library. Its manifest declares 1.75, but the
`bcrypt` dependency it pulls in today needs 1.85: on Rust 1.80 the build
stops while reading a dependency's manifest, and on 1.85 it succeeds. The
`hsh` command-line tool needs Rust 1.88. CI tests the workspace on Linux,
macOS and Windows.

## How do I add it?

```bash
cargo add hsh
```

or in `Cargo.toml`:

```toml
[dependencies]
hsh = "0.0.10"
```

0.0.10 is the latest release of `hsh` on crates.io. No Cargo features are on
by default.

## How do I hash and verify a password?

```rust
use hsh::{api, Outcome, Policy};

fn main() -> Result<(), hsh::Error> {
    let policy = Policy::owasp_minimum_2025();

    // At sign-up: store this string.
    let stored = api::hash(&policy, "correct horse battery staple")?;

    // At sign-in: check the password, and save the new hash if one comes back.
    match api::verify_and_upgrade(&policy, "correct horse battery staple", &stored)? {
        Outcome::Valid { rehashed: Some(new_hash) } => {
            println!("signed in; save {new_hash}");
        }
        Outcome::Valid { rehashed: None } => println!("signed in"),
        Outcome::Invalid => println!("wrong password"),
    }
    Ok(())
}
```

`stored` is a PHC string such as `$argon2id$v=19$m=19456,t=2,p=1$...`, which
carries the algorithm, its parameters and the salt, so it is all you need to
store.

## How do I use another algorithm?

Start a builder from the preset and change the primary algorithm:

```rust
use hsh::{api, Policy, PrimaryAlgorithm};
use hsh::policy::PolicyBuilder;

let policy = PolicyBuilder::from_preset(&Policy::owasp_minimum_2025())
    .primary(PrimaryAlgorithm::Bcrypt)
    .build()?;
let stored = api::hash(&policy, "hunter2")?; // $2b$10$...
```

The choices are `Argon2id`, `Bcrypt`, `Scrypt` and `Pbkdf2`. Whatever the
policy, `verify_and_upgrade` accepts hashes from all four.

## How do I use it from the shell?

```bash
cargo install hsh-cli --locked
echo -n "correct horse battery staple" | hsh hash --algorithm argon2id
```

## Where next?

- The [API guide](/documentation/) for presets, the builder, Cargo features
  and the crates in the workspace.
- The [migration guide](/migration/) if you are coming from `bcrypt`,
  `rust-argon2`, `argonautica` or an older hsh.
- The full API reference on [docs.rs](https://docs.rs/hsh).
