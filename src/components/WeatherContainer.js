import React from "react";
import Content from "./Content";
import DateTime from "./DateTime";

const WeatherContainer = ({ query, setQuery, search, weather }) => {
  return (
    <div className="container">
      <input
        type="text"
        className="search"
        placeholder="Search your city weather"
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
          <Content weather={weather} />
          <DateTime />
        </div>
      )}
    </div>
  );
};

export default WeatherContainer;
