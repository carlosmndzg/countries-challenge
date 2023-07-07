interface Props {
  value: string
  setValue: (filter: string) => void
}

const Selection: React.FC<Props> = ({ value, setValue }) => {
  return (
    <select
      className="selectionbox"
      placeholder="Filter by region"
      onChange={e => setValue(e.target.value)}
      value={value}
    >
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}

export default Selection
