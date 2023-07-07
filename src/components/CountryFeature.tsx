interface Props {
  title: string
  text: string
}

const CountryFeature: React.FC<Props> = ({ title, text }) => {
  return (
    <p className="country-item__feature">
      <span>{title}: </span>
      {text}
    </p>
  )
}

export default CountryFeature
