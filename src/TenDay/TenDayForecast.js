import React, { Component } from 'react';
import Card from '../Card';
import './TenDayForecast.css'

class TenDayForecast extends Component {

  render(props) {
    return (
      <div className="tenDayContainer">
        {this.props.tenDayArray.map(day => {
          return <Card
                    weekday={day.weekday}
                    daysHigh={day.daysHigh}
                    daysLow={day.daysLow}
                    />
        })}
      </div>
      )

  }
}

export default TenDayForecast;