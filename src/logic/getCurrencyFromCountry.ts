import { Country } from '../types'

export default function getCurrencyFromCountry(country: Country) {
  return (Object.values(country.currencies)[0] as any).name ?? 'Unknown'
}
