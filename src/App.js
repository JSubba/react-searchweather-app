import React, { useState } from "react";
import "./App.css";
import { weatherSearch } from "./components/weatherSearch";
import WeatherContainer from "./components/WeatherContainer";

const App = () => {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if (e.key === "Enter") {
            const data = await weatherSearch(query);

            setWeather(data);
            setQuery("");
        }
    };

    return (
        <WeatherContainer
            query={query}
            setQuery={setQuery}
            search={search}
            weather={weather}
        />
    );
};

export default App;
