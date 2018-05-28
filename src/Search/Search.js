import React, { Component} from 'react';


class Search extends Component {
  constructor() {
    super()

    this.state = {
      userLocation: ''
    }
  }

  render(props) {
    return (
      <form>
        <input 
          type="text"
          value={this.state.userCity}
          onChange={(event) => this.setState({userLocation: event.target.value})} />
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault()
            this.props.getWeather(this.state.userLocation)}}>
            search</button>
  
      </form>
    )
  }
}

export default Search;