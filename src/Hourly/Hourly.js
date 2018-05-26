import React, { Component} from 'react';
import Card from '../Card';
import './Hourly.css';


class Hourly extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="hourlyContainer">
        {this.props.hourlyArray.map(hour => {
          return <Card 
                      hour={hour.time}
                      temp={hour.temperature}
                      icon={hour.icon}
                      />
        })}
      </div>
      )   
  }
}

export default Hourly;
