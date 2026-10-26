---
name: "hsh"
short_name: "hsh"
title: "API guide: policies, the builder, Cargo features and crates | hsh"
description: "A guide to hsh's API: the two calls, the policy presets and builder, the outcomes, errors, every Cargo feature and the crates in the workspace."
keywords: "hsh api, hsh Policy, PolicyBuilder, verify_and_upgrade, hsh cargo features"
author: "Sebastien Rousseau"
date: "2026-10-26"
news_publication_date: "2026-10-26"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "monthly"
eyebrow: "API guide"
headline: "How the hsh API fits together"
lead: "The calls, presets and features you choose between, with the full reference on docs.rs."
nav_docs: "true"
---
## Two calls

| Call | What it does |
| :--- | :--- |
| `api::hash(&policy, password)` | Returns a new hash string under the policy |
| `api::verify_and_upgrade(&policy, password, &stored)` | Returns `Outcome::Valid { rehashed }` or `Outcome::Invalid` |

`rehashed` is `Some(new_hash)` when the stored hash no longer meets the
policy. `Outcome::is_valid()` gives a plain yes or no.

## Presets

| Preset | Primary algorithm |
| :--- | :--- |
| `Policy::owasp_minimum_2025()` | Argon2id at the OWASP 2025 minimums |
| `Policy::rfc9106_first_recommended()` | Argon2id at RFC 9106's first recommended option |
| `Policy::fips_140_pbkdf2()` | PBKDF2, FIPS mode |

## The builder

`PolicyBuilder::new()` or `PolicyBuilder::from_preset(&preset)`, then
`.primary(..)`, `.backend(..)`, `.argon2(..)`, `.bcrypt(..)`, `.scrypt(..)`,
`.pbkdf2(..)` and, with the `pepper` feature, `.pepper(..)`; finish with
`.build()`. A built policy reports its settings through `primary()`,
`backend()`, `argon2_params()`, `bcrypt_params()`, `scrypt_params()`,
`pbkdf2_params()` and `has_pepper()`.

## Errors

`api::hash` returns an error rather than a weak hash: for a bcrypt password
over 72 bytes, for a FIPS policy in a build without the `fips` feature, and
for a FIPS policy whose primary algorithm is not PBKDF2. Each error message
says what to change.

## Cargo features

| Feature | Crate | What it adds |
| :--- | :--- | :--- |
| `pepper` | `hsh` | `Policy::with_pepper`, through `hsh-kms` |
| `fips` | `hsh` | PBKDF2 through the AWS-LC FIPS module, through `hsh-backend-awslc` |
| `compat-v0_0_x` | `hsh` | The pre-0.0.9 API, deprecated, for migration only |
| `aws-kms`, `gcp-kms`, `azure-key-vault`, `hashicorp-vault` | `hsh-kms` | Pepper providers; stubs that return an error in 0.0.10 |
| `sha2`, `sha3`, `blake3` | `hsh-digest` | The digest families, on by default |
| `k12`, `ascon` | `hsh-digest` | Reserved; not implemented |

## Crates in the workspace

| Crate | What it is | Latest on crates.io |
| :--- | :--- | :--- |
| [`hsh`](https://crates.io/crates/hsh) | The library | 0.0.10 |
| [`hsh-cli`](https://crates.io/crates/hsh-cli) | The `hsh` command | 0.0.10 |
| [`hsh-kms`](https://crates.io/crates/hsh-kms) | The `Pepper` trait and `LocalPepper` | 0.0.12 |
| [`hsh-digest`](https://crates.io/crates/hsh-digest) | SHA-2, SHA-3 and BLAKE3, not for passwords | 0.0.12 |
| [`hsh-backend-awslc`](https://crates.io/crates/hsh-backend-awslc) | PBKDF2 through `aws-lc-rs`, for the `fips` feature | 0.0.10 |

Use the 0.0.10 versions of `hsh-kms` and `hsh-digest` with `hsh` 0.0.10.

## Where is the full reference?

The rendered reference is on [docs.rs/hsh](https://docs.rs/hsh). The
repository's [doc/](https://github.com/sebastienrousseau/hsh/tree/main/doc)
folder has the FIPS and KMS guides, the operations runbook and the
architecture decision records.
