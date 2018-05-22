import React, { Component } from 'react';
import './App.css';
import Current from './Current.js';
import {currentWeather} from './mockData.js';


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>yo</h1>
        <Current
          city={currentWeather.location}
          condition={currentWeather.currentCondition} />
      </div>
    );
  }
}

export default App;
