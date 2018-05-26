import React from 'react';
import './CurrentWeather.css'


const Current = (props) => {


    return (
      <div className="container">
        <div className="CurrentWeather">
          <h1>{props.location}</h1>
              <span>{props.weekDay} {props.month} {props.day}</span>
            <h2>
              <img src="https://image.flaticon.com/icons/svg/53/53565.svg" />
              {props.currentTemp}&deg;, 
            Feels Like {props.feelsLike}&deg;
            </h2>
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
      </div>
    )
  
}

export default Current;