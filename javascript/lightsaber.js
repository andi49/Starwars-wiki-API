document.addEventListener('DOMContentLoaded', () => {
  const lightsaber = document.getElementById('lightsaber')
  if (!lightsaber) {
    return
  }

  const baseHeight = 0
  const audioBasePath = window.location.pathname.toLowerCase().includes('/src/')
    ? '../audio/'
    : 'audio/'

  const scrollStartSound = new Audio(`${audioBasePath}lightsaber.mp3`)
  scrollStartSound.preload = 'auto'
  const entersound = new Audio(`${audioBasePath}lightsaber1.mp3`)
  entersound.preload = 'auto'

  let isScrolling = false
  let scrollStopTimer
  lightsaber.addEventListener('mouseenter', () => {
    entersound.play().catch(() => {})
  })

  function updateLightsaberHeight () {
    const maxsabervh = window.innerHeight * 0.8

    const scrollAmount = window.scrollY
    if (scrollAmount > maxsabervh) {
      return
    }

    if (!isScrolling) {
      scrollStartSound.currentTime = 0
      scrollStartSound.play().catch(() => {})
      isScrolling = true
    }

    clearTimeout(scrollStopTimer)
    scrollStopTimer = setTimeout(() => {
      isScrolling = false
    }, 150)

    if (scrollAmount > 5) {
      lightsaber.style.boxShadow = '-1px -6px 41px 14px #ff0000'
      // lightsaber.style.boxShadow = '-1px -6px 41px 14px #00FF28'
    } else {
      lightsaber.style.boxShadow = ''
    }
    const scrollVh = (scrollAmount / window.innerHeight) * 100

    lightsaber.style.height = `${baseHeight + scrollVh}vh`
  }

  window.addEventListener('scroll', updateLightsaberHeight)
})
