---
name: "hsh"
short_name: "hsh"
title: "Contributing to hsh | hsh"
description: "How to contribute to hsh: filing a useful issue, the checks a pull request passes, the commit style and the rules on unsafe code and random sources."
keywords: "contribute to hsh, hsh pull request, hsh contributing guide"
author: "Sebastien Rousseau"
date: "2026-10-26"
news_publication_date: "2026-10-26"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "monthly"
eyebrow: "Contributing"
headline: "Contributing to hsh"
lead: "A summary of the project's contributing guide; the guide in the repository is the reference."
---
## Filing an issue

Search the [issue tracker](https://github.com/sebastienrousseau/hsh/issues)
first. A useful report says what you were doing, what you expected, what
happened, the version (`hsh --version` or the one in your `Cargo.toml`) and
the smallest input that reproduces it. Security reports go through the
private channel on the [security page](/security/), never the public
tracker.

## Sending a pull request

```bash
git clone https://github.com/sebastienrousseau/hsh.git
cd hsh
make ci   # fmt, clippy, tests and docs, as CI runs them
```

- Use Conventional Commits, such as `fix(api): ...` or `feat(cli): ...`, and
  keep each pull request focused.
- New behaviour comes with a regression test next to it, under
  `crates/*/tests/`.
- Read the repository's API stability document before changing a public
  item.
- `rustfmt` and `clippy -D warnings` must pass; an `#[allow(...)]` needs a
  comment explaining it.
- `#![forbid(unsafe_code)]` applies to every crate, and `clippy.toml` bans
  random sources other than the operating system's.
- Do not skip hooks or CI.

The full guide is
[CONTRIBUTING.md](https://github.com/sebastienrousseau/hsh/blob/main/CONTRIBUTING.md).

## Improving this website

The source of hshlib.com is in the
[hshlib.github.io repository](https://github.com/sebastienrousseau/hshlib.github.io).
Report a mistake on the site there, or through the [contact page](/contact/).
