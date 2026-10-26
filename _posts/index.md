---
name: "hsh"
short_name: "hsh"
title: "hsh: password hashing for Rust, with rehash on login"
description: "hsh is a password hashing library for Rust: Argon2id, bcrypt, scrypt and PBKDF2 behind one policy, PHC strings, rehash on login when the policy changes, a versioned pepper, a FIPS 140-3 mode and a command-line tool."
keywords: "hsh, Rust password hashing, Argon2id, bcrypt, scrypt, PBKDF2, PHC string, password pepper, FIPS 140-3, rehash"
author: "Sebastien Rousseau"
date: "2026-10-26"
news_publication_date: "2026-10-26"
layout: "index"
language: "en-GB"
schema: "page"
changefreq: "weekly"
eyebrow: "Open-source Rust library"
headline: "Password hashing for Rust that upgrades old hashes as users sign in"
lead: "hsh hashes passwords with Argon2id, bcrypt, scrypt or PBKDF2 under one policy, and when a stored hash falls behind that policy, the next successful sign-in replaces it."
---
## What is hsh?

hsh, the Hash (HSH) project, is a free, open-source password hashing library
for Rust. You describe how passwords should be stored in a `Policy`; `api::hash`
turns a password into a PHC string to store, and `api::verify_and_upgrade`
checks a password against a stored hash and, when the hash was made under an
older or weaker policy, returns a new one to save. It supports Argon2id,
bcrypt, scrypt and PBKDF2, an optional pepper and a FIPS 140-3 mode, and is
dual-licensed under Apache-2.0 or MIT.

## Is it quantum-resistant?

The old version of this site said so; it is not a claim hsh makes. hsh stores
passwords with the established password-hashing functions above. For
post-quantum key exchange or signatures, use a library built for them.

## Which version should I use?

0.0.10, the latest release of the `hsh` library on crates.io, published on
27 May 2026. The repository is tagged 0.0.12, but that release did not reach
crates.io for the library or the command-line tool. The
[changelog](/changelog/) has the detail.

## Who makes it?

hsh is written by [Sebastien Rousseau](https://sebastienrousseau.com/) and
its contributors. The source, the issue tracker and every release are on
[GitHub](https://github.com/sebastienrousseau/hsh); the crates are on
[crates.io](https://crates.io/crates/hsh). Read more on the
[about page](/about/).
