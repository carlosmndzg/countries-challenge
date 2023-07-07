interface Props {
  value: string
  setValue: (value: string) => void
  placeholder?: string
}

const SearchBox: React.FC<Props> = ({
  value,
  setValue,
  placeholder = 'Type in the box'
}) => {
  return (
    <input
      className="searchbox"
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder={placeholder}
    />
  )
}

export default SearchBox
