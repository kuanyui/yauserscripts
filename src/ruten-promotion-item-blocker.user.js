// ==UserScript==
// @name     Remove promoted items from search results in Ruten Taiwan.
// @version  0.2
// @grant    none
// @match    https://*.ruten.com.tw/*
// @run-at   document-end
// @grant    none
// ==/UserScript==

const el = document.createElement('style')
el.innerText =`
.product-item.isPromoted, .rt-product-card.isPromoted {
    display: none;
}
`
document.body.appendChild(el)


const mutObs = new MutationObserver((mutations) => {
    desktopPromotionItemRemover()
    mobilePromotionItemRemover()
})

mutObs.observe(document, { childList: true, subtree: true })

function desktopPromotionItemRemover() {
    const items = document.querySelectorAll(".product-item:not(.isPromoted)")
    for (const item of items) {
        if (item.querySelector(".rt-product-card-ad-tag")) {
            item.classList.add('isPromoted')
        }
    }
}

function mobilePromotionItemRemover() {
    const items = document.querySelectorAll(".rt-product-card:not(.isPromoted)")
    for (const item of items) {
        if (item.querySelector(".rt-product-card-ad-tag")) {
            item.classList.add('isPromoted')
        }
    }
}
