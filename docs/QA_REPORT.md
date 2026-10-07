# QA report

Date: October 7, 2026 (America/Sao_Paulo).

## Local result

PASS on the correctly served preview at http://127.0.0.1:43821/ . Chrome/Chromium browser automation and visual review.

| Viewport | Result |
| --- | --- |
| 1440 x 1000 desktop | No horizontal overflow; image/fonts loaded; clear two-column hierarchy |
| 768 x 1024 tablet | No horizontal overflow; image/fonts loaded; controls and content contained |
| 390 x 844 mobile | No horizontal overflow; stacked layout and fixed call/quote actions |
| 320 x 740 small mobile | No horizontal overflow; name/phone stack and legible controls |
| 200% root text size at 1440px | No horizontal overflow |

Verified one H1, labeled form controls, working fragment targets, skip-link keyboard navigation, visible focus styling, reduced-motion scroll behavior, title/description, Open Graph text, favicon reference, valid WebPage JSON-LD and noindex/nofollow. Phone targets use tel:+14232207705. Email targets use the exact published inbox. One high-priority responsive WebP photograph and two local WOFF2 families load successfully.

Form QA verified empty/invalid/whitespace validation; service preselection; percent-encoded name, ampersands and multiline description; review focus; preservation on edit; safe textContent rendering of HTML-like input; clipboard response; zero HTTP submissions; and direct email/phone fallback with JavaScript disabled. No email was sent and no call was placed. Actual operating-system mail handlers cannot be confirmed by headless browser automation.

JavaScript syntax passed node --check. No page runtime errors or failed final assets. A canceled larger image request during responsive selection is recorded separately from failures; the final selected image was loaded at every width.

## Accessibility

axe-core 4.10.3 tested WCAG 2 A/AA and 2.1 A/AA rules: zero violations, 27 passed rule groups. One incomplete group was color contrast, requiring manual review for photographic overlays and an off-viewport textarea. White overlay text remains readable against dark panels; worst-case white-photo compositing produces backgrounds approximately #323c33 for the 88% dark panel and #383838 for the 78% black caption, both above 10:1 contrast with white. Textarea colors are explicit and the complete form was inspected visually. This is a bounded automated/manual QA pass, not a claim of complete accessibility conformance.

## Published result

Pending public build and repeat browser QA. This section is updated only after deployment is confirmed.

## Evidence

Local screenshots and machine-readable browser/accessibility reports are in ignored qa-artifacts/. The public repo carries this concise report rather than test inputs or environment artifacts. scripts/qa.cjs and scripts/accessibility.cjs reproduce the key checks with appropriate local dependencies.
