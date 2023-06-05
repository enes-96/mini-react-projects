import React, { useState, useEffect } from "react";

const API_KEY = "9896ec9378dcd601d0184cc9302b41ec";

async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error fetching weather data:", error);
    return null;
  }
}

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (searchCity !== "") {
        const data = await fetchWeatherData(searchCity);
        setWeatherData(data);
        console.log(data);
      }
    }
    fetchData();
  }, [searchCity]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await fetchWeatherData(searchCity);
    setWeatherData(data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="border-2"
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="Enter a city"
        />
        <button type="submit">Search</button>
      </form>

      {weatherData ? (
        <div>
          <h1>Weather Data Found</h1>
        </div>
      ) : (
        <p>No data to display.</p>
      )}
    </div>
  );
}

export default WeatherApp;
