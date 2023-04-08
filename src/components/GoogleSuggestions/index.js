// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  suggestionClick = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />{' '}
          <div className="suggestions-container">
            <div className="search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="input"
                onChange={this.onSearch}
                value={searchInput}
              />
            </div>
            <ul className="list-container">
              {searchResults.map(eachSugg => (
                <SuggestionItem
                  key={eachSugg.id}
                  eachSuggestion={eachSugg}
                  suggestionClick={this.suggestionClick}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
