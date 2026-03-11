const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
const imgStarfighter = document.querySelector('#imgStarfighter')

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  imgStarfighter.classList.toggle('active')
})
