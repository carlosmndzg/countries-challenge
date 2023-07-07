import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage(false, 'color-scheme')

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }

    return () => {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  const switchMode = () => {
    setDarkMode(!darkMode)
  }

  return { darkMode, switchMode }
}
