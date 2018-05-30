import React, { Component} from 'react';
import './styles.css';
import { data } from '../cities.js';
// import Trie from '@quinhill/complete-me';

  // const trie = new Trie();
  // trie.populate(data)


class Search extends Component {
  constructor() {
    super()

    this.state = {
      userLocation: ''
    }
    this.updateInput = this.updateInput.bind(this)

 
  }

  // citySuggest() {
  //   trie.suggest(this.state.userLocation);
  //     return trie.suggestions.splice(0, 5).map(city => <option>{city}</option> )
  // }

  updateInput(event) {
    const value = event.target.value;
    this.setState({userLocation: value})
  }

  render(props) {
    return (
      <form>
        <input 
          list="cities"
          placeholder="Search example: Denver, CO"
          type="text"
          value={ this.state.userLocation }
          onChange={ this.updateInput } />

        <datalist id="cities">     
        
        </datalist>
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