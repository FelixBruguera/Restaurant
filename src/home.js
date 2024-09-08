import Helpers from './helpers.js'
import image from './images/home-plate.png'
import "./home.css";

const doc = new Helpers()

function elements() {
    let title = doc.makeElement('h1', 'Odin Restaurant', 'title')
    let bodyText = doc.makeElement('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue diam sed posuere varius. Ut quis metus id felis pharetra interdum id sed tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'body-text')
    let img = doc.makeImg(image, 'A Christmas food platter', 'picture')
    let text = doc.wrapElements([title, bodyText], 'div', 'text-container')
    return [text, img]
}

function renderHome(container) {
    elements().forEach(elem => container.appendChild(elem))
}

export {renderHome}