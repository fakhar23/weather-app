"use strict";

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

let weatherData, sunriseData;

async function functionApiCall(city) {
  weatherData = await getWeatherJSON(city);
  console.log(weatherData);
  renderWeatherData();
  sunriseData = await getSunRiseJson(
    weatherData.coord.lat,
    weatherData.coord.long
  );
  console.log(sunriseData);
  renderSunRise();
}
function fromSubmit(e) {
  e.preventDefault();
  functionApiCall(inputFormEl.value);
}
document.querySelector(".main-sidebar");

fromEl.addEventListener("submit", fromSubmit);

window.addEventListener("load", (event) => {
  inputFormEl.value = "Mejasem Barat Indonesia";
  functionApiCall("Mejasem Barat");
});
// window.onpaint;

function renderWeatherData() {
  document.querySelectorAll(".hidden").forEach((elem) => {
    elem.classList.add("active");
  });
  // inputFormEl.value = "";
  inputFormEl.blur();
  // console.log(data);
  apiWindSpeedEl.textContent = `${weatherData.wind.speed} Km/h`;
  apiHumidityEl.textContent = `${weatherData.main.humidity} %`;
  apiPressureEl.textContent = `${weatherData.main.pressure} kPa `;
  apiVisibilityEl.textContent = `${weatherData.visibility} m`;
  apiCityEl.textContent = weatherData.name;
  apiCountryAPI.textContent = `${weatherData.sys.country}`;
  apiTemperatureEl.textContent = `${Math.round(weatherData.main.temp)} C`;
  apiWeatherConditionEl.textContent = `${weatherData.weather[0].description}`;
}
function renderSunRise() {
  document.querySelectorAll(".hidden2").forEach((elem) => {
    elem.classList.add("active");
  });
  apiSunriseEl.textContent = sunriseData.results.sunrise;
  apiSunsetEl.textContent = sunriseData.results.sunset;
}
