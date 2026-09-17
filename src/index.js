import "./styles.css";
import {
  dates,
  tempMaxes,
  tempMins,
  conditions,
  weatherData,
  todaysWeather,
  dailyWeather,
  cityInput,
  btn,
  locationName,
  currentTemperature,
  realFeel,
  weatherIcon,
  convertBtn,
  threeDayBtn,
  fiveDayBtn,
  sevenDayBtn,
  tenDayBtn,
  errorMessage,
} from "./dom.js";
import { fetchData, defaultFetchData } from "./weatherApi.js";
import {
  returnWeather,
  returnLocation,
  returnCurrentTemp,
  returnRealFeel,
  returnWeatherIcon,
  toCelsius,
  toFahrenheit,
  threeDayDisplay,
  fiveDayDisplay,
  sevenDayDisplay,
  tenDayDisplay,
} from "./weatherData.js";

defaultFetchData()
  .then(function (data) {
    returnLocation(data, locationName);
    returnCurrentTemp(data, currentTemperature);
    returnRealFeel(data, realFeel);
    returnWeatherIcon(data, weatherIcon);
    returnWeather(data, dates, tempMins, tempMaxes, conditions);
  })
  .catch(function (err) {
    errorMessage.textContent = err.message;
  });

cityInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    fetchData()
      .then(function (data) {
        returnLocation(data, locationName);
        returnCurrentTemp(data, currentTemperature);
        returnRealFeel(data, realFeel);
        returnWeatherIcon(data, weatherIcon);
        returnWeather(data, dates, tempMins, tempMaxes, conditions);
      })
      .catch(function (err) {
        errorMessage.textContent = err.message;
      });
    cityInput.value = "";
  }
});

btn.addEventListener("click", () => {
  fetchData()
    .then(function (data) {
      returnLocation(data, locationName);
      returnCurrentTemp(data, currentTemperature);
      returnRealFeel(data, realFeel);
      returnWeatherIcon(data, weatherIcon);
      returnWeather(data, dates, tempMins, tempMaxes, conditions);
    })
    .catch(function (err) {
      errorMessage.textContent = err.message;
    });
  cityInput.value = "";
});

convertBtn.addEventListener("click", () => {
  if (convertBtn.textContent === "° F") {
    convertBtn.textContent = "° C";
    toCelsius();
  } else if (convertBtn.textContent === "° C") {
    convertBtn.textContent = "° F";
    toFahrenheit();
  }
});

threeDayBtn.addEventListener("click", () => {
  threeDayDisplay();
});

fiveDayBtn.addEventListener("click", () => {
  fiveDayDisplay();
});

sevenDayBtn.addEventListener("click", () => {
  sevenDayDisplay();
});

tenDayBtn.addEventListener("click", () => {
  tenDayDisplay();
});
