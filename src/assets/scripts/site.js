//mobile
const menuBurger = document.querySelector('.burger')
const selected = document.querySelector('.minus')
const navLinks = document.querySelector ('.menu')

menuBurger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})

selected.addEventListener('click', () => {
    menuBurger.classList.toggle('transform')
})