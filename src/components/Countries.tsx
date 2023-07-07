import { type Country as CountryType, type CountryID } from '../types'
import Country from './Country'

interface Props {
  countries: CountryType[]
  onSelectCountry: (name: CountryID) => void
}

const Countries: React.FC<Props> = ({ countries, onSelectCountry }) => {
  return (
    <ul className="country-list">
      {countries.map(country => {
        return (
          <Country
            key={country.name.common}
            country={country}
            onSelectCountry={onSelectCountry}
          />
        )
      })}
    </ul>
  )
}

export default Countries
