import React from 'react';
import './CurrentWeather.css'


const Current = (props) => {


    return (
      <div className="container">
        <div className="CurrentWeather">
          <h1>Denver, CO</h1>
          <p>
            <img src="https://image.flaticon.com/icons/svg/53/53565.svg" />
          </p>
          <h2>67 F</h2>
          <div className="temp">
            <h4>Low</h4>
            <h3>43 F</h3>
          </div>
          <div className="temp">
            <h4>High</h4>
            <h3>78 F</h3>
          </div>
        </div>
      </div>
    )
  
}

export default Current;