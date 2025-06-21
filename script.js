const cityInput = document.getElementById("city");
const btn = document.getElementById("btn");
const cityName = document.getElementById("city-name");
const datefor = document.getElementById("date");
const day = document.getElementById("day");
const Temperature = document.getElementById("temperature");
const Condition = document.getElementById("condition");
const icon = document.getElementById("icon");
const errorMessage = document.getElementById("error-message");
const pError = document.getElementById("p-error");

function showError(message) {
  errorMessage.style.display = "block";
  pError.textContent = message;
  errorMessage.classList.add("error-message");
}

function hideError() {
  errorMessage.style.display = "none";
  pError.textContent = "";
  errorMessage.classList.remove("error-message");
}

function displayCurrentWeather(data) {
  cityName.textContent = `City: ${data.location.name}`;
  Temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
  Condition.textContent = `Condition: ${data.current.condition.text}`;
  icon.src = data.current.condition.icon;
}

function showNext7DaysDates(forecastData) {
  datefor.innerHTML = "";
  forecastData.forEach((forecastDay) => {
    const dateDiv = document.createElement("div");
    dateDiv.textContent = `Date: ${forecastDay.date} | Temp: ${forecastDay.day.avgtemp_c}°C`;
    datefor.appendChild(dateDiv);
  });
}

async function weather(city) {
  const api = `https://api.weatherapi.com/v1/current.json?key=46ed0baf84724773a86135452252106&q=${encodeURIComponent(
    city
  )}&aqi=no`;
  try {
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error("Invalid city name");
    }
    const data = await res.json();
    displayCurrentWeather(data);
    hideError();
  } catch (error) {
    showError("Please enter a valid city name");
    cityName.textContent = "";
    Temperature.textContent = "";
    Condition.textContent = "";
    icon.src = "";
  }
}

async function forecast(city, days) {
  const api = `https://api.weatherapi.com/v1/forecast.json?key=46ed0baf84724773a86135452252106&q=${encodeURIComponent(
    city
  )}&days=${encodeURIComponent(days)}&aqi=no&alerts=no`;
  try {
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error("Invalid city name");
    }
    const data = await res.json();
    showNext7DaysDates(data.forecast.forecastday);
  } catch (error) {
    showError("Could not fetch forecast data");
  }
}

btn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    hideError();
    weather(city);
    forecast(city, 7);
  } else {
    showError("Please enter a valid city name");
  }
});
