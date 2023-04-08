// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, suggestionClick} = props
  const {suggestion} = eachSuggestion
  const onClickSuggestion = () => {
    suggestionClick(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
