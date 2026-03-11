function loadInsaber () {
  const handleDiv =
    document.getElementById('saberdiv') ||
    document.querySelector('.saber-anchor')
  if (!handleDiv || handleDiv.querySelector('#saberhandle')) {
    return
  }

  const imageBasePath = window.location.pathname.toLowerCase().includes('/src/')
    ? '../img/'
    : 'img/'
  const addHandle = document.createElement('img')
  if (document.body.classList.contains('darkmode')) {
    addHandle.src = `${imageBasePath}sithlightsaber.png`
  } else {
    addHandle.src = `${imageBasePath}saberhanld.png`
  }
  addHandle.id = 'saberhandle'
  addHandle.alt = 'lightsaberhandle'
  handleDiv.prepend(addHandle)
}

document.addEventListener('DOMContentLoaded', () => {
  loadInsaber()
  const lightsaber = document.getElementById('lightsaber')
  if (!lightsaber) {
    return
  }
  const sitesPath = window.location.pathname
    .toLocaleLowerCase()
    .includes('/src/forum.html')
  console.log(sitesPath)
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

    if (scrollAmount > 5 && document.body.classList.contains('darkmode')) {
      lightsaber.style.boxShadow = '-1px -6px 41px 14px #ff0000'
      lightsaber.background = '#CE5937'
      lightsaber.background =
        '-moz-linear-gradient(left, #CE5937 0%, #954028 50%, #CE5937 100%)'
      lightsaber.background =
        '-webkit-linear-gradient(left, #CE5937 0%, #954028 50%, #CE5937 100%)'
      lightsaber.background =
        'linear-gradient(to right, #CE5937 0%, #954028 50%, #CE5937 100%)'
    } else if (sitesPath === true) {
      lightsaber.style.boxShadow = '-1px -6px 41px 14px #2438ce'
      lightsaber.style.background = '#1d2c99'
      lightsaber.style.background =
        '-moz-linear-gradient(left, #1d2c99 0%, #2438ce 44%, #2438ce 100%)'
      lightsaber.style.background =
        '-webkit-linear-gradient(left, #1d2c99 0%, #2438ce 44%, #2438ce 100%)'
      lightsaber.style.background =
        'linear-gradient(to right, #1d2c99 0%, #2438ce 44%, #2438ce 100%)'
    } else if (scrollAmount > 5) {
      lightsaber.style.boxShadow = '-1px -6px 41px 14px #00FF28'
      lightsaber.style.background = '#24CE24'
      lightsaber.style.background =
        '-moz-linear-gradient(left, #24CE24 0%, #1FB11F 44%, #24CE24 100%)'
      lightsaber.style.background =
        '-webkit-linear-gradient(left, #24CE24 0%, #1FB11F 44%, #24CE24 100%)'
      lightsaber.style.background =
        'linear-gradient(to right, #24CE24 0%, #1FB11F 44%, #24CE24 100%)'
    } else {
      lightsaber.style.boxShadow = ''
    }
    const scrollVh = (scrollAmount / window.innerHeight) * 100

    lightsaber.style.height = `${baseHeight + scrollVh}vh`
  }

  window.addEventListener('scroll', updateLightsaberHeight)
})
