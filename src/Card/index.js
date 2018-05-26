import React from 'react';
import './styles.css'

const Card = (props) => {
  if(props.hour) {
    return(
      <div className="hourlyCard">
        <h3>{props.hour}</h3>
        <h4>{props.temp}&deg;</h4>
        <img src={props.icon}/>
      </div>
    )
  }

  if(props.weekday) {
    return(
        <div className="dailyCard">
          <h3>{props.weekday}</h3>
          <h4>High: {props.daysHigh}&deg;</h4>
          <h4>Low: {props.daysLow}&deg;</h4>
        </div>
      )
  }


}


export default Card;