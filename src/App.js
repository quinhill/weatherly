import React, { Component } from 'react';
import './App.css';
import Current from './Current.js';
// import {currentWeather} from './apiCleaner.js';
import { apiKey } from './apiKey.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }

  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${apiKey}//conditions/geolookup/hourly/forecast10day/q/CO/denver.json`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>yo</h1>
        <Current
          // city={currentWeather.location}
          // condition={currentWeather.currentCondition}
          />
      </div>
    );
  }
}

export default App;
