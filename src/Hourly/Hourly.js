import React from 'react';
import Card from '../Card';
import './Hourly.css';


const Hourly = (props) => {

  return (
    <div className="hourlyContainer">
      {props.hourly.map(hour => {
        return <Card 
                    hour={hour.time}
                    temp={hour.temperature}
                    icon={hour.icon}
                    />
      })}
    </div>
    )   
}

export default Hourly;
