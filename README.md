# Minhajur Rahman — Personal Portfolio Site

Personal portfolio site for Minhajur Rahman, presenting his academic research, education, and professional experience to NSERC scholarship reviewers and ML/Research Engineer recruiters.

## Live Site

https://minhajur.net

## Structure

The page is a single-page scroll with the following sections, in order:

- About
- Research
- Education
- Experience
- Publications
- Conferences
- Certificates
- Teaching
- Awards
- Skills
- Contact

## Purpose

This site serves two audiences at once: NSERC scholarship reviewers and ML/Research Engineer recruiters at technology companies. Content and visual hierarchy are deliberately designed for both.

The Research section documents active MSc thesis work on auction end-price prediction at UPEI under the Mitacs Accelerate Fellowship.

## Tech Stack

- Plain HTML, CSS, and vanilla JavaScript — no framework, no build step, no package manager
- `js/data.js` holds all content; `js/render.js` builds the page DOM from it at runtime
- Google Fonts (DM Serif Display, DM Mono, Outfit), loaded via CSS `@import`
- Tabler Icons webfont, loaded via CDN link in `index.html`

## Local Development

There is no build step. Serve the project root with any static file server and open it in a browser, for example:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Opening `index.html` directly in a browser also works.

## Deployment

The site is hosted on GitHub Pages with a custom domain configured via the `CNAME` file (`minhajur.net`). Pushing to the `main` branch updates the live site.

## License

MIT License — the code is open source. The content (text, publications, personal information) is not.

## Note on Content

Content reflects the author's active MSc research and professional history as of 2026; do not copy or reproduce the personal or research content.
