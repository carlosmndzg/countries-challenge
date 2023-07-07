import { Country } from '../types'

export default function getNativeNameFromCountry(country: Country) {
  if (country.name.nativeName) {
    return (
      (Object.values(country.name.nativeName)[0] as any).official ??
      country.name.common
    )
  }

  return country.name.common
}
