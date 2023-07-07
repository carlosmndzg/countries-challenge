import { type Country, type CountryID } from '../types'

interface Props {
  country: Country
  onSelectCountry: (name: CountryID) => void
}

const Country: React.FC<Props> = ({ country, onSelectCountry }) => {
  const {
    name: { common },
    flags: { png },
    population,
    region,
    capital
  } = country
  return (
    <li
      className="country-item"
      onClick={() => {
        onSelectCountry(common)
      }}
    >
      <img
        className="country-item__image"
        src={png}
        alt={`Flag of ${common}`}
      />
      <div className="country-item__info">
        <h3 className="country-item__name">{common}</h3>
        <p className="country-item__feature">
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
        <p className="country-item__feature">
          <span>Region: </span>
          {region}
        </p>
        <p className="country-item__feature">
          <span>Capital: </span>
          {(capital && capital[0]) ?? 'Unknown'}
        </p>
      </div>
    </li>
  )
}

export default Country
