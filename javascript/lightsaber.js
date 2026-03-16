/**
 * Lightsaber animation and theming system
 * Displays an animated lightsaber in the bottom-right corner that grows on scroll
 * and changes color based on the active theme (Sith/Jedi)
 */

// Load lightsaber handle image based on theme
function loadSaberHandle() {
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
  addHandle.id = 'saberhandle'
  addHandle.alt = 'Lightsaber handle'
  
  // Change handle based on theme
  const isJedi = document.body.classList.contains('jedi')
  addHandle.src = isJedi 
    ? `${imageBasePath}saberhanld.png` 
    : `${imageBasePath}sithlightsaber.png`
  
  handleDiv.prepend(addHandle)
}

// Get CSS variable values
function getCSSVariable(varName) {
  const bodyValue = getComputedStyle(document.body)
    .getPropertyValue(varName)
    .trim()

  if (bodyValue) {
    return bodyValue
  }

  return getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim()
}

// Update lightsaber colors based on theme and scroll position
function updateSaberColors() {
  const lightsaber = document.getElementById('lightsaber')
  if (!lightsaber) return

  const scrollAmount = window.scrollY
  const maxSaberVh = window.innerHeight * 0.8

  // Reset if scrolled too far
  if (scrollAmount > maxSaberVh) {
    lightsaber.style.boxShadow = ''
    lightsaber.style.background = ''
    return
  }

  // Only show colors when scrolling
  if (scrollAmount > 5) {
    const glowColor = getCSSVariable('--saber-glow')
    const gradientStart = getCSSVariable('--saber-gradient-start')
    const gradientMid = getCSSVariable('--saber-gradient-mid')
    const gradientEnd = getCSSVariable('--saber-gradient-end')

    // Apply glow effect
    lightsaber.style.boxShadow = `-1px -6px 41px 14px ${glowColor}`

    // Apply gradient background
    lightsaber.style.background = 
      `linear-gradient(to right, ${gradientStart} 0%, ${gradientMid} 50%, ${gradientEnd} 100%)`
  } else {
    lightsaber.style.boxShadow = ''
    lightsaber.style.background = ''
  }
}

// Initialize lightsaber when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const vw = window.innerWidth

  // Only show lightsaber on desktop (> 830px width)
  if (vw <= 830) {
    return
  }

  loadSaberHandle()

  const lightsaber = document.getElementById('lightsaber')
  if (!lightsaber) {
    return
  }

  // Audio setup
  const audioBasePath = window.location.pathname.toLowerCase().includes('/src/')
    ? '../audio/'
    : 'audio/'

  const scrollStartSound = new Audio(`${audioBasePath}lightsaber.mp3`)
  scrollStartSound.preload = 'auto'
  
  const enterSound = new Audio(`${audioBasePath}lightsaber1.mp3`)
  enterSound.preload = 'auto'

  let isScrolling = false
  let scrollStopTimer

  // Play sound on hover
  lightsaber.addEventListener('mouseenter', () => {
    enterSound.play().catch(() => {})
  })

  // Update lightsaber height on scroll
  function updateLightsaberHeight() {
    const maxSaberVh = window.innerHeight * 0.8
    const scrollAmount = window.scrollY

    if (scrollAmount > maxSaberVh) {
      return
    }

    // Play sound when starting to scroll
    if (!isScrolling) {
      scrollStartSound.currentTime = 0
      scrollStartSound.play().catch(() => {})
      isScrolling = true
    }

    // Debounce scroll sound
    clearTimeout(scrollStopTimer)
    scrollStopTimer = setTimeout(() => {
      isScrolling = false
    }, 150)

    // Update colors based on scroll
    updateSaberColors()

    // Calculate and set height
    const scrollVh = (scrollAmount / window.innerHeight) * 100
    lightsaber.style.height = `${scrollVh}vh`
  }

  // Scroll event listener
  window.addEventListener('scroll', updateLightsaberHeight)
})

// Update theme colors when theme changes (listen for theme-toggle)
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle')
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      // Update handle image after theme change
      const handleDiv = document.getElementById('saberdiv') || 
                       document.querySelector('.saber-anchor')
      const handle = handleDiv?.querySelector('#saberhandle')
      
      if (handle) {
        const isJedi = document.body.classList.contains('jedi')
        const imageBasePath = window.location.pathname.toLowerCase().includes('/src/')
          ? '../img/'
          : 'img/'
        
        // Handle changes theme when clicked, so we check inverted state
        handle.src = isJedi 
          ? `${imageBasePath}sithlightsaber.png`
          : `${imageBasePath}saberhanld.png`
      }
      
      // Update colors
      setTimeout(() => updateSaberColors(), 10)
    })
  }
})