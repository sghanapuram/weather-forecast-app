import React, { Fragment } from 'react';

const WeatherTile = ({ forecastInfo }) => (
    <Fragment>
        {
            forecastInfo.map((item, i) => (
                <div key={ i } className="weather-tile">
                    <p className="city">{ item.city }</p>
                    <p className="weather-state">{ item.weatherInfo.weather_state_name }</p>
                    <img
                        src={ `https://www.metaweather.com/static/img/weather/${item.weatherInfo.weather_state_abbr}.svg` }
                        alt="weather-icon"
                        className="weather-icon"
                    />
                    <p className="current-temp">{ Math.floor(item.weatherInfo.the_temp) }&deg;</p>
                    <p className="temp">
                        H:{ Math.floor(item.weatherInfo.max_temp) }&deg;
                        <span className="min-temp">L:{ Math.floor(item.weatherInfo.min_temp) }&deg;</span>
                    </p>
                </div>
            ))
        }
    </Fragment>
);

export default WeatherTile;
