"use strict";
const btnNavEl = document.querySelector(".btn-mobile-nav");
const bodyEl = document.querySelector("body");
btnNavEl.addEventListener("click", (e) => {
  console.log("mobile-button-pressed");
  bodyEl.classList.toggle("nav-open");
});

// secting all important elements on the page
const fromEl = document.querySelector(".location-search-box");
const inputFormEl = document.querySelector(".Input-form");
const apiWindSpeedEl = document.querySelector(".api-wind-speed");
const apiHumidityEl = document.querySelector(".api-humidiy");
const apiPressureEl = document.querySelector(".api-pressure");
const apiVisibilityEl = document.querySelector(".api-visibility");
const apiCityEl = document.querySelector(".api-city");
const apiCountryAPI = document.querySelector(".api-country");
const apiTemperatureEl = document.querySelector(".api-temperature");
const apiSunriseEl = document.querySelector(".api-sunrise");
const apiSunsetEl = document.querySelector(".api-sunset");
const apiWeatherConditionEl = document.querySelector(".api-condition");
const timeEl = document.querySelector(".time");
const sunriseAgoEl = document.querySelector(".sunrise-ago");
const sunsetAgoEl = document.querySelector(".sunset-ago");

let weatherData,
  sunriseData,
  sunriseDate2,
  sunsetDate2,
  sunsetHoursAgo,
  sunriseHoursAgo;

// window load function
window.addEventListener("load", (event) => {
  // inputFormEl.value = "Mejasem Barat Indonesia";
  // functionApiCall("Mejasem Barat");
  inputFormEl.value = "Lahore Pakistan";
  functionApiCall("Lahore");
});

// form submit
fromEl.addEventListener("submit", fromSubmit);

function fromSubmit(e) {
  e.preventDefault();
  document.querySelectorAll(".hidden").forEach((elem) => {
    elem.classList.remove("active");
  });
  document.querySelectorAll(".hidden2").forEach((elem) => {
    elem.classList.remove("active");
  });
  functionApiCall(inputFormEl.value);
}

// getting data form both API's and calling the render methods
async function functionApiCall(city) {
  weatherData = await getWeatherJSON(city);
  console.log(weatherData);
  renderWeatherData();
  // await setTimeout(() => 500);
  renderSunRise();
}

// renders sunRise
function renderSunRise() {
  document.querySelectorAll(".hidden2").forEach((elem) => {
    elem.classList.add("active");
  });
  // apiSunriseEl.textContent = `${sunriseDate2.getHours()}:${sunriseDate2.getMinutes()}`;
  // apiSunsetEl.textContent = `${sunsetDate2.getHours()}:${sunsetDate2.getMinutes()}`;
  apiSunriseEl.textContent = `${sunriseDate2}`;
  apiSunsetEl.textContent = `${sunsetDate2}`;
}

// renders weather data
function renderWeatherData() {
  document.querySelectorAll(".hidden").forEach((elem) => {
    elem.classList.add("active");
  });
  inputFormEl.blur();
  apiWindSpeedEl.textContent = `${weatherData.wind.speed} Km/h`;
  apiHumidityEl.textContent = `${weatherData.main.humidity} %`;
  apiPressureEl.textContent = `${weatherData.main.pressure} kPa `;
  apiVisibilityEl.textContent = `${weatherData.visibility} m`;
  apiCityEl.textContent = weatherData.name;
  apiCountryAPI.textContent = `${weatherData.sys.country}`;
  apiTemperatureEl.textContent = `${Math.round(weatherData.main.temp)} C`;
  apiWeatherConditionEl.textContent = `${weatherData.weather[0].description}`;

  // seting actual time
  const currentTime = getOverSeasTime(new Date());
  // console.log(currentTime);
  // timeEl.textContent = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
  timeEl.textContent = currentTime;

  // setting sunrise and sunsets time
  sunriseDate2 = getOverSeasTime(new Date(weatherData.sys.sunrise * 1000));
  sunsetDate2 = getOverSeasTime(new Date(weatherData.sys.sunset * 1000));

  // setting setrise and sunset * hours ago
  sunriseHoursAgo = new Date(weatherData.sys.sunrise * 1000) - new Date();
  sunriseAgoEl.textContent = DisplayHoursAgo(sunriseHoursAgo);
  sunsetHoursAgo = new Date(weatherData.sys.sunset * 1000) - new Date();
  sunsetAgoEl.textContent = DisplayHoursAgo(sunsetHoursAgo);
}
