import { Country } from '../types'

export default function getCurrencyFromCountry(country: Country) {
  return (Object.values(country.languages) as string[]).join(', ') ?? 'Unknown'
}
