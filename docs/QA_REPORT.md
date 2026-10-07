# QA report

Date: October 7, 2026 (America/Sao_Paulo).

## Local result

After fixing enlarged-text mobile grid sizing, PASS on the correctly served preview at http://127.0.0.1:43821/ . Chrome/Chromium browser automation and visual review.

| Viewport | Result |
| --- | --- |
| 1440 x 1000 desktop | No horizontal overflow; image/fonts loaded; clear two-column hierarchy |
| 768 x 1024 tablet | No horizontal overflow; image/fonts loaded; controls and content contained |
| 390 x 844 mobile | No horizontal overflow; stacked layout and fixed call/quote actions |
| 320 x 740 small mobile | No horizontal overflow; name/phone stack and legible controls |
| 200% root text size at 1440, 768, 390 and 320px | No horizontal overflow or out-of-viewport elements |

Verified one H1, labeled form controls, working fragment targets, skip-link keyboard navigation, visible focus styling, reduced-motion scroll behavior, title/description, Open Graph text, favicon reference, valid WebPage JSON-LD and noindex/nofollow. Phone targets use tel:+14232207705. Email targets use the exact published inbox. One high-priority responsive WebP photograph and two local WOFF2 families load successfully.

Form QA verified empty/invalid/whitespace validation; service preselection; percent-encoded name, ampersands and multiline description; review focus; preservation on edit; safe textContent rendering of HTML-like input; clipboard response; zero HTTP submissions; and direct email/phone fallback with JavaScript disabled. No email was sent and no call was placed. Actual operating-system mail handlers cannot be confirmed by headless browser automation.

JavaScript syntax passed node --check. No page runtime errors or failed final assets. A canceled larger image request during responsive selection is recorded separately from failures; the final selected image was loaded at every width.

## Accessibility

axe-core 4.10.3 tested WCAG 2 A/AA and 2.1 A/AA rules: zero violations, 27 passed rule groups. One incomplete group was color contrast, requiring manual review for photographic overlays and an off-viewport textarea. White overlay text remains readable against dark panels; worst-case white-photo compositing produces backgrounds approximately #323c33 for the 88% dark panel and #383838 for the 78% black caption, both above 10:1 contrast with white. Textarea colors are explicit and the complete form was inspected visually. This is a bounded automated/manual QA pass, not a claim of complete accessibility conformance.

## Published result

PASS at https://gabi0102souza-stack.github.io/earth-effects-preview/ . GitHub Pages API confirmed built, HTTPS enabled, source main at root, with no build error. Functional source tested at commit 8591c5f68069e3aa2e22efd0833a8a272899ac70. Published browser QA recorded October 7, 2026 at approximately 18:41 America/Sao_Paulo (21:41 UTC).

All four requested viewports passed the same responsive, font, image, metadata, keyboard, service-preselection, validation, review/edit/copy and mailto checks. Public image URLs resolve under the repository project path. Zero page errors, zero failed requests and zero responsive-image cancellations in the published run. The 200% text-size checks passed at all four widths after correcting grid sizing and the tablet photo panel. Public axe-core results: zero violations, 27 passed groups, one manually reviewed incomplete contrast group.

Visual review covered desktop page hierarchy and the mobile form/contact layout. The published site was opened through the app browser handoff and tested directly in Chrome. The app handoff returned queued, so browser test results rather than tab visibility establish successful opening/loading. No real email was transmitted and no call was placed.

The final documentation-only commit does not change tested HTML, CSS, JavaScript, fonts or images. The latest Pages build is checked again after that commit. Browser/OS mail handler launching and real mobile hardware remain outside the scope of these emulated viewport tests.

## Evidence

Local screenshots and machine-readable browser/accessibility reports are in ignored qa-artifacts/. The public repo carries this concise report rather than test inputs or environment artifacts. scripts/qa.cjs and scripts/accessibility.cjs reproduce the key checks with appropriate local dependencies.


