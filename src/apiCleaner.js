export const currentCleaner = (data) => {
  return {
  feelsLike: data.current_observation.feelslike_string,
  humidity: data.current_observation.relative_humidity,
  visibility: data.current_observation.visibility_mi,
  wind: data.current_observation.wind_mph,

  location: data.current_observation.display_location.full,
  weekday: data.hourly_forecast[0].FCTTIME.weekday_name,
  month: data.hourly_forecast[0].FCTTIME.month_name_abbrev,
  day: data.hourly_forecast[0].FCTTIME.mday,
  summary: data.forecast.txt_forecast.forecastday[0].fcttext,
  currentTemp: data.current_observation.temp_f,
  daysHigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
  daysLow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit
  }
}

export const hourlyCleaner = data => data.hourly_forecast.splice(1, 7).map(hour => {
      return {time: hour.FCTTIME.civil, temperature: hour.temp.english, icon: hour.icon_url}
    })

export const tendDayCleaner = data => data.forecast.simpleforecast.forecastday.map(day => {
    return {weekday: day.date.weekday, daysHigh: day.high.fahrenheit, daysLow: day.low.fahrenheit}
  })
