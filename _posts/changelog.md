---
name: "hsh"
short_name: "hsh"
title: "Changelog: hsh releases up to 0.0.12 | hsh"
description: "What changed in hsh's recent releases, from the 0.0.9 rewrite to the FIPS backend in 0.0.10 and the partial 0.0.12 release, with links to the full changelog."
keywords: "hsh changelog, hsh releases, hsh 0.0.10, hsh 0.0.9"
author: "Sebastien Rousseau"
date: "2026-10-26"
news_publication_date: "2026-10-26"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "monthly"
eyebrow: "Changelog"
headline: "hsh releases up to 26 October 2026"
lead: "The recent releases, summarised from the project's CHANGELOG.md, dated by crates.io and GitHub."
---
## 0.0.12, 11 October 2026 (partly published)

- Dependency and CI updates.
- The release workflow failed: `hsh-kms` and `hsh-digest` reached crates.io
  at 0.0.12, while `hsh`, `hsh-cli` and `hsh-backend-awslc` stayed at 0.0.10,
  and the GitHub release has no files attached.

## 0.0.11 (not released)

- Records a planned move to the next RustCrypto releases, deferred until
  `argon2` 0.6 is stable. There is no 0.0.11 tag or crates.io release.

## 0.0.10, 27 May 2026

- The `fips` feature now routes PBKDF2 through the AWS-LC FIPS module, by way
  of the new `hsh-backend-awslc` crate, and `Policy::fips_140_pbkdf2()` can
  hash in such a build. Without the feature, a FIPS policy still refuses.
- A CI job builds and tests the `fips` feature.
- CI and dependency updates, and workflow permission and pinning fixes from
  OpenSSF Scorecard.

## 0.0.9, 24 May 2026

- The rewrite: `Policy`, `PolicyBuilder`, `api::hash` and
  `api::verify_and_upgrade`, with rehash on login, PHC strings, the bcrypt
  72-byte rail, the pepper in `hsh-kms`, the FIPS contract, `hsh-digest` and
  the `hsh` command in `hsh-cli`.
- The old API stays behind the deprecated `compat-v0_0_x` feature.

## Where is the full history?

Every change is in
[CHANGELOG.md](https://github.com/sebastienrousseau/hsh/blob/main/CHANGELOG.md),
and the releases are on
[GitHub](https://github.com/sebastienrousseau/hsh/releases) and
[crates.io](https://crates.io/crates/hsh/versions).
