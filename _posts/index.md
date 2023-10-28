---

# Front Matter (YAML)

author: "Sebastien Rousseau"
banner_alt: "Black wireframe animation by Enchanted Studios"
banner_height: "100vh"
banner_width: "100vw"
banner: "https://kura.pro/stock/images/banners/black.webp"
cdn: "https://kura.pro"
changefreq: "weekly"
charset: "utf-8"
cname: "hshlib.one"
copyright: "© 2023 Hash (HSH). All rights reserved."
date: "Oct 28, 2023"
description: "Discover Hash (HSH), a Highly Secure Quantum-Resistant Cryptographic Hash Library for Password Encryption and Verification in Rust."
download_url: "https://github.com/sebastienrousseau/hsh/archive/refs/tags/v0.0.6.zip"
download_title: "Download Hash (HSH) ↓"
format-detection: "telephone=no"
hero_description: "The next evolution of Cryptography is Quantum-Resistant Cryptography (QRC), an essential component for the future of a safer internet."
hreflang: "en"
icon: "https://kura.pro/hsh/images/favicon.ico"
id: "https://hshlib.one"
image_alt: "Logo of Hash (HSH), a Quantum-Resistant Cryptographic Hash Library"
image_height: "100vh"
image_width: "100vw"
image: "https://kura.pro/hsh/images/logos/hsh.webp"
keywords: "quantum-resistant cryptographic hash library, password encryption, password verification, Rust, Argon2i, bcrypt, scrypt, password hashing, password security, cybersecurity"
language: "en-GB"
layout: "index"
locale: "en_GB"
logo_alt: "Logo of Hash (HSH), a Quantum-Resistant Cryptographic Hash Library"
logo_height: "44"
logo_width: "44"
logo: "https://kura.pro/hsh/images/logos/hsh.webp"
menu: "active"
measurementID: "G-1ETHW4X7HK"
name: "Hash (HSH)"
permalink: "https://hshlib.one"
rating: "general"
referrer: "no-referrer"
revisit-after: "7 days"
robots: "index, follow"
short_name: "hsh"
subtitle: "Unleash the full power of Quantum-Resistant Cryptography"
tags: "cryptography, hash, password, security, argon2i, bcrypt, scrypt, rust, quantum-resistant, shield"
theme_color: "rgb(17, 202, 240)"
title: "Hash (HSH), a Quantum-Resistant Cryptographic Hash Library"
url: "https://hshlib.one"
viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"

# RSS - The RSS feed front matter (YAML).

atom_link: "https://hshlib.one/rss.xml"
category: "Software, Static Site Generator, Rust"
docs: "https://validator.w3.org/feed/docs/rss2.html"
generator: "Shokunin 🦀 (version 0.0.19)"
item_description: "Discover Hash (HSH), a Highly Secure Quantum-Resistant Cryptographic Hash Library for Password Encryption and Verification in Rust."
item_guid: "https://hshlib.one/rss.xml"
item_link: "https://hshlib.one/rss.xml"
item_pub_date: "2023-10-28T17:12:17+00:00"
item_title: "Shokunin - RSS Feed"
last_build_date: "2023-10-28T17:12:17+00:00"
managing_editor: "contact@hshlib.one"
pub_date: "2023-10-28T17:12:17+00:00"
ttl: "60"
type: "website"
webmaster: "contact@hshlib.one"

# Apple - The Apple front matter (YAML).

apple_mobile_web_app_orientations: "portrait"
apple_touch_icon_sizes: "192x192"
apple-mobile-web-app-capable: "yes"
apple-mobile-web-app-status-bar-inset: "black"
apple-mobile-web-app-status-bar-style: "black-translucent"
apple-mobile-web-app-title: "Hash (HSH), a Quantum-Resistant Cryptographic Hash Library"
apple-touch-fullscreen: "yes"

# MS Application - The MS Application front matter (YAML).

msapplication-config: "/browserconfig.xml"
msapplication-tap-highlight: "no"
msapplication-TileColor: "rgb(17, 202, 240)"
msapplication_tile_image: "https://kura.pro/hsh/images/titles/title-hsh.webp"

# Twitter Card - The Twitter Card front matter (YAML).

twitter_card: "summary"
twitter_creator: "@wwdseb"
twitter_description: "Discover Hash (HSH), a Highly Secure Quantum-Resistant Cryptographic Hash Library for Password Encryption and Verification in Rust."
twitter_image: "https://kura.pro/hsh/images/titles/title-hsh.webp"
twitter_image_alt: "Logo of Hash (HSH), a Quantum-Resistant Cryptographic Hash Library"
twitter_site: "@wwdseb"
twitter_title: "Hash (HSH), a Quantum-Resistant Cryptographic Hash Library"
twitter_url: "https://hshlib.one/"

# Humans.txt - The Humans.txt front matter (YAML).

author_website: "https://hshlib.one"
author_twitter: "@wwdseb"
author_location: "London, UK"
thanks: "Thanks for reading!"
site_last_updated: "2023-10-22"
site_standards: "HTML5, CSS3, RSS, Atom, JSON, XML, YAML, Markdown, TOML"
site_components: "Shokunin SSG, Shokunin CLI, Shokunin Templates, Kaishi Templates, Kaishi Themes"
site_software: "Shokunin, Rust"

---

## Overview

The Hash (HSH) Rust library provides an interface for implementing
secure hash and digest algorithms, specifically designed for password
encryption and verification.

The library provides a simple API that makes it easy to store and verify
hashed passwords. It enables robust security for passwords, using the
latest advancements in Quantum-resistant cryptography. Quantum-
resistant cryptography refers to cryptographic algorithms, usually
public-key algorithms, that are thought to be secure against an attack
by a quantum computer. As quantum computing continues to advance, this
feature of the library assures that the passwords managed through this
system remain secure even against cutting-edge computational
capabilities.

The library supports the following Password Hashing Schemes (Password
Based Key Derivation Functions):

- [**Argon2i**](<https://en.wikipedia.org/wiki/Argon2>): A cutting-edge
  and highly secure key derivation function designed to protect against
  both traditional brute-force attacks and rainbow table attacks.
  (Recommended)
- [**Bcrypt**](<https://en.wikipedia.org/wiki/Bcrypt>): A password
  hashing function designed to be secure against brute-force attacks.
  It is a work-factor function, which means that it takes a certain
  amount of time to compute. This makes it difficult to attack with a
  brute-force algorithm.
- [**Scrypt**](<https://en.wikipedia.org/wiki/Scrypt>): A password
  hashing function designed to be secure against both brute-force
  attacks and rainbow table attacks. It is a memory-hard and work-
  factor function, which means that it requires a lot of memory and
  time to compute. This makes it very difficult to attack with a GPU
  or other parallel computing device.

The library is a valuable tool for developers who need to store and
verify passwords in a secure manner. It is easy to use and can be
integrated into a variety of applications.

[Learn more about the benefits of Hash (HSH) ❯][01]

[01]: /overview/index.html "Learn more about the benefits of Hash (HSH)"
