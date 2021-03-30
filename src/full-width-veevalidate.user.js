// ==UserScript==
// @name       Full-Width VeeValidate Doc
// @version  0.1
// @grant    none
// @match	  https://vee-validate.logaretm.com/*
// @run-at    document-end
// @grant        none
// ==/UserScript==

const el = document.createElement('style')
el.innerText =`
.App {
  grid-template-columns: 1fr 4fr 1fr !important;
  max-width: unset !important;
}
`
document.body.appendChild(el)
