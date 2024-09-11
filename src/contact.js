import Helpers from './helpers.js'
import Call from './images/call.png'
import Mail from './images/mail.png'
import Pin from './images/pin.png'
import "./contact.css";


const doc = new Helpers()

function renderForm() {
    let form = document.createElement('form')
    let messageTitle = doc.makeElement('h2', 'Send us a message', 'empty-cart-main', true)
    let nameInput = doc.makeInput('name', 'Name','text')
    let emailInput = doc.makeInput('email', 'Email','email')
    let messageInput = doc.makeTextarea('Your message')
    let formInfo = doc.wrapElements([nameInput, emailInput], 'div', 'form-info')
    doc.appendInputs(form, [messageTitle, formInfo, messageInput])
    doc.makeSubmit(form, 'Send')
    form.addEventListener('submit', (e) => handleForm(e))
    return form
}

function handleForm(event) {
    event.preventDefault()
    const form = new FormData(document.querySelector('form'))
    const page = document.querySelector('.contact')
    page.textContent = ''
    let mainMessage = doc.makeElement('h1', `Thanks for your message, ${form.get('name')}`, 'fade-in', true)
    page.appendChild(mainMessage)
}

function elements() {
    let mainText = doc.makeElement('h1', 'We would love to hear from you', 'empty-cart-main', true)
    let phone = doc.makeImg(Call, 'Phone', 'contact-icon', true)
    let phoneNumber = doc.makeElement('p', '123-456-789', 'contact-info', true)
    let contactNumber = doc.wrapElements([phone, phoneNumber], 'div', 'contact-container')
    let mail = doc.makeImg(Mail, 'Email', 'contact-icon', true)
    let email = doc.makeElement('p', 'contact@odinrestaurant.com', 'contact-info', true)
    let contactEmail = doc.wrapElements([mail, email], 'div', 'contact-container')
    let pin = doc.makeImg(Pin, 'Address', 'contact-icon', true)
    let address = doc.makeElement('p', '123 Street, Asgard', 'contact-info', true)
    let contactAddress = doc.wrapElements([pin, address], 'div', 'contact-container')
    let contactCards = doc.wrapElements([contactNumber, contactEmail, contactAddress], 'div', 'contact-cards')
    const form = renderForm()
    return [mainText, contactCards, form]
}

function renderContact(container) {
    elements().forEach(elem => container.appendChild(elem))
}

export {renderContact}