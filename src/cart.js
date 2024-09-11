import Helpers from './helpers.js'
import Check from './images/check.png'
import { cart } from './index.js'
import "./cart.css";

const doc = new Helpers()

class Cart {
    constructor() {
        this.items = []
    }
    find(itemId) {
        return this.items.filter((i) => i.id == itemId)
    }
    add(item) {
        let id = this.find(item.id)
        if (id.length == 0) { this.items.push(item)}
        else {return 'Item is already added'}
    }
    remove(item) {
        let id = this.find(item.id)
        if (id.length > 0) {
            let index = this.items.indexOf(id[0])
            this.items.splice(index, 1)}
    }
    getItems() {
        return this.items
    }
    empty() {
        this.items = []
    }
}

function elements(cart) {
    let items = cart.getItems()
    let container = doc.makeElement('div', '', 'item-container')
    let totalPrice = 0
    items.forEach(item => {
        let card = doc.makeCartItem(item.image, item.name, item.name, '$'+item.price, item.id)
        totalPrice += item.price
        card.addEventListener('click', (e) => removeItem(e, item))
        container.appendChild(card)
    });
    let total = doc.makeElement('h2', 'Total: $'+totalPrice, 'cart-price', true)
    let checkout = doc.makeElement('button', 'Complete order', 'cart-checkout')
    checkout.addEventListener('click', renderCheckout)
    let cartLower = doc.wrapElements([total, checkout], 'div', 'cart-lower')
    let cartTitle = doc.makeElement('h1', 'Your order', 'cart-title')
    let cartElems = doc.wrapElements([container, cartLower], 'div', 'cart-elems')
    return [cartTitle, cartElems]
}

function renderEmptyCart() {
    let mainText = doc.makeElement('h1', 'Your cart is empty', 'empty-cart-main', true)
    let subText = doc.makeElement('p', 'Add some items from the menu', 'empty-cart-subtext', true)
    return doc.wrapElements([mainText, subText], 'div', 'empty-cart')
}

function updatePrice() {
    let newPrice = cart.getItems().reduce((accumulator, item) => accumulator + item.price, 0)
    document.querySelector('.cart-price').textContent = 'Total: $'+newPrice
}

function removeItem(event, item) {
    if (event.target.textContent == '-') {
        cart.remove(item)
        event.target.parentElement.style.display = 'none'
        updatePrice()
    }
}

function renderCheckout() {
    const page = document.querySelector('.cart')
    page.textContent = ''
    cart.empty()
    let message = doc.makeElement('h1', 'Order completed', 'fade-in', true)
    let check = doc.makeImg(Check, 'A green check', 'checkout-img', true)
    let content = doc.wrapElements([message, check], 'div', 'checkout')
    page.appendChild(content)
}

function renderCart(container) {
    if (cart.getItems().length > 0) { elements(cart).forEach(elem => container.appendChild(elem)) }
    else { container.appendChild(renderEmptyCart()) }
}

export { Cart, renderCart }