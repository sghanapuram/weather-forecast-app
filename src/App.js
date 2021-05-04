import React, { useState, useEffect } from 'react';
import WeatherTile from './components/WeatherTile';
import cityList from './constants';
import getTomorrowsWeather from './utils';

const App = () => {
    const[cityWeatherForecast, setCityWeatherForecast] = useState([]);

    const getWeatherInfo = async () => { // Perform asynchronous operation in array.map()
        const promises = cityList.map(async city => {
            const response = await fetch(
                `/api/location/search/?query=${encodeURIComponent(city)}`
            ).then(response => response.json()).then((data) => {
                return fetch(`/api/location/${data[0].woeid}/`);
            }).then(res => res.json()).then(weatherData => weatherData);
        
            return {
                city: response.title,
                woeid: response.woeid,
                weatherInfo: getTomorrowsWeather(response.consolidated_weather)
            }
        });
        const results = await Promise.all(promises);
        setCityWeatherForecast(results);
    }

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <div className="app">
            <header className="header">
                WEATHER FORECAST
            </header>
            <main className="body">
                <WeatherTile
                    forecastInfo={ cityWeatherForecast }
                />
            </main>
        </div>
    );
};

export default App;
