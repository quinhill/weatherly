import React, { Component } from 'react';
import './App.css';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import Hourly from '../Hourly/Hourly.js'
import TenDayForecast from '../TenDay/TenDayForecast.js';
import { apiKey } from '../apiKey.js'
import { currentCleaner, hourlyCleaner, tendDayCleaner } from '../apiCleaner.js'
import Search from '../Search/Search.js';
import Welcome from '../Welcome/Welcome.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      current: {},
      hourly: [],
      tenDay: [],
      welcome: true,
      error: false
    }
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount = () => {
    let location = localStorage.getItem('location')
    if (location) {
    this.getWeather(location)
    }

  }  


  getWeather = (userInput) => {
    this.setState({welcome: false})
    let splitLocation = userInput.split(', ');
    let userCity = splitLocation[0];
    let userState = splitLocation[1];
    fetch(`http://api.wunderground.com/api/${apiKey}//conditions/geolookup/hourly/forecast10day/q/${userState}/${userCity}.json`)
      .then(response => response.json())
      .then(data => this.setState({
          current: currentCleaner(data), 
          hourly: hourlyCleaner(data), 
          tenDay: tendDayCleaner(data)},
          localStorage.setItem('location', userInput)))
      .catch(err => {
        this.setState({error: true})
        alert('Sorry, we could not find that location, please enter your search in the correct format')
      })
  }

  render() {
    if (this.state.welcome) {
      return (
          <Welcome
          getWeather={this.getWeather} />
      )
    } else {
      return (
        <div className="App">
          <div className="top">
            <Search 
              getWeather={this.getWeather} 
                />
            <CurrentWeather 
                current={this.state.current}
                />
          </div>
          <div className="bottom">
            <Hourly 
                hourly={this.state.hourly}
                />
            <TenDayForecast 
                tenDay={this.state.tenDay}
                />
          </div>
        </div>
      );
    }
  }
}

export default App;
