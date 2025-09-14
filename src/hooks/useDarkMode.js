import { useState, useEffect } from 'react'

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches &&
          !localStorage.getItem('theme'))
    }
    return false
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  return [darkMode, toggleDarkMode]
}

export default useDarkMode
