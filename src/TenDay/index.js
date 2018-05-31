import React from 'react';
import Card from '../Card';
import './styles.css';

const TenDayForecast = props => (
  <div className="tenDayContainer">
    {props.tenDay.map((day, index) => (<Card
      key={index}
      icon={day.icon}
      weekday={day.weekday}
      daysLow={day.daysLow}
      daysHigh={day.daysHigh} />)
    )}
  </div>
);

export default TenDayForecast;
