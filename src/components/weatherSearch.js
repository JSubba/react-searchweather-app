import axios from "axios";

export const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "d66e30fdec8d12402d3e283b9c0260e9";

export const weatherSearch = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_KEY,
        },
    });

    return data;
};
