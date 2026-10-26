---
name: "hsh"
short_name: "hsh"
title: "Security: reporting, what hsh defends against, and verifying a release | hsh"
description: "How to report a vulnerability in hsh, what it defends against, what is a stub or not yet done, the checks that run, and how to verify a release."
keywords: "hsh security, password hashing security, bcrypt truncation, constant time verify, cosign verify hsh"
author: "Sebastien Rousseau"
date: "2026-10-26"
news_publication_date: "2026-10-26"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "monthly"
eyebrow: "Security"
headline: "Security model and how to check it"
lead: "What hsh defends against, what it leaves to you, and what is not finished."
nav_security: "true"
---
## How do I report a vulnerability?

Privately, through
[GitHub's advisory form](https://github.com/sebastienrousseau/hsh/security/advisories/new),
the preferred channel in hsh's
[security policy](https://github.com/sebastienrousseau/hsh/security/policy),
which also gives an email fallback. Please do not open a public issue. The
policy aims to acknowledge a report within 48 hours and to triage a
confirmed issue within 7 days, with a fixed release within 72 hours for
critical and high severity and within 14 days for medium. Disclosure is
coordinated with a window of up to 90 days. Only the latest release receives
security fixes.

## What does hsh defend against?

| Threat | Defence |
| :--- | :--- |
| Offline cracking of a stolen database | Memory-hard defaults; an optional pepper kept out of the database |
| Hashes stuck at old, weak settings | Rehash on login whenever a hash falls below the policy |
| bcrypt silently dropping bytes after the 72nd | Longer input is rejected unless pre-hashing is turned on |
| Timing differences when comparing hashes | `subtle` constant-time comparison |
| Secrets left in memory | `zeroize` on hash, salt and pepper buffers |
| A FIPS deployment quietly using non-FIPS code | A FIPS policy refuses to hash in a build that cannot satisfy it |
| A peppered hash accepted without its pepper | Verified as `Invalid` |
| Memory-safety bugs | `#![forbid(unsafe_code)]` in every crate; no C library in the default build |

Out of scope, per the policy: vulnerabilities in dependencies, which belong
with their own projects; weak parameters a caller chooses on purpose; and
denial of service through parameters a caller chooses to make expensive.

## What is not finished?

- **Cloud pepper providers.** The AWS KMS, Google Cloud KMS, Azure Key Vault
  and HashiCorp Vault providers in `hsh-kms` 0.0.10 are stubs that return an
  error. `LocalPepper` is the working provider.
- **KangarooTwelve and Ascon** in `hsh-digest` have feature names but no
  implementation.
- **A third-party audit.** hsh has not had one.

## What is checked?

| Check | When |
| :--- | :--- |
| Tests on Linux, macOS and Windows | Every pull request |
| Miri, for the interaction with dependencies that use `unsafe` | Pull requests that touch the crates, and weekly |
| Five cargo-fuzz targets: hashing round trips, PHC parsing, Argon2id and bcrypt verification, the legacy API | Nightly, 10 minutes each |
| `cargo deny` and `cargo audit` | Dependency changes and weekly |
| A build with the `fips` feature | CI, on Linux |

## Verifying a release

The 0.0.10 GitHub release attaches a Linux x86-64 build of the `hsh` command
and a `SHA256SUMS` file, each signed with keyless cosign:

```bash
gh release download v0.0.10 --repo sebastienrousseau/hsh
cosign verify-blob \
  --certificate-identity-regexp '^https://github\.com/sebastienrousseau/hsh/' \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com \
  --bundle hsh--x86_64-unknown-linux-gnu.cosign-bundle.json \
  hsh--x86_64-unknown-linux-gnu
gh attestation verify --owner sebastienrousseau hsh--x86_64-unknown-linux-gnu
```

The attestation names `.github/workflows/release.yml` at the `v0.0.10` tag as
the build that produced the binary. The crates on crates.io do not carry an
attestation; Cargo checks each one against the SHA-256 the registry records.
