import React, { Component } from 'react';
import './App.css';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
// import {currentWeather} from './apiCleaner.js';
import { apiKey } from '../apiKey.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }

  }

  // prevent default on input/submit of location
  
  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${apiKey}//conditions/geolookup/hourly/forecast10day/q/CO/denver.json`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <CurrentWeather />
      </div>
    );
  }
}

export default App;
