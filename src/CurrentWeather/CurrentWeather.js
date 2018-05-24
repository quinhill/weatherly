import React from 'react';
import './CurrentWeather.css'


const Current = (props) => {


    return (
      <div className="container">
        <div className="CurrentWeather">
          <h1>{props.location}</h1>
            <h2>
              <img src="https://image.flaticon.com/icons/svg/53/53565.svg" />
              {props.currentTemp}
            </h2>
          <div className="temp">
            <h4>Low</h4>
            <h3>{props.daysLow}</h3>
          </div>
          <div className="temp">
            <h4>High</h4>
            <h3>{props.daysHigh}</h3>
          </div>

            <p>{props.summary}</p>

        </div>
      </div>
    )
  
}

export default Current;