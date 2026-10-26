---
name: "hsh"
short_name: "hsh"
title: "Frequently asked questions about hsh | hsh"
description: "Answers about hsh: what it is, quantum resistance, choosing an algorithm, migrating hashes, FIPS 140-3, cloud peppers, long bcrypt passwords, no_std, versions and the licence."
keywords: "hsh faq, hsh FIPS, hsh quantum, hsh bcrypt 72 bytes, hsh pepper KMS"
author: "Sebastien Rousseau"
date: "2026-10-26"
news_publication_date: "2026-10-26"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "monthly"
eyebrow: "FAQ"
headline: "Frequently asked questions"
lead: "Short answers first; each links to the page with the detail where there is one."
nav_faqs: "true"
---
## What is hsh?

hsh is a free, open-source password hashing library for Rust. It hashes passwords with Argon2id, bcrypt, scrypt or PBKDF2 under one policy, stores them as PHC strings, and rehashes old ones as users sign in. See the [features](/features/).

## Is hsh quantum-resistant?

hsh does not claim to be. It uses the established password-hashing functions Argon2id, bcrypt, scrypt and PBKDF2. The old version of this site said otherwise; that claim was not supported.

## Which algorithm should I use?

Argon2id, the default in `Policy::owasp_minimum_2025()`. Use PBKDF2 if you need FIPS 140-3, and bcrypt or scrypt to keep compatibility with existing systems. See [the algorithms](/features/#four-algorithms).

## Do I have to migrate existing hashes in a batch?

No. `verify_and_upgrade` verifies existing bcrypt, scrypt, PBKDF2 and Argon2 hashes, and returns a new hash under your policy when a user signs in, which you save. See the [migration guide](/migration/).

## Is hsh FIPS 140-3 validated?

No. With the `fips` feature, a FIPS policy hashes with PBKDF2 inside the AWS-LC FIPS module through `aws-lc-rs`; the validation belongs to that module. Without the feature, a FIPS policy refuses to hash. See the [FIPS mode](/features/#fips-140-3-mode).

## Can the pepper live in a cloud KMS?

Not yet. The AWS, Google Cloud, Azure and HashiCorp Vault providers are stubs in 0.0.10. `LocalPepper`, which keeps the keys in your process, works today.

## Why does a long bcrypt password fail?

bcrypt only reads 72 bytes. Rather than hash a truncated password, hsh rejects it, unless you turn on pre-hashing in the bcrypt parameters.

## Does it work without the standard library?

No. hsh needs std for the operating system's random-number generator.

## Why is crates.io at 0.0.10 when the repository says 0.0.12?

The 0.0.12 release workflow failed, so the hsh library and hsh-cli were not published at 0.0.12, while hsh-kms and hsh-digest were. Use 0.0.10 of all four.

## What does it cost, and under which licence?

Nothing. hsh is free software under the Apache License 2.0 or the MIT licence, at your option.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is hsh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "hsh is a free, open-source password hashing library for Rust. It hashes passwords with Argon2id, bcrypt, scrypt or PBKDF2 under one policy, stores them as PHC strings, and rehashes old ones as users sign in."
      }
    },
    {
      "@type": "Question",
      "name": "Is hsh quantum-resistant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "hsh does not claim to be. It uses the established password-hashing functions Argon2id, bcrypt, scrypt and PBKDF2. The old version of this site said otherwise; that claim was not supported."
      }
    },
    {
      "@type": "Question",
      "name": "Which algorithm should I use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Argon2id, the default in Policy::owasp_minimum_2025(). Use PBKDF2 if you need FIPS 140-3, and bcrypt or scrypt to keep compatibility with existing systems."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to migrate existing hashes in a batch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. verify_and_upgrade verifies existing bcrypt, scrypt, PBKDF2 and Argon2 hashes, and returns a new hash under your policy when a user signs in, which you save."
      }
    },
    {
      "@type": "Question",
      "name": "Is hsh FIPS 140-3 validated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. With the fips feature, a FIPS policy hashes with PBKDF2 inside the AWS-LC FIPS module through aws-lc-rs; the validation belongs to that module. Without the feature, a FIPS policy refuses to hash."
      }
    },
    {
      "@type": "Question",
      "name": "Can the pepper live in a cloud KMS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not yet. The AWS, Google Cloud, Azure and HashiCorp Vault providers are stubs in 0.0.10. LocalPepper, which keeps the keys in your process, works today."
      }
    },
    {
      "@type": "Question",
      "name": "Why does a long bcrypt password fail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "bcrypt only reads 72 bytes. Rather than hash a truncated password, hsh rejects it, unless you turn on pre-hashing in the bcrypt parameters."
      }
    },
    {
      "@type": "Question",
      "name": "Does it work without the standard library?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. hsh needs std for the operating system's random-number generator."
      }
    },
    {
      "@type": "Question",
      "name": "Why is crates.io at 0.0.10 when the repository says 0.0.12?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 0.0.12 release workflow failed, so the hsh library and hsh-cli were not published at 0.0.12, while hsh-kms and hsh-digest were. Use 0.0.10 of all four."
      }
    },
    {
      "@type": "Question",
      "name": "What does it cost, and under which licence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nothing. hsh is free software under the Apache License 2.0 or the MIT licence, at your option."
      }
    }
  ]
}
</script>
