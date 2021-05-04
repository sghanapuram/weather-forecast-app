import { render, screen } from '@testing-library/react';
import WeatherTile from './WeatherTile';

const forecastInfo = [
    {
        city: 'New York',
        woied: 1234,
        weatherInfo: {
            weather_state_name: 'Clear',
            weather_state_abbr: 'C',
            the_temp: 12.4,
            max_temp: 13.7,
            min_temp: 6
        }
    }
];

test('renders Weather Forecast Tiles ', () => {
    const container = render(<WeatherTile forecastInfo={ forecastInfo } />);
    expect(container).toMatchSnapshot();
});

test('renders Weather Forecast Tiles with city name', () => {
    render(<WeatherTile forecastInfo={ forecastInfo } />);
    const cityName = screen.getByText('New York');
    expect(cityName).toBeInTheDocument();
});

test('renders Weather Forecast Tiles with weather desc', () => {
    render(<WeatherTile forecastInfo={ forecastInfo } />);
    const weatherDesc = screen.getByText('Clear');
    expect(weatherDesc).toBeInTheDocument();
});

test('renders Weather Forecast Tiles with weather icon', () => {
    render(<WeatherTile forecastInfo={ forecastInfo } />);
    const weatherIcon = screen.getByAltText('weather-icon');
    expect(weatherIcon).toBeInTheDocument();
});

test('renders Weather Forecast Tiles with temp', () => {
    render(<WeatherTile forecastInfo={ forecastInfo } />);
    const temp = screen.getByText('12°');
    expect(temp).toBeInTheDocument();
});

test('renders Weather Forecast Tiles with min and max temp ', () => {
    render(<WeatherTile forecastInfo={ forecastInfo } />);
    const maxTemp = screen.getByText('H:13°');
    expect(maxTemp).toBeInTheDocument();
    const minTemp = screen.getByText('L:6°');
    expect(minTemp).toBeInTheDocument();
});

