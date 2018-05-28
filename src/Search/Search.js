import React, { Component} from 'react';
import './Search.css';


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
          placeholder="Search example: Denver, CO"
          onfocus={this.placeholder = ''}
          type="text"
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