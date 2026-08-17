# AirLinkWeb

## Purpose

`AirLinkWeb` is the public static product site for AirLink. GitHub Pages serves the `main` branch root, and the `CNAME` file binds the published site to `airlink.co.ke`.

## Product and design rules

- Keep the public site factual: AirLink is an Android airtime merchant tool that reads authorised M-PESA confirmations and queues carrier airtime execution on the merchant's phone.
- The visual language is black and white. Use the transparent black AirLink mark inverted with CSS on the black background; do not add a coloured logo background.
- Browser and search identity must use the title `AirLink - Airtime Selling Automation App`. Keep the SVG favicon high-contrast and self-contained because the transparent black in-app logo disappears against dark browser chrome.
- Supplied public product captures from `C:\AirLinkScreenshots` are stored as `assets/screenshots/dashboard.jpg`, `settings.jpg`, and `statistics.jpg`, labelled Dashboard, Settings, and Statistics in `index.html`. Do not use customer or payment data in future public images.
- `DOWNLOAD_URL` in `script.js` is the only release-link setting. Upload an APK asset named `AirLink.apk` to the latest public `AirLinkWeb` GitHub Release, or replace the URL with the desired release URL. Never host signing keys, Firebase files, raw SMS, or merchant backups here.

## Delivery

- GitHub Pages configuration: branch `main`, folder `/ (root)`, custom domain `airlink.co.ke`. It serves HTTP immediately; enable HTTPS only after GitHub has provisioned the certificate.
- Cloudflare remains the DNS provider. On 2026-08-15 the zone received DNS-only A records for `@` at `185.199.108.153`, `.109.153`, `.110.153`, and `.111.153`, plus DNS-only `www` CNAME to `officialmrlyco.github.io`. Keep these GitHub Pages origin records DNS-only while certificate provisioning is in progress.
- This has no build step. Validate `index.html` locally and test desktop plus mobile layouts before publishing.
- Responsive layout rule: at laptop widths (801-1100px), keep the hero balanced and show all three product captures together. On phones, preserve the full 1080x2436 captures in an 82vw horizontal snap rail instead of cropping them or stacking an overly long page. Confirm that neither breakpoint introduces document-level horizontal overflow.

## Public release record (2026-08-17)

- The initial public APK release is `v1.0.2` / version code `2`, published on 17 August 2026 as the signed `AirLink.apk` GitHub Release asset. It is 85.2 MB and requires Android 7.0 (API 24) or later.
- `script.js` must use the tag-specific `releases/download/v1.0.2/AirLink.apk` URL, never the mutable `releases/latest` redirect or a branch-hosted APK. Keep the release record in `index.html` aligned with the published version, date, minimum Android version, size, and user-facing What's included list.
