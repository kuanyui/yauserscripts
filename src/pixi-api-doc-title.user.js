// ==UserScript==
// @name     Pixi API Reference Document Title
// @version  1
// @grant    none
// @match    http://pixijs.download/release/docs/*
// @match    https://pixijs.download/release/docs/*
// @run-at    document-end
// ==/UserScript==

//"http://pixijs.download/release/docs/PIXI.BaseTexture.html#.from"
let title = document.querySelector('.header h2').innerText
window.document.title = title