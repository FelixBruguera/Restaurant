import { renderHome } from "./home";
import { renderMenu } from "./menu"
import { renderContact } from "./contact"
import './general.css'

let currentPage = 'home'
const nav = document.querySelector('nav')
let navButtons = nav.querySelectorAll('button')
navButtons.forEach(button => button.addEventListener('click', (e) => changePage(e)))


function changePage(event) {
    let page = event.target.name
    if (page == currentPage) {return 'no change'}
    clearPage()
    switch(page) {
        case 'home':
            currentPage = 'home'
            content.className = 'home'
            renderHome(content)
            break
        case 'menu':
            currentPage = 'menu'
            content.className = 'menu'
            renderMenu(content)
            break
        case 'contact':
            currentPage = 'contact'
            content.className = 'contact'
            renderContact(content)
            break
    }
}

function clearPage() {
    content.textContent = ''
}
const content = document.querySelector('#content')
renderHome(content)

