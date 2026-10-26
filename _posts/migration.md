---
name: "hsh"
short_name: "hsh"
title: "Migrate to hsh from bcrypt, rust-argon2, argonautica or an older hsh | hsh"
description: "How to move password storage to hsh from the bcrypt, rust-argon2 or argonautica crates or from an older hsh, keeping existing hashes valid and upgrading them as users sign in."
keywords: "hsh migration, bcrypt to argon2id Rust, rust-argon2 migration, argonautica replacement"
author: "Sebastien Rousseau"
date: "2026-10-26"
news_publication_date: "2026-10-26"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "monthly"
eyebrow: "Migration"
headline: "Moving password storage to hsh"
lead: "Existing hashes keep working, and move to the current policy as users sign in."
nav_migration: "true"
---
## The general approach

Point hsh at the hashes you already store. `api::verify_and_upgrade` reads
PHC strings and bcrypt's `$2b$` format, verifies each with the algorithm and
parameters it was made with, and returns a new hash under your policy when
the old one falls short. Save that hash and the migration happens one sign-in
at a time.

## From the bcrypt crate

```diff
-use bcrypt::{hash, verify, DEFAULT_COST};
-let stored = hash("hunter2", DEFAULT_COST)?;
-let ok = verify("hunter2", &stored)?;
+use hsh::{api, Policy};
+let policy = Policy::owasp_minimum_2025();
+let outcome = api::verify_and_upgrade(&policy, "hunter2", &stored)?;
+let ok = outcome.is_valid();
```

With the default policy, each bcrypt hash that verifies comes back as
Argon2id. To keep bcrypt for new hashes, set `.primary(PrimaryAlgorithm::Bcrypt)`
on a `PolicyBuilder`. Passwords over 72 bytes are rejected rather than
truncated.

## From rust-argon2

```diff
-let cfg = argon2::Config::owasp5();
-let stored = argon2::hash_encoded(b"hunter2", salt, &cfg)?;
-let ok = argon2::verify_encoded(&stored, b"hunter2")?;
+let policy = hsh::Policy::owasp_minimum_2025();
+let stored = hsh::api::hash(&policy, "hunter2")?;
+let ok = hsh::api::verify_and_upgrade(&policy, "hunter2", &stored)?.is_valid();
```

hsh makes the salt for you.

## From argonautica

argonautica was archived in 2019. Replace its `Hasher` and `Verifier` with
`api::hash` and `api::verify_and_upgrade`; its `with_secret_key` corresponds
to hsh's pepper, set with `Policy::with_pepper` and the `pepper` feature. The
repository's
[migration guide](https://github.com/sebastienrousseau/hsh/blob/main/doc/MIGRATION-from-argonautica.md)
has the checklist.

## From an older hsh

Version 0.0.9 replaced the stringly-typed API with `Policy`, `api::hash` and
`api::verify_and_upgrade`. The `compat-v0_0_x` feature brings back the old
shape while you move call sites; it is deprecated.

The repository has guides for
[bcrypt](https://github.com/sebastienrousseau/hsh/blob/main/doc/MIGRATION-from-bcrypt.md),
[rust-argon2](https://github.com/sebastienrousseau/hsh/blob/main/doc/MIGRATION-from-rust-argon2.md),
[password-auth](https://github.com/sebastienrousseau/hsh/blob/main/doc/MIGRATION-from-password-hash.md)
and [djangohashers](https://github.com/sebastienrousseau/hsh/blob/main/doc/MIGRATION-from-djangohashers.md).
