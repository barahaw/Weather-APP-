# Weather App

A simple web application that allows users to search for the current weather and a 7-day forecast for any city using the WeatherAPI.

## Features

- Search for any city to get the current weather (temperature, condition, and icon).
- View a 7-day weather forecast (date and average temperature for each day).
- Error handling for invalid or empty city names.
- Responsive and modern UI with styled components.

## How It Works

1. **User Input:** Enter a city name and click the "Get Weather" button.
2. **Current Weather:** The app fetches and displays the current weather for the city.
3. **7-Day Forecast:** The app fetches and displays the next 7 days' dates and average temperatures in a collapsible details section.
4. **Error Handling:** If the city name is invalid or empty, a styled error message is shown.

## File Structure

- `index.html` – Main HTML structure for the app.
- `styles.css` – All styles for layout, colors, fonts, and components.
- `script.js` – Handles user input, API requests, DOM updates, and error handling.

## API

- Uses [WeatherAPI](https://www.weatherapi.com/) for weather data.
- Requires an API key (already included in the code for demo purposes).

## Credits

- Weather data provided by [WeatherAPI](https://www.weatherapi.com/).
- Font: [DM Sans](https://fonts.google.com/specimen/DM+Sans) from Google Fonts.

---

Feel free to improve the UI or add more features such as humidity, wind speed, or weather icons for the forecast!
