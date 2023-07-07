export interface Country {
  name: Name
  capital?: string[]
  region: string
  subregion?: string
  tld?: string[]
  population: number
  flags: Flags
  currencies: any[]
  languages: any
  borders?: string[]
}

export interface Name {
  common: string
  official: string
  nativeName?: any
}

export interface Flags {
  png: string
  svg: string
  alt?: string
}

export type CountryID = Name['common']
