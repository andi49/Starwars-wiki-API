const menuBtn = document.querySelector('.menu-toggle')
const nav = document.querySelector('.site-nav')
const imgStarfighter = document.querySelector('.imgStarfighter')
const audioBasePath = window.location.pathname.toLowerCase().includes('/src/')
  ? '../audio/'
  : 'audio/'

const clicksound = new Audio(`${audioBasePath}tiefightershot.mp3`)
clicksound.preload = 'auto'

function updateHamburgerIcon () {
  const isJedi = document.body.classList.contains('jedi')
  const basePath = window.location.pathname.toLowerCase().includes('/src/')
    ? '../img/'
    : 'img/'
  imgStarfighter.src = isJedi
    ? `${basePath}starfighter.png`
    : `${basePath}tiefightericon.png`
}

// Set initial icon on page load
updateHamburgerIcon()

// Update icon when theme changes (observe body for class changes)
const observer = new MutationObserver(updateHamburgerIcon)
observer.observe(document.body, {
  attributes: true,
  attributeFilter: ['class']
})

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active')
  imgStarfighter.classList.toggle('active')
  clicksound.play().catch(() => {})
})
