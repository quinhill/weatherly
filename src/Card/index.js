import React from 'react';

const Card = (props) => {
  if(props.hour) {
    return(
      <div>
        <h4>{props.hour}</h4>
        <h4>{props.temp}</h4>
        <img src={props.icon}/>
      </div>
    )
  }

  if(props.weekday) {
    return(
        <div>
          <h4>{props.weekday}</h4>
          <h4>{props.daysLow}</h4>
          <h4>{props.daysHigh}</h4>
        </div>
      )
  }


}


export default Card;