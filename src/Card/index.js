import React from 'react';
import './styles.css';

const Card = props => {
  if(props.hour) {
    return(
      <div className="hourlyCard">
        <h3 className="hour">{props.hour}</h3>
        <h4 className="hourTemp">{props.temp}&deg;</h4>
        <img src={props.icon} />
      </div>
    )
  }

  if(props.weekday) {
    return(
      <div className="dailyCard">
        <h3 className="day">{props.weekday}</h3>
        <h4 className="dayTemp">High: {props.daysHigh}&deg;</h4>
        <h4 className="dayTemp">Low: {props.daysLow}&deg;</h4>
        <img src={props.icon} />
      </div> 
      )
  }
}


export default Card;