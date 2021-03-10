// ==UserScript==
// @name        Full-Width CSS-Trick
// @version  0.1
// @grant    none
// @match	  https://css-tricks.com/*
// @run-at    document-end
// @grant        none
// ==/UserScript==

const el = document.createElement('style')
el.innerText =`
html { --maxWidth: unset; }
p { max-width: unset !important; }
`
document.body.appendChild(el)