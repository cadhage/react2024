import React, { useState } from 'react';

const WeatherApp = () => {
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=YOUR_API_KEY&units=metric`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null); // Clear previous errors if successful
    } catch (err) {
      setError(err.message);
      setWeatherData(null); // Clear previous weather data if an error occurs
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
      <h1>Weather App</h1>
      <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter city name or ZIP code"
          style={{
            padding: '10px',
            width: '60%',
            maxWidth: '400px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div
          style={{
            marginTop: '20px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            display: 'inline-block',
            textAlign: 'left',
          }}
        >
          <h2>
            Weather in {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>
            <strong>Temperature:</strong> {weatherData.main.temp}°C
          </p>
          <p>
            <strong>Humidity:</strong> {weatherData.main.humidity}%
          </p>
          <p>
            <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
          </p>
          <p>
            <strong>Condition:</strong> {weatherData.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

