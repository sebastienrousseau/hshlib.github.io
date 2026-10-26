---
name: "hsh"
short_name: "hsh"
title: "Performance: calibrating the cost of a password hash | hsh"
description: "How long hsh takes to hash a password depends on the parameters and the machine. How to measure it with hsh calibrate and the Criterion benchmarks, and why no fixed numbers are published."
keywords: "hsh benchmark, Argon2id cost, password hashing performance, hsh calibrate"
author: "Sebastien Rousseau"
date: "2026-10-26"
news_publication_date: "2026-10-26"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "monthly"
eyebrow: "Performance"
headline: "How slow should a password hash be?"
lead: "Slow enough to hurt an attacker, fast enough for your sign-in page. Measure it on your own hardware."
nav_docs: "true"
---
## Why are there no headline numbers?

Password hashes are slow on purpose, and how slow depends on the memory and
CPU of the machine running them. The repository's
[doc/BENCHMARKS.md](https://github.com/sebastienrousseau/hsh/blob/main/doc/BENCHMARKS.md)
describes the benchmarks and keeps a table for published results, but no
results are filled in yet. Measure on a machine like the one you will deploy
to.

## How do I measure it?

`hsh calibrate` hashes with increasing Argon2id memory settings and marks the
one closest to a time budget:

```bash
hsh calibrate --algorithm argon2id --target-ms 250
```

One run on an Apple A18 Pro Mac, with hsh-cli 0.0.10, printed:

```text
argon2id m=8192 t=2 p=1 → 13 ms (off by 237 ms)
argon2id m=19456 t=2 p=1 → 34 ms (off by 216 ms)
argon2id m=32768 t=2 p=1 → 53 ms (off by 197 ms)
argon2id m=65536 t=2 p=1 → 107 ms (off by 143 ms)
* argon2id m=131072 t=2 p=1 → 270 ms (off by 20 ms)
```

So on that machine the OWASP 2025 minimum, 19,456 KiB, took about 34 ms, and
a 250 ms budget allows about seven times the memory. Your numbers will
differ.

## What do the Criterion benchmarks cover?

From a clone of the repository, `cargo bench --bench benchmark` times
`api::hash` and `api::verify_and_upgrade` for Argon2id, bcrypt and scrypt at
the OWASP 2025 minimums, plus a group with deliberately weak parameters used
by the tests. `--quick` gives a smoke run.

## How do I choose?

Pick the largest parameters your sign-in latency and server memory allow,
and raise them later: with `verify_and_upgrade`, existing hashes move to the
new parameters as users sign in.
