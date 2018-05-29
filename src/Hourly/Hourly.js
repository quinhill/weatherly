import React from 'react';
import Card from '../Card';
import './Hourly.css';


const Hourly = (props) => {

  return (
    <div className="hourlyContainer">
      {props.hourly.map(hour => {
        return <Card 
                    temp={hour.temperature}
                    hour={hour.time}
                    icon={hour.icon} />
      })}
    </div>
    )   
}

export default Hourly;
