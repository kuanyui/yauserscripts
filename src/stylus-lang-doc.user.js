// ==UserScript==
// @name        Readable Doc of Stylus-Lang
// @version  0.1
// @grant    none
// @match	  https://stylus-lang.com/docs/*
// @run-at    document-end
// @grant        none
// ==/UserScript==

const el = document.createElement('style')
el.innerText =`
.sidebar nav > a { padding: 0 !important; }
.sidebar nav > strong { padding: 0 !important; }
.sidebar nav {
  font-family: sans-serif !important;
  text-transform: unset !important;
}
.sidebar {
  text-align: left !important;
}
.toc a {
  display: block;
}
`
document.body.appendChild(el)


const tocEl = document.createElement('div')
tocEl.className = 'toc'
document.querySelectorAll('.permalink').forEach(sharpIcon => {
    const subtitle = sharpIcon.parentNode
    const tocLink=document.createElement('a')
    tocLink.className = 'tocLink'
    tocLink.innerText = subtitle.innerText
    tocLink.href = '#' + subtitle.id
    tocEl.appendChild(tocLink)
})
const h1 = document.querySelector('h1')
insertAfter(h1, tocEl)
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
