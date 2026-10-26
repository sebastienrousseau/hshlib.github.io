# Third-party licences

`_layouts/` is the **cipher** theme of the ssg-themes suite
([ssg-themes.github.io](https://github.com/sebastienrousseau/ssg-themes.github.io)).
cipher is not on that repository's `main` or in any commit yet: the files
were copied from `themes/cipher/_layouts/` in the uncommitted `themes-27c`
worktree on 2026-10-26, the same worktree the Prism theme came from.
cipher's `theme.toml` declares `license = "MIT"` and links the MIT licence
text; the theme ships no licence file of its own, so
`CIPHER-THEME-MIT.txt` is a copy of the themes repository's `LICENSE-MIT`.

`page.html`, `404.html`, `skeletonic.min.css`, `theme-init.js` and
`styles.css` are cipher's, with this site's accent colour tokens (and
their Display P3 equivalents) in `styles.css`. `main.js` is the first
part of cipher's: navigation, theme toggle, search and FAQ; the password
generator and its packed word list are left out. `base.html`,
`header.html`, `footer.html`, `contact.html` and `index.html` are
cipher's markup with this site's metadata, logo, navigation, form
endpoint and content. cipher's brand icon (credited in its `LOGO.md`) is
not used; the logo is hsh's own. `scripts/contrast.py` and
`scripts/anchor_headings.py` are adapted from the themes repository (MIT).
