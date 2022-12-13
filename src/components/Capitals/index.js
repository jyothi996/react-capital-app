import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCountryId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCountryId: event.target.value})
  }

  getCountry = () => {
    const {activeCountryId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCountryId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeCountryId} = this.state
    const country = this.getCountry(activeCountryId)

    return (
      <div className="bg-container">
        <div className="capital-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="country-container">
            <select
              className="select"
              onChange={this.onChangeCapital}
              value={activeCountryId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  value={eachCapital.id}
                  key={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
