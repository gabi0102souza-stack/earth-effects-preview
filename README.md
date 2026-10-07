# Earth Effects website preview

Independent website concept for presentation. This is not an official or owner-approved Earth Effects website.

- Public URL: https://gabi0102souza-stack.github.io/earth-effects-preview/
- Repository: https://github.com/gabi0102souza-stack/earth-effects-preview
- Branch: main
- Hosting: GitHub Pages, main branch, repository root, with .nojekyll

## Important commercial finding

Johnson City records document a June 2022 transfer of Earth Effects assets and commercial mowing contracts to TruScapes. This does not establish whether Earth Effects currently operates independently. Confirm current operating status and ownership before using this concept as a sales prospect or official website. See docs/RESEARCH.md.

## Run locally

No production dependencies or build step. Serve this directory over HTTP:

```sh
node scripts/server.cjs
```

Open http://127.0.0.1:43821/ . Do not double-click index.html when testing clipboard behavior.

## Structure

- index.html: semantic single-page website, metadata and preview-safe WebPage schema
- styles.css: responsive styles, local fonts, keyboard focus and reduced motion
- script.js: service preselection, validation, email draft preparation and copy fallback
- assets/: licensed regional WebP photography, favicon and local WOFF2 fonts
- docs/: research, asset provenance and QA report
- SITE_STRATEGY.md, CREATIVE_DIRECTION.md, SELF_CRITIQUE.md: commercial/design decisions
- scripts/: local preview and QA tools

## Quote flow

The form collects name, email, optional phone, service and project description. It validates details, displays a review, and produces a percent-encoded mailto draft addressed to eartheffectstn@gmail.com. The visitor explicitly opens and sends the email in their own email application. Nothing is submitted or stored by this website. Copying is available for visitors without a configured email handler. Details stay in page memory until the page is closed/reloaded.

There is no lead database, delivery confirmation, analytics, tracking, artificial success notification, or backend. Browser/OS email handling is outside the site's control. Long mailto URLs may be limited by a particular email application; the copy option is the fallback. No real email or phone call was sent during QA.

## QA tools

QA requires Node.js and Playwright, an installed Chromium browser, and optionally sharp for regenerating photography. The tools use installed packages or the original Codex bundled packages. Set CHROME_PATH if needed. Install tooling locally if not available:

```sh
npm install --no-save playwright sharp
npx playwright install chromium
node scripts/qa.cjs
node scripts/accessibility.cjs
node scripts/qa.cjs https://gabi0102souza-stack.github.io/earth-effects-preview/ published
node scripts/check-text-zoom.cjs https://gabi0102souza-stack.github.io/earth-effects-preview/ published
```

The accessibility script expects qa-artifacts/axe.min.js (axe-core 4.10.3), obtainable from https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.3/axe.min.js . QA artifacts are ignored by Git. Recorded results are in docs/QA_REPORT.md.

## Publishing updates

Commit changes and push to main. GitHub Pages builds from root. Check the Pages build status and public URL before declaring an update complete. All public assets use relative paths to work under the project URL.

## Content and licensing

The photograph shows the Nolichucky River near Erwin. It is explicitly regional context, never a company project. Attribution and CC BY 3.0 link are visible in the photograph caption. Fonts are redistributed under the included SIL Open Font Licenses. See docs/ASSET_SOURCES.md.

Public business facts come from listings and should not be read as current owner confirmation. Reviews, ratings, service specifics, hours and owner-history claims were omitted. No LocalBusiness schema is published until present operations are confirmed. The preview has noindex, nofollow; this requests exclusion from search and is not access control.

