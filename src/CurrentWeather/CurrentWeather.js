import React from 'react';
import './CurrentWeather.css'


const Current = (props) => {


    return (
      <div className="CurrentWeather">
        <h1 className="location" >{props.location}</h1>
            <h2 className="date">{props.weekDay}, {props.month} {props.day}</h2>
          <h4 className="currentTemp" >{props.currentTemp}&deg;, 
          Feels Like {props.feelsLike}&deg;
          </h4>
        <div className="temp">
          <h4>Low</h4>
          <h3>{props.daysLow}&deg;</h3>
          <p>humidity: {props.humidity}</p>
        </div>
        <div className="temp">
          <h4>High</h4>
          <h3>{props.daysHigh}&deg;</h3>
          <p>visibility: {props.visibility}</p>
        </div>

          <p>{props.summary}</p>

      </div>
    )
  
}

export default Current;