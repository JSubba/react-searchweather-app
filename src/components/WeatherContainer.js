import DateTime from "./DateTime";

const WeatherContainer = ({ query, setQuery, search, weather }) => {
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search city weather"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
            <div className="wrap">
              <span>
                MIN:{weather.main.temp_min}
                <sup>&deg;C</sup>
              </span>
              <span>
                MAX:{weather.main.temp_max}
                <sup>&deg;C</sup>
              </span>
            </div>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
          <DateTime />
        </div>
      )}
    </div>
  );
};

export default WeatherContainer;
