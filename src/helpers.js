export default class Helpers {
    makeElement(elemType, elemContent, elemClass) {
        let elem = document.createElement(elemType)
        elem.textContent = elemContent
        elem.className = elemClass
        return elem
    }
    makeImg(src, alt, elemClass) {
        let elem = document.createElement('img')
        elem.src = src
        elem.alt = alt
        elem.className = elemClass
        return elem
    }
    wrapElements(elements = [], containerType, containerClass) {
        let container = this.makeElement(containerType, '', containerClass)
        elements.forEach(elem => container.appendChild(elem))
        return container
    }
    makeCard(img, imgAlt, title, description, price) {
        img = this.makeImg(img, imgAlt, 'card-img')
        title = this.makeElement('h3', title, 'card-title')
        price = this.makeElement('p', price, 'card-price')
        description = this.makeElement('p', description, 'card-description')
        let text = this.wrapElements([title, description, price], 'div', 'card-text')
        let card = this.wrapElements([img, text], 'div', 'card')
        return card
    }
    makeInput(inputName, inputPlaceholder, inputType) {
        let input = this.makeElement('input', '', 'form-input')
        input.name = inputName
        input.type = inputType
        input.required = true
        input.placeholder = inputPlaceholder
        return input
    }
    makeTextarea(inputPlaceholder) {
        let textarea = this.makeElement('textarea', '', 'form-textarea')
        textarea.placeholder = inputPlaceholder
        textarea.required = true
        return textarea
    }
    appendInputs(form, inputs) {
        inputs.forEach(input => form.appendChild(input))
    }
    makeSubmit(form, content) {
        let button = document.createElement('button')
        button.type = 'submit'
        button.textContent = content
        button.className = 'form-submit'
        form.appendChild(button)
    }
}