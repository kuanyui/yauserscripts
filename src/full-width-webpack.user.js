// ==UserScript==
// @name        Full-Width in Webpack
// @version  0.1
// @grant    none
// @match	  https://webpack.js.org/*
// @match	  https://*.webpack.js.org/*
// @run-at    document-end
// @grant        none
// ==/UserScript==

const el = document.createElement('style')
el.innerText =`
.container { max-width: unset; }
.site > .container { max-width: unset; }
`
document.body.appendChild(el)
