// ==UserScript==
// @name        Full-width page, and smaller code line-height in Github
// @version  0.1
// @grant    none
// @match	  https://github.com/*
// @match	  https://www.github.com/*
// @run-at    document-end
// @grant        none
// ==/UserScript==

const el = document.createElement('style')
el.innerText =`
/*.container-xl { max-width: unset; }*/
.blob-code, .blob-num {
    line-height: 1;
    font-family: 'DejaVu Sans Mono';
}
`
document.body.appendChild(el)
