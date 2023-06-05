import { getLocalStorage } from "./utils.mjs";

const checkoutprocess = {
    localStorage: "",
    selector: "",
    list: [],
    numberItems: 0,
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
        this.numberItems = this.list.length;
        const totalAmmount = this.list.forEach(item => {
            item.FinalPrice;
        });
        this.itemTotal = totalAmmount;
    },
    calculateOrderTotal: function() {
        if (this.numberItems == 0) {
            shippingValue = 0;
        } else if (this.numberItems > 0) {
            shippingExtra = this.numberItems - 1;
            shippingValue = 10 + (2 * shippingExtra);
        }
        this.shipping = shippingValue;
        this.tax = this.itemTotal * 0.06;
        this.displayOrderTotals();
    },
    displayOrderTotals: function() {
        const items = document.querySelector(this.selector + " #shipping");
    },
}

export default checkoutprocess;

