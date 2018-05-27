import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userSelectedCity: props.selectedCity
    }
  }


render() {
  return (
    <div>
      <input
        type="text"
        value={this.state.UserSelectedCity}
        onChange={(event) => {
          this.setState({
            userSelectedCity: event.target.value
          })
        }}
        />
      <button
        onClick={(event) => {
          this.props.filterLocation(this.state)
        }}
        >search</button>
    </div>

    )
}
}
export default Search;