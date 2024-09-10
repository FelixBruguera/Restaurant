import Helpers from './helpers.js'
import {Burger, Salad, Wings, Arepas, Pizza, Pasta} from './images/menuImages.js'
import "./menu.css";
import { cart } from './index.js'

const doc = new Helpers()
let itemId = 1

class Item {
    constructor(image, name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.image = image
        this.id = itemId
        itemId++
    }
    render(item = this) {
        const card = doc.makeCard(this.image, this.name, this.name, this.description, this.price)
        card.querySelector('button').dataset.id = this.id
        if (cart.find(item.id).length > 0) {
            let button = card.querySelector('button')
            button.textContent = '-'
            button.className = 'remove-button'
        }
        card.addEventListener('click', function(e) {
            if (e.target.textContent == '+') {
                cart.add(item)
                e.target.textContent = '-'
                e.target.className = 'remove-button'
            }
            else if (e.target.textContent == '-') {
                cart.remove(item)
                e.target.textContent = '+'
                e.target.className = 'add-button'
            }
        })
        return card
    }
    toggleButton(button) {
        button.textContent = button.textContent == '+' ? '🛒' : '+'
    }
}

function elements() {
    let burger = new Item(Burger, 'Burger', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum pharetra.', 3)
    let salad = new Item(Salad, 'Salad', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum pharetra.', 1)
    let pasta = new Item(Pasta, 'Pasta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum pharetra.', 2.5)
    let wings = new Item(Wings, 'Wings', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum pharetra.', 3)
    let arepas = new Item(Arepas, 'Arepas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum pharetra.', 2)
    let pizza = new Item(Pizza, 'Pizza', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum pharetra.', 5)
    return [burger.render(), salad.render(), pasta.render(), wings.render(), arepas.render(), pizza.render()]
}

function renderMenu(container) {
    itemId = 1
    elements().forEach(elem => container.appendChild(elem))
}

export { renderMenu }