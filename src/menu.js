import Helpers from './helpers.js'
import {Burger, Salad, Wings, Arepas, Pizza, Pasta} from './images/menuImages.js'
import "./menu.css";

const doc = new Helpers()

function elements() {
    let burger = doc.makeCard(Burger, 'Cheeseburger', 'Cheesebuger', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum pharetra.', '3$')
    let salad = doc.makeCard(Salad, 'Salad', 'Salad',  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum pharetra.', '1$')
    let wings = doc.makeCard(Wings, 'Wings', 'Wings',  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum pharetra.', '3$')
    let arepas = doc.makeCard(Arepas, 'Arepas', 'Arepas',  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum pharetra.', '2$')
    let pizza = doc.makeCard(Pizza, 'Pizza', 'Pizza',  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum pharetra.', '5$')
    let pasta = doc.makeCard(Pasta, 'Pasta', 'Pasta',  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum pharetra.', '2.5$')
    return [burger, salad, pasta, wings, arepas, pizza]
}

function renderMenu(container) {
    elements().forEach(elem => container.appendChild(elem))
}

export {renderMenu}