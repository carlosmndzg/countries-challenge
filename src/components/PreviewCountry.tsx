import getCurrencyFromCountry from '../logic/getCurrencyFromCountry'
import getLanguagesFromCountry from '../logic/getLanguagesFromCountry'
import getNativeNameFromCountry from '../logic/getNativeNameFromCountry'
import { Country } from '../types'
import CountryFeature from './CountryFeature'

interface Props {
  country: Country
  onReturn: () => void
}

const PreviewCountry: React.FC<Props> = ({ country, onReturn }) => {
  const {
    name: { common },
    flags: { png },
    population,
    region,
    subregion
  } = country

  const nativeName = getNativeNameFromCountry(country)
  const capital = country.capital ? country.capital[0] ?? '' : ''
  const tld = country.tld ? country.tld[0] ?? '' : ''
  const currency = getCurrencyFromCountry(country)
  const languages = getLanguagesFromCountry(country)
  console.log(country)
  // currencies,
  // languages,
  // borders

  return (
    <>
      <button className="btn-back" onClick={onReturn}>
        &larr; Back
      </button>
      <div className="country-preview__container">
        <img src={png} alt={`Flag of ${common}`} />
        <div className="country-preview__content">
          <h2>{common}</h2>
          <div className="country-preview__features">
            <div className="country-preview__block">
              <CountryFeature title="Native Name" text={nativeName} />
              <CountryFeature
                title="Population"
                text={population.toLocaleString()}
              />
              <CountryFeature title="Region" text={region} />
              {subregion && (
                <CountryFeature title="Sub Region" text={subregion} />
              )}
              {capital && <CountryFeature title="Capital" text={capital} />}
            </div>
            <div className="country-preview__block">
              {tld && <CountryFeature title="Top Level Domain" text={tld} />}
              <CountryFeature title="Currencies" text={currency} />
              <CountryFeature title="Languages" text={languages} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PreviewCountry
