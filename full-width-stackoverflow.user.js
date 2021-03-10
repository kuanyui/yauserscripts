// ==UserScript==
// @name        Full-Width Stackoverflow
// @description  try to take over the world!
// @author       You
// @version  0.1
// @grant    none
// @match	https://stackoverflow.com/questions/*
// @run-at    document-end
// @grant        none
// ==/UserScript==

const el = document.createElement('style')
el.innerText =`
body>.container { max-width: unset; }
#content { max-width: unset; }
`
document.body.appendChild(el)