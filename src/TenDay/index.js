import React from 'react';
import Card from '../Card';
import './styles.css'

const TenDayForecast = (props) => {

    return (
      <div className="tenDayContainer">
        {props.tenDay.map(day => {
          return <Card
                    icon={day.icon}
                    weekday={day.weekday}
                    daysLow={day.daysLow}
                    daysHigh={day.daysHigh}
                    />
        })}
      </div>
      )
}

export default TenDayForecast;