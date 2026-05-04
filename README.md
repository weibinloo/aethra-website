# Aethra Website

Static Astro website for Aethra, a data and AI strategy consulting business.

## Development

```bash
npm install
npm run dev
```

The local dev server usually runs at `http://localhost:4321/`.

## Build

```bash
npm run build
```

Astro writes the static production site to `dist/`.

## Deployment

The site deploys to GitHub Pages through `.github/workflows/deploy.yml`.

On GitHub, set `Settings > Pages > Source` to `GitHub Actions`. Each push to `main` builds the Astro site and publishes `dist/`.

For the current repository, the expected production URL is:

```text
https://theaethra.co.uk/
```
