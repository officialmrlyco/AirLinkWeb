# AirLinkWeb

## LYCO TECHNOLOGIES product ownership (2026-09-12)

- AirLink is owned and designed by LYCO TECHNOLOGIES. Its public footer has an exact `Made and Designed by LYCO TECHNOLOGIES` link to `https://lycotechnologies.co.ke/`.
- Keep that company attribution understated and separate from merchant-facing product claims; AirLink remains the visible product identity.

## Purpose

`AirLinkWeb` is the public static product site for AirLink. GitHub Pages serves the `main` branch root, and the `CNAME` file binds the published site to `airlink.co.ke`.

## Product and design rules

- Keep the public site factual: AirLink is an Android airtime merchant tool that reads authorised M-PESA confirmations and queues carrier airtime execution on the merchant's phone.
- The visual language is black and white. Use the transparent black AirLink mark inverted with CSS on the black background; do not add a coloured logo background.
- Browser and search identity must use the title `AirLink - Airtime Selling Automation App`. Keep the SVG favicon high-contrast and self-contained because the transparent black in-app logo disappears against dark browser chrome.
- Supplied public product captures from `C:\AirLinkScreenshots` are stored as `assets/screenshots/dashboard.jpg`, `settings.jpg`, and `statistics.jpg`, labelled Dashboard, Settings, and Statistics in `index.html`. Do not use customer or payment data in future public images.
- `DOWNLOAD_URL` in `script.js` is the only release-link setting. Keep it on the selected tag-specific GitHub Release asset rather than the mutable `latest` redirect or a branch file. Never host signing keys, Firebase files, raw SMS, or merchant backups here.

## Delivery

- GitHub Pages configuration: branch `main`, folder `/ (root)`, custom domain `airlink.co.ke`. It serves HTTP immediately; enable HTTPS only after GitHub has provisioned the certificate.
- Cloudflare remains the DNS provider. On 2026-08-15 the zone received DNS-only A records for `@` at `185.199.108.153`, `.109.153`, `.110.153`, and `.111.153`, plus DNS-only `www` CNAME to `officialmrlyco.github.io`. Keep these GitHub Pages origin records DNS-only while certificate provisioning is in progress.
- This has no build step. Validate `index.html` locally and test desktop plus mobile layouts before publishing.
- Responsive layout rule: at laptop widths (801-1100px), keep the hero balanced and show all three product captures together. On phones, preserve the full 1080x2436 captures in an 82vw horizontal snap rail instead of cropping them or stacking an overly long page. Confirm that neither breakpoint introduces document-level horizontal overflow.

## Public release record (2026-08-17)

- The initial public APK release is `v1.0.2` / version code `2`, published on 17 August 2026 as the signed `AirLink.apk` GitHub Release asset. It is 85.2 MB and requires Android 7.0 (API 24) or later.
- The original website used the tag-specific `releases/download/v1.0.2/AirLink.apk` URL. Retain that fact as history, but keep the active website record and link aligned with the newer selected release below.

## Mutable v1.0.2 recovery release (2026-08-27)

- Keep the immutable initial `v1.0.2` release intact. The current recovery APK is visible version `1.0.2`, Android version code `3`, and is published separately under tag `v1.0.2-fix1` as `Airlink_v1.0.2.apk`.
- Repository-level immutable releases are disabled so `v1.0.2-fix1` can be updated. Preserve its exact tag and asset filename when replacing the APK; this keeps the tag-specific website URL stable without using the ambiguous `latest` redirect.
- The verified recovery APK is 89,325,193 bytes (85.2 MiB), requires Android 7.0 (API 24) or later, uses APK Signature Scheme v2, and has SHA-256 `DEC067EEB0D47FC0E5321BA3675FB2FC0E47317FCDE04B2361D76E5A17A96C20`.
- The public release record must show the 27 August 2026 recovery date, build 3, stale-execution recovery, merchant-action restoration, safe Accessibility expiry, and the retained product feature list.
