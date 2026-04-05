const menuBar = document.querySelector('#menuBar');

const navBar = document.querySelector('#nav')
const menuClose = document.querySelector('#menuClose');
const previousBtn = document.querySelector('#previousBtn');
const nextBtn = document.querySelector('#nextBtn');

menuBar.addEventListener('click', () => {
    navBar.classList.remove('hidden')
})
menuClose.addEventListener('click', () => {
    navBar.classList.add('hidden')
})

previousBtn.addEventListener('click', () => {
    // Handle previous button click
})

nextBtn.addEventListener('click', () => {
    // Handle next button click
})