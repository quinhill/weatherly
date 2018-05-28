import React, { Component } from 'react';
import './App.css';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import Hourly from '../Hourly/Hourly.js'
import TenDayForecast from '../TenDay/TenDayForecast.js';
import { apiKey } from '../apiKey.js'
import { currentCleaner, hourlyCleaner, tendDayCleaner } from '../apiCleaner.js'
import Search from '../Search/Search.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      current: {},
      hourly: [],
      tenDay: [],
    }
  }

  // prevent default on input/submit of location
  
  getWeather = (userInput) => {
    let splitLocation = userInput.split(', ');
    let userCity = splitLocation[0];
    let userState = splitLocation[1];
    fetch(`http://api.wunderground.com/api/${apiKey}//conditions/geolookup/hourly/forecast10day/q/${userState}/${userCity}.json`)
      .then(response => response.json())
      .then(data => this.setState({
          current: currentCleaner(data), 
          hourly: hourlyCleaner(data), 
          tenDay: tendDayCleaner(data)}))
      .catch(err => console.log(err))

  }

  render() {
    return (
      <div className="App">
        <div className="top">
          <Search 
             getWeather={this.getWeather} 
              />
          <CurrentWeather 
              day={this.state.current.day}
              month={this.state.current.month}
              weekDay={this.state.current.weekday}
              daysLow={this.state.current.daysLow}
              summary={this.state.current.summary}
              humidity={this.state.current.humidity}
              location={this.state.current.location} 
              daysHigh={this.state.current.daysHigh}
              feelsLike={this.state.current.feelsLike}
              visibility={this.state.current.visibility}
              currentTemp={this.state.current.currentTemp}
              icon={this.state.current.icon}
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
export default App;
