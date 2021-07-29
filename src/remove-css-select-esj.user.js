// ==UserScript==
// @name         ESJ remove selection limit
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.esjzone.cc/forum/*
// @icon         https://www.google.com/s2/favicons?domain=esjzone.cc
// @grant        none
// ==/UserScript==

function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

var articleEl = document.body.querySelector("[style^='user-select']")
if (articleEl) {
    articleEl.setAttribute('style', undefined)
    selectElementContents(articleEl)
}
