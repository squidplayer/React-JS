import React from 'react';
// import './App.css'

const WeatherDisplay = ({ data }) => {
  return (
    <div id="weather-info">
      <h2>{data.location.name}</h2>
      <p>Temperature: {data.current.temp_c} &deg;C</p>
      <p>Weather: {data.current.condition.text}</p>
      <p>Wind Speed: {data.current.wind_kph} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
