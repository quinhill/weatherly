import React from 'react';
import Card from '../Card';
import './styles.css';


const Hourly = props => (
  <div className="hourlyContainer">
    {props.hourly.map((hour, index) => (<Card
      key={index}
      temp={hour.temperature}
      hour={hour.time}
      icon={hour.icon} />)
    )}
  </div>
);

export default Hourly;
