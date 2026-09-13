import {
  weatherData,
  cityInput,
  btn,
  todaysWeather,
  locationName,
  currentTemperature,
  currentDayHigh,
  currentDayLow,
  realFeel,
  currentDayConditions,
  weatherIcon,
  nextDayHigh,
  nextDayLow,
  nextDayConditions,
  thirdDayDate,
  thirdDayHigh,
  thirdDayLow,
  thirdDayConditions,
  fourthDayDate,
  fourthDayHigh,
  fourthDayConditions,
  fourthDayLow,
  fifthDayDate,
  fifthDayHigh,
  fifthDayLow,
  fifthDayConditions,
  sixthDayDate,
  sixthDayHigh,
  sixthDayLow,
  sixthDayConditions,
  seventhDayDate,
  seventhDayHigh,
  seventhDayLow,
  seventhDayConditions,
  eighthDayDate,
  eighthDayHigh,
  eighthDayLow,
  eighthDayConditions,
  ninthDayDate,
  ninthDayHigh,
  ninthDayLow,
  ninthDayConditions,
  tenthDayDate,
  tenthDayHigh,
  tenthDayLow,
  tenthDayConditions,
  convertBtn,
} from "./dom.js";
import { fetchData } from "./weatherApi.js";
import {
  returnLocation,
  returnCurrentTemp,
  returnHigh,
  returnLow,
  returnRealFeel,
  returnCurrentDayConditions,
  returnNextDayHigh,
  returnNextDayLow,
  returnNextDayConditions,
  returnThirdDayHigh,
  returnThirdDayLow,
  returnThirdDayConditions,
  returnWeatherIcon,
  toCelsius,
  toFahrenheit,
} from "./weatherData.js";

fetchData().then(function (data) {
  returnLocation(data, locationName);
  returnCurrentTemp(data, currentTemperature);
  returnHigh(data, currentDayHigh);
  returnLow(data, currentDayLow);
  returnRealFeel(data, realFeel);
  returnCurrentDayConditions(data, currentDayConditions);
  returnNextDayHigh(data, nextDayHigh);
  returnNextDayLow(data, nextDayLow);
  returnNextDayConditions(data, nextDayConditions);
  returnThirdDayHigh(data, thirdDayHigh);
  returnThirdDayLow(data, thirdDayLow);
  returnThirdDayConditions(data, thirdDayConditions);
  returnWeatherIcon(data, weatherIcon);
});

cityInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    fetchData().then(function (data) {
      returnLocation(data, locationName);
      returnCurrentTemp(data, currentTemperature);
      returnHigh(data, currentDayHigh);
      returnLow(data, currentDayLow);
      returnRealFeel(data, realFeel);
      returnCurrentDayConditions(data, currentDayConditions);
      returnNextDayHigh(data, nextDayHigh);
      returnNextDayLow(data, nextDayLow);
      returnNextDayConditions(data, nextDayConditions);
      returnThirdDayHigh(data, thirdDayHigh);
      returnThirdDayLow(data, thirdDayLow);
      returnThirdDayConditions(data, thirdDayConditions);
      returnWeatherIcon(data, weatherIcon);
    });
    cityInput.value = "";
  }
});

btn.addEventListener("click", () => {
  fetchData().then(function (data) {
    returnLocation(data, locationName);
    returnCurrentTemp(data, currentTemperature);
    returnHigh(data, currentDayHigh);
    returnLow(data, currentDayLow);
    returnRealFeel(data, realFeel);
    returnCurrentDayConditions(data, currentDayConditions);
    returnNextDayHigh(data, nextDayHigh);
    returnNextDayLow(data, nextDayLow);
    returnNextDayConditions(data, nextDayConditions);
    returnThirdDayHigh(data, thirdDayHigh);
    returnThirdDayLow(data, thirdDayLow);
    returnThirdDayConditions(data, thirdDayConditions);
    returnWeatherIcon(data, weatherIcon);
  });
  cityInput.value = "";
});

convertBtn.addEventListener('click', () => {
if (convertBtn.textContent === "F °") {
  convertBtn.textContent = "C °"
  toCelsius()
}


else if (convertBtn.textContent === "C °") {
  convertBtn.textContent = "F °"
  toFahrenheit();
}

});