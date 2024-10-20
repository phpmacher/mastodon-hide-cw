// ==UserScript==
// @name         Mastodon Content Warning Hider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides Mastodon content warnings
// @author       @phpmacher@sueden.social
// @match        https://sueden.social/*
// @match        https://*.mastodon.social/*
// @match        https://*.social/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

/**
 * Hides Mastodon content warnings by adding a CSS rule to the document.
 */
(function () {
    // Create a new style element to hold the CSS rule
    const style = document.createElement('style');

    // Define the CSS rule to hide content warnings
    style.textContent = `
        /**
         * Hide content warnings in columns, detailed statuses, and statuses.
         */
        .column .scrollable div article:has(.content-warning),
        .detailed-status:has(.content-warning),
        .status:has(.content-warning) {
            display: none;
        }
    `;

    // Add the style element to the document head
    document.head.appendChild(style);
})();