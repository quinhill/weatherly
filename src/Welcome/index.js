import React from 'react';
import Search from '../Search';
import './styles.css';

const Welcome = props => (
  <div className="welcome-page" >
    <h1>What weather you want?</h1>
    <Search
      getWeather={props.getWeather} />
  </div>
);

export default Welcome;
