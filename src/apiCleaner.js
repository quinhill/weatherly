
export let currentWeather = {
  location: data.current_observation.display_location.full,
  currentDay: data.current_observation.observation_time_rfc822,
  currentCondition: data.current_observation.weather,
  currentTemp: data.current_observation.temp_f,
  highTemp: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
  lowTemp: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
  summary: data.forecast.txt_forecast.forecastday[0].fcttext
}