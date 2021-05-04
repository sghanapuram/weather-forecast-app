import { render, screen, prettyDOM } from '@testing-library/react';
import App from './App';


test('renders App', () => {
    const container = render(<App />);
    expect(container).toMatchSnapshot()
});

test('renders Weather Forecast App', () => {
    render(<App />);
    const header = screen.getByText('WEATHER FORECAST');
    expect(header).toBeInTheDocument();
});

