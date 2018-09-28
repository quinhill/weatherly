import React, { Component } from 'react';
import './styles.css';
import CurrentWeather from '../Current';
import Hourly from '../Hourly';
import TenDayForecast from '../TenDay';
import { apiKey } from '../apiKey';
import { currentCleaner, hourlyCleaner, tenDayCleaner } from '../apiCleaner';
import Search from '../Search';
import Welcome from '../Welcome';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      current: {},
      hourly: [],
      tenDay: [],
      welcome: true,
    };
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    const location = localStorage.getItem('location');
    if (location) {
      this.getWeather(location);
    }
  }

  getWeather(userInput) {
    this.setState({ welcome: false });
    const { userCity, userState } = this.splitLocation(userInput);
    this.storeLocation(userInput);

    fetch(`https://api.wunderground.com/api/${apiKey}/conditions/geolookup/hourly/forecast10day/q/${userState}/${userCity}.json`)
      .then(response => response.json())
      .then(data => this.newState(data))
      .catch((error) => {
        console.log(error)
        alert('Sorry, we could not find that location, please enter your search in the correct format');
      });
  }

  splitLocation(userInput) {
    const splitLocation = userInput.split(', ');
    const userCity = splitLocation[0];
    const userState = splitLocation[1];
    return { userCity, userState };
  }

  storeLocation(userInput) {
    localStorage.setItem('location', userInput);
  }

  newState(data) {
    return this.setState({
      current: currentCleaner(data),
      hourly: hourlyCleaner(data),
      tenDay: tenDayCleaner(data),
    });
  }

  render() {
    if (this.state.welcome) {
      return (
        <Welcome
          getWeather={this.getWeather} />
      );
    }
    return (
      <div className="App">
        <div className="top">
          <Search
            getWeather={this.getWeather} />
          <CurrentWeather
            current={this.state.current} />
        </div>
        <div className="bottom">
          <Hourly
            hourly={this.state.hourly} />
          <TenDayForecast
            tenDay={this.state.tenDay} />
        </div>
      </div>
    );
  }
}

export default App;
