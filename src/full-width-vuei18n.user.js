// ==UserScript==
// @name        Full-Width in VueI18n
// @version  0.1
// @grant    none
// @match	  https://vue-i18n.intlify.dev/guide/*
// @run-at    document-end
// @grant        none
// ==/UserScript==

const el = document.createElement('style')
el.innerText =`
main.page > .container { max-width: unset; }
pre, code {
  line-height: 1rem !important;
}
`
document.body.appendChild(el)
