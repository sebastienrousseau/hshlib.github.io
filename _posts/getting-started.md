---

# Front Matter (YAML)

author: "Sebastien Rousseau"
banner_alt: "A blurry image of a ball of light in the dark"
banner_height: "100vh"
banner_width: "100vw"
banner: "https://kura.pro/stock/images/banners/daniele-franchi-Vl6YuVBLEys.webp"
cdn: "https://kura.pro"
changefreq: "weekly"
charset: "utf-8"
cname: ""
copyright: "© 2023 Hash (HSH). All rights reserved."
date: "Oct 29, 2023"
description: "Hash (HSH): Secure your passwords with quantum-resistant cryptography. This section will help you get started with Hash (HSH) as quickly as possible."
download: ""
format-detection: "telephone=no"
hreflang: "en"
icon: "https://kura.pro/shokunin/images/favicon.ico"
id: "https://hshlib.one/overview/index.html"
image_alt: "Logo of Hash (HSH), a Quantum-Safe Cryptography (QSC) Hash Library"
image_height: "100vh"
image_width: "100vw"
image: "https://kura.pro/hsh/images/logos/hsh.webp"
keywords: "quantum-resistant password hashing, password security, cybersecurity, post-quantum cryptography, Hash (HSH), Argon2, bcrypt, scrypt, quantum computing, password attacks, data protection"
language: "en-GB"
layout: "link"
locale: "en_GB"
logo_alt: "Logo of Hash (HSH), a Quantum-Safe Cryptography (QSC) Hash Library"
logo_height: "44"
logo_width: "44"
logo: "https://kura.pro/hsh/images/logos/hsh.webp"
menu: "active"
measurementID: "G-VN18SSQLM6"
name: "Getting Started"
permalink: "https://hshlib.one/overview/index.html"
rating: "general"
referrer: "no-referrer"
revisit-after: "7 days"
robots: "index, follow"
short_name: "Getting Started"
subtitle: "Start Building Secure Applications with Hash (HSH)"
tags: "quantum, password, security, cryptography, Hash, Argon2, bcrypt, scrypt, post-quantum, data, protection"
theme_color: "rgb(17, 202, 240)"
title: "Hash (HSH):  Installation Prerequisites"
url: "https://hshlib.one"
viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"

# RSS - The RSS feed front matter (YAML).

atom_link: "https://hshlib.one/overview/rss.xml"
category: "Software, Static Site Generator, Rust"
docs: "https://validator.w3.org/feed/docs/rss2.html"
generator: "Shokunin 🦀 (version 0.0.19)"
item_description: "Hash (HSH): Secure your passwords with quantum-resistant cryptography. This section will help you get started with Hash (HSH) as quickly as possible."
item_guid: "https://hshlib.one/overview/rss.xml"
item_link: "https://hshlib.one/overview/rss.xml"
item_pub_date: "2023-10-29T10:01:10+00:00"
item_title: "Hash (HSH):  Installation Prerequisites"
last_build_date: "2023-10-29T10:01:10+00:00"
managing_editor: "contact@hshlib.one"
pub_date: "2023-10-29T10:01:10+00:00"
ttl: "60"
type: "website"
webmaster: "contact@hshlib.one"

# Apple - The Apple front matter (YAML).

apple_mobile_web_app_orientations: "portrait"
apple_touch_icon_sizes: "192x192"
apple-mobile-web-app-capable: "yes"
apple-mobile-web-app-status-bar-inset: "black"
apple-mobile-web-app-status-bar-style: "black-translucent"
apple-mobile-web-app-title: "Hash (HSH):  Installation Prerequisites"
apple-touch-fullscreen: "yes"

# MS Application - The MS Application front matter (YAML).

msapplication-config: "/browserconfig.xml"
msapplication-tap-highlight: "no"
msapplication-TileColor: "rgb(17, 202, 240)"
msapplication_tile_image: "https://kura.pro/hsh/images/titles/title-hsh.webp"

# Twitter Card - The Twitter Card front matter (YAML).

twitter_card: "summary"
twitter_creator: "@wwdseb"
twitter_description: "Hash (HSH): Secure your passwords with quantum-resistant cryptography. This section will help you get started with Hash (HSH) as quickly as possible."
twitter_image: "https://kura.pro/hsh/images/titles/title-hsh.webp"
twitter_image_alt: "Logo of Hash (HSH), a Quantum-Safe Cryptography (QSC) Hash Library"
twitter_site: "@wwdseb"
twitter_title: "Hash (HSH):  Installation Prerequisites"
twitter_url: "https://hshlib.one/overview/index.html"

# Humans.txt - The Humans.txt front matter (YAML).

author_website: "https://hshlib.one"
author_twitter: "@wwdseb"
author_location: "London, UK"
thanks: "Thanks for reading!"
site_last_updated: "2023-10-25"
site_standards: "HTML5, CSS3, RSS, Atom, JSON, XML, YAML, Markdown, TOML"
site_components: "Shokunin SSG, Shokunin CLI, Shokunin Templates, Shokunin Themes, Kaishi SSG, Kaishi CLI, Kaishi Templates, Kaishi Themes"
site_software: "Shokunin, Rust"

---

## Requirements

The minimum supported Rust toolchain version is currently Rust
**1.69.0** or later (stable). It is recommended that you install the
latest stable version of Rust.

Once you have the Rust toolchain installed, you can install Hash (HSH) using the following command:

```shell
cargo install ssg
```

## Platform support

`Hash (HSH)` is supported and tested on the following platforms:

### Tier 1 platforms

Rust Tier 1 targets are officially supported and guaranteed to work.

| | Operating System | Target | Description |
| --- | --- | --- | --- |
| ✅ | Linux   | aarch64-unknown-linux-gnu | 64-bit Linux systems on ARM architecture |
| ✅ | Linux   | i686-unknown-linux-gnu | 32-bit Linux (kernel 3.2+, glibc 2.17+) |
| ✅ | Linux   | x86_64-unknown-linux-gnu | 64-bit Linux (kernel 2.6.32+, glibc 2.11+) |
| ✅ | macOS   | x86_64-apple-darwin | 64-bit macOS (10.7 Lion or later) |
| ✅ | Windows | i686-pc-windows-gnu | 32-bit Windows (7 or later) |
| ✅ | Windows | i686-pc-windows-msvc | 32-bit Windows (7 or later) |
| ✅ | Windows | x86_64-pc-windows-gnu | 64-bit Windows (7 or later) |
| ✅ | Windows | x86_64-pc-windows-msvc | 64-bit Windows (7 or later) |

### Tier 2 platforms

Rust Tier 2 targets are supported for building, but not necessarily running.

| | Operating System | Target | Description |
| --- | --- | --- | --- |
| ✅ | Linux   | aarch64-unknown-linux-musl | 64-bit Linux systems on ARM architecture |
| ✅ | Linux   | arm-unknown-linux-gnueabi | ARMv6 Linux (kernel 3.2, glibc 2.17) |
| ✅ | Linux   | arm-unknown-linux-gnueabihf | ARMv7 Linux, hardfloat (kernel 3.2, glibc 2.17) |
| ✅ | Linux   | armv7-unknown-linux-gnueabihf | ARMv7 Linux, hardfloat (kernel 3.2, glibc 2.17) |
| ✅ | macOS   | aarch64-apple-darwin | 64-bit macOS (10.7 Lion or later) |
| ✅ | Windows | aarch64-pc-windows-msvc | 64-bit Windows (7 or later) |

## Documentation

You can find the documentation on [docs.rs][02], [lib.rs][03] and [crates.io][01].

## Usage 📖

To use `hsh` in your project, add the following to your `cargo.toml`
file:

```toml
[dependencies]
hsh = "0.0.7"
```

Add the following to your `main.rs` file:

```rust
extern crate hsh;
use hsh::*;
```

then you can use the functions in your application code.

### Examples

`Hash (HSH)` comes with a set of examples that you can use to get
started. The examples are located in the `examples` directory of the
project. To run the examples, clone the repository and run the following
command in your terminal from the project root directory.

```shell
cargo run --example hsh
```

## Get the source code on GitHub

Get the Hash (HSH) source code on [GitHub ⧉][04].

## Support

Contribute code on [GitHub ⧉][04].

[01]: https://crates.io/crates/hsh "#Hash (HSH) on crates.io"
[02]: https://docs.rs/hsh "Hash (HSH) documentation on docs.rs"
[03]: https://lib.rs/crates/hsh "Hash (HSH) on lib.rs"
[04]: https://github.com/sebastienrousseau/hsh "Hash (HSH) on GitHub"
