<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

# Changelog

All notable changes to the hsh website, hshlib.com (formerly hshlib.one),
are documented here.

## [0.0.4] - Unreleased

### Changed

- Re-themed the site with the cipher theme from the ssg-themes suite,
  replacing Prism. The accent colour tokens use the teal taken from the
  hsh logo; every other colour is cipher's. Content, URLs, structured data
  and the build checks are unchanged; the contrast gate now checks
  cipher's tokens, including the aliases its components use.
- Only the navigation, theme toggle, search and FAQ parts of cipher's
  `main.js` are kept; its password generator and the word list it carries
  have no use on this site.

## [0.0.3] - 2026-10-26 (merged, not tagged)

### Changed

- Serve the site at https://hshlib.com/, the homepage in hsh's own
  Cargo.toml, instead of hshlib.one: base URL, canonical and Open Graph
  URLs, the CNAME the build writes, robots.txt, security.txt and the README.

## [0.0.2] - 2026-10-26 (merged, not tagged)

### Changed

- Rebuilt the site with Static Site Generator 0.0.69 and the Prism theme,
  coloured from the hsh logo, replacing the 2023 Shokunin site.
- Rewrote every page from the hsh repository at version 0.0.12 and the
  0.0.10 release on crates.io: the site now describes the policy-based
  API, rehash on login, the pepper and the FIPS 140-3 mode, and drops the
  claim that hsh is quantum-resistant and the getting-started step that
  installed the site generator instead of the library.
- `make build` checks colour contrast (WCAG AAA), requires ssg's quality
  gate at 10/10, verifies every `#fragment` and SRI hash, renders one social
  image per page and runs `ssg audit`; the Pages workflow builds and deploys
  the result instead of uploading committed output.
- Removed Google Analytics and the third-party scripts the old pages
  loaded; the site sets no cookies.

## [0.0.1] - 2026-10-26 (merged, not tagged)

### Changed

- Licensed the site's source under Apache-2.0 OR MIT.
- Deployed GitHub Pages with GitHub Actions instead of from a branch.
