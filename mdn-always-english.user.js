// ==UserScript==
// @name     Always English in Mozilla Doc
// @version  1
// @grant    none
// @match	https://developer.mozilla.org/*
// @run-at    document-start
// ==/UserScript==

const matched = location.pathname.match(/[/](.*)[/]docs[/]/)
if (matched &&
    document.referrer &&
    !document.referrer.startsWith('https://developer.mozilla.org/')) {
  const pathname = location.pathname.replace(new RegExp(`^/${matched[1]}/`, 'gi'), '/en/')
  location.replace(pathname)
}