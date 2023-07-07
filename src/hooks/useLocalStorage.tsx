import { useEffect, useState } from 'react'

export default function useLocalStorage<T>(
  initialValue: T,
  key: string
): [T, (value: T) => void] {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key)

    return item ? JSON.parse(item) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [key, value])

  return [value, setValue]
}
