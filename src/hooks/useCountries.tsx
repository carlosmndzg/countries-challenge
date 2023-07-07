import { useState, useEffect } from 'react'
import { API_ENDPOINT } from '../constants'
import { Country } from '../types'

export default function useCountries() {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch(API_ENDPOINT)
      const data: any[] = await res.json()

      const countriesData = data
        .filter(country => country.independent)
        .map(country => {
          const {
            name,
            flags,
            population,
            capital,
            subregion,
            tld,
            currencies,
            languages,
            borders
          } = country

          const region =
            country.region === 'Americas' ? 'America' : country.region

          return {
            name,
            flags,
            population,
            region,
            capital,
            subregion,
            tld,
            currencies,
            languages,
            borders
          }
        }) as Country[]

      setCountries(countriesData)
    }

    fetchCountries()
  }, [])

  return countries
}
