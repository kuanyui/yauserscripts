// ==UserScript==
// @name     Bumble Helper
// @version  0.1
// @grant    none
// @match	  https://bumble.com/app
// @run-at    document-end
// @grant        none
// ==/UserScript==

function highlightKeywords() {
    document.querySelectorAll('.pill__title').forEach((el) => {
        const text = el.innerText.trim()
        const blackList = ['いつか欲しい', '政治に無関心', 'すでにい']
        for (const blackKey of blackList) {
            if (text.includes(blackKey)) {
                el.parentElement.style.border = '2px solid #ff0000'
                el.style.color = '#ffffff'
                el.style.backgroundColor = '#ff0000'
                console.log(el)
            }
        }
        const whiteList = ['クラシック']
        for (const blackKey of whiteList) {
            if (text.includes(blackKey)) {
                el.parentElement.style.border = '2px solid #558800'
                el.style.color = '#ffffff'
                el.style.backgroundColor = '#558800'
                console.log(el)
            }
        }
    })
}

let debounceTimeoutId = -1

function nodeWatcherFn(mutationList, observer) {
    window.clearTimeout(debounceTimeoutId)
    debounceTimeoutId = window.setTimeout(highlightKeywords, 200);
}

mutObserver = new MutationObserver(nodeWatcherFn)
mutObserver.observe(document, {
    childList: true,
    subtree: true,
    characterData: true,
});