/**
 * Jedi/Sith Theme Toggle System
 * Manages switching between Jedi and Sith modes
 * Persists user preference in localStorage
 */

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('themeToggle')

  if (!toggleBtn) {
    return
  }

  function updateToggleLabel (theme) {
    toggleBtn.textContent = theme === 'jedi' ? 'JEDI' : 'SITH'
  }

  /**
   * Apply theme to body and save to localStorage
   * @param {string} theme - Either 'sith' or 'jedi'
   */
  function applyTheme (theme) {
    document.body.classList.remove('sith', 'jedi')
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
    updateToggleLabel(theme)
  }

  // Get saved theme from localStorage or use default (Sith)
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme === 'jedi' || savedTheme === 'sith') {
    applyTheme(savedTheme)
  } else {
    applyTheme('sith')
  }

  // Toggle theme on button click
  toggleBtn.addEventListener('click', () => {
    const isJedi = document.body.classList.contains('jedi')
    const newTheme = isJedi ? 'sith' : 'jedi'
    applyTheme(newTheme)
  })
})
