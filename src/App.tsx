import Header from './components/Header'
import Main from './components/Main'
import PreviewCountry from './components/PreviewCountry'
import Options from './components/Options'
import SearchBox from './components/SearchBox'
import SelectionBox from './components/SelectionBox'
import Countries from './components/Countries'
import useCountries from './hooks/useCountries'
import useDarkMode from './hooks/useDarkMode'
import { useCallback, useMemo, useState } from 'react'
import { CountryID } from './types'

export default function App() {
  const countries = useCountries()
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [filter, setFilter] = useState('All')
  const [searchField, setSearchField] = useState('')
  const { darkMode, switchMode } = useDarkMode()

  const countriesFiltered = useMemo(() => {
    if (filter === 'All') return countries

    return countries.filter(country => country.region === filter)
  }, [countries, filter]).filter(country =>
    country.name.common.toLowerCase().includes(searchField.toLowerCase().trim())
  )

  const countryPreview = countries.find(
    country => country.name.common === selectedCountry
  )

  const onSelectCountry = useCallback((name: CountryID) => {
    setSelectedCountry(name)
  }, [])

  return (
    <>
      <Header>
        <h1>Where in the world?</h1>
        <button className="btn-color-scheme" onClick={switchMode}>
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </Header>
      <Main>
        {countryPreview ? (
          <PreviewCountry
            country={countryPreview}
            onReturn={() => setSelectedCountry(null)}
          />
        ) : (
          <>
            <Options>
              <SearchBox
                value={searchField}
                setValue={setSearchField}
                placeholder="Search for a country..."
              />
              <SelectionBox value={filter} setValue={setFilter} />
            </Options>
            <Countries
              countries={countriesFiltered}
              onSelectCountry={onSelectCountry}
            />
          </>
        )}
      </Main>
    </>
  )
}
