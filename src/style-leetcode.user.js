// ==UserScript==
// @name        LeetCode style fix
// @version  0.1
// @grant    none
// @match	  https://leetcode.com/*
// @run-at    document-end
// @grant        none
// ==/UserScript==

const el = document.createElement('style')
el.innerText =`
.ant-popover-inner-content > div {
  width: 400px;
}
.CodeMirror .CodeMirror-scroll {
  line-height: 1rem;
}
`
document.body.appendChild(el)
