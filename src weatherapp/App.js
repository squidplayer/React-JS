import React, { useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import axios from "axios";

// import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const api_key = "e847ab51a4244ad0a9f121934231410";

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(storedSearches);
  }, []);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]); // Add recentSearches as a dependency

  const searchWeather = () => {
    if (city.trim() === "") {
      setError("Please enter a valid city name");
      return;
    }
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=yes`
      )
      .then((response) => {
        setWeatherData(response.data);
        console.log(response)
        setError(null);
        updateRecentSearches(city);
      })
      .catch((error) => {
        setError(`Something went wrong`);
        setWeatherData(null);
      });
  };

  const updateRecentSearches = (newCity) => {
    setRecentSearches((prevSearches) => {
      const updatedSearches = [newCity, ...prevSearches];
      return updatedSearches.slice(0, 5); // Limit to the last 5 searches
    });
  };

  return (
    <div className="max-w-[1200px] justify-center mt:5 p-50 py-50 gap-10 p-13">
      <h1>Weather App</h1>
      <div className="border-black-500">
        <input className="p-2 mt-10"
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="p-5 ml-5 text-red-500 border-red-900 " onClick={searchWeather}>Search</button>
        <label>
          <input className="ml-5"
            type="checkbox"
            checked={unit === "imperial"}
            onChange={() => setUnit(unit === "metric" ? "imperial" : "metric")}
          />
          Fahrenheit
        </label>
      </div>
      <div id="error-message">{error && <p className="error">{error}</p>}</div>
      {weatherData && <WeatherDisplay data={weatherData} />}
      <div id="recent-searches" className="grid-rows-5 p-10 border-yellow-900 text-red-1000">
        <h3>Recent Searches</h3>
        {recentSearches.map((search, index) => (
          <div key={index}>{search}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
