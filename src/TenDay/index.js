import React from 'react';
import Card from '../Card';
import './styles.css'

const TenDayForecast = (props) => {

    return (
      <div className="tenDayContainer">
        {props.tenDay.map(day => {
          return <Card
                    weekday={day.weekday}
                    daysHigh={day.daysHigh}
                    daysLow={day.daysLow}
                    icon={day.icon}
                    />
        })}
      </div>
      )
}

export default TenDayForecast;