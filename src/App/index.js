import React, { Component } from 'react';
import './App.css';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import Hourly from '../Hourly/Hourly.js'
import { apiKey } from '../apiKey.js'
import { currentCleaner, hourlyCleaner } from '../apiCleaner.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      current: {},
      hourly: []
    }
  }

  // prevent default on input/submit of location
  
  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${apiKey}//conditions/geolookup/hourly/forecast10day/q/CO/denver.json`)
      .then(response => response.json())
      .then(data => this.setState({current: currentCleaner(data), hourly: hourlyCleaner(data)}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <CurrentWeather 
            location={this.state.current.location} 
            currentTemp={this.state.current.currentTemp}
            daysLow={this.state.current.daysLow}
            daysHigh={this.state.current.daysHigh}
            summary={this.state.current.summary}
            />
        <Hourly 
            hourlyArray={this.state.hourly}
            />

      </div>
    );
  }
}
export default App;
