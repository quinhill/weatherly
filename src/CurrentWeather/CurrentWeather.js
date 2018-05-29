import React from 'react';
import './CurrentWeather.css'


const Current = ({current}) => {

  const {
    location,
    weekday,
    month,
    day,
    currentTemp,
    feelsLike,
    daysLow,
    daysHigh,
    humidity,
    icon,
    visibility,
    summary
  } = current


    return (
      <div className="CurrentWeather">
        <h1 className="location" >{location}</h1>
            <h2 className="date">{weekday}, {month} {day}</h2>
          <h4 className="currentTemp" >{currentTemp}&deg;, 
          Feels Like {feelsLike}&deg;
          </h4>
        <div className="tempInfo">
          <div className="temp">
            <h4>Low</h4>
            <h3>{daysLow}&deg;</h3>
            <p>humidity: {humidity}</p>
          </div>
          <div className="icon">
            <img src={icon} />
          </div>
          <div className="temp">
            <h4>High</h4>
            <h3>{daysHigh}&deg;</h3>
            <p>visibility: {visibility}</p>
          </div>
        </div>
          <p>{summary}</p>
      </div>
    )
  
}

export default Current;