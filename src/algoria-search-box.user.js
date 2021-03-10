// ==UserScript==
// @name       Higher Algoria search box
// @version  0.1
// @grant    none
// @match	  https://*.vuejs.org/*
// @run-at    document-end
// @grant        none
// ==/UserScript==

const el = document.createElement('style')
el.innerText =`
.DocSearch-Dropdown {
  max-height: calc(100vh - 200px);
}
.DocSearch-Hit-Container {
  height: unset;
  padding: 2px 2px;
}
.DocSearch-Hit-source {
  line-height: unset;
}
.DocSearch-Hit-path {
  font-size: 0.5em;
  line-height: 0.5em;
}
.DocSearch-Hit-content-wrapper {
  line-height: 1em;
}
:root {
--docsearch-hit-height: 0;
--docsearch-searchbox-height: 30px;
}
`
document.body.appendChild(el)