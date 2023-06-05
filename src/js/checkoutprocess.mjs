import { getLocalStorage } from "./utils.mjs";

const checkoutprocess = {
    localStorage: "",
    selector: "",
    list [],
    itemTotal: 0,
    shipping: 0,
    tax: 0,
    orderTotal: 0,
    init: function(localStorage, selector) {
        this.localStorage = localStorage;
        this.selector = selector;
        this.list = getLocalStorage(localStorage);
        this.caculateItemSummary();
    },
    caculateItemSummary: function() {

    },
    calculateOrderTotal: function() {
        this.displayOrderTotals();
    },
    displayOrderTotals: function() {

    },
}

export default checkoutprocess;

