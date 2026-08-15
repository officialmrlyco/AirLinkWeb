// Update only this URL after publishing a GitHub Release with AirLink.apk.
const DOWNLOAD_URL = 'https://github.com/officialmrlyco/AirLinkWeb/releases/latest/download/AirLink.apk';

// One source of truth keeps every download call-to-action on the same release.
document.querySelectorAll('[data-download-link]').forEach((link) => {
  link.href = DOWNLOAD_URL;
});

// The footer remains current without adding a server dependency to this static site.
document.querySelector('#year').textContent = new Date().getFullYear();
