// ==UserScript==
// @name        Full-Width in MDN
// @version  0.3
// @grant    none
// @match	  https://developer.mozilla.org/*
// @run-at    document-end
// @grant        none
// ==/UserScript==

const el = document.createElement('style')
el.innerText =`
.document-page .page-content-container { max-width: unset; }
.article dl, .article ol, .article p, .article ul { max-width: unset; }
`
document.body.appendChild(el)