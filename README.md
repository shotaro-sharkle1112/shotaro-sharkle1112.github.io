# samelab.dev

Shotaro Matsuyama's personal portfolio site. Static HTML/CSS/JS, hosted on GitHub Pages.

- **Live:** https://samelab.dev
- **Stack:** plain HTML / CSS / vanilla JS — no build step.

## Structure

```
.
├── index.html            # page content
├── assets/
│   ├── css/style.css     # styles & design tokens
│   ├── js/main.js        # year stamp + scroll reveal
│   └── favicon.svg
├── CNAME                 # custom domain for GitHub Pages (samelab.dev)
└── .nojekyll             # serve files as-is (skip Jekyll)
```

## Editing

Just edit `index.html` and `assets/css/style.css`, then commit & push to `main`.
GitHub Pages redeploys automatically within a minute or two.
