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
  threeDayBtn,
  fiveDayBtn,
  sevenDayBtn,
  tenDayBtn,
} from "./dom.js";
import { fetchData, defaultFetchData } from "./weatherApi.js";
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
  threeDayDisplay,
  fiveDayDisplay,
  sevenDayDisplay,
  tenDayDisplay,
  returnThirdDayDate,
  returnFourthDayDate,
  returnFifthDayDate,
  returnFifthDayLow,
  returnFifthDayHigh,
  returnFifthDayConditions,
  returnFourthDayHigh,
  returnFourthDayConditions,
} from "./weatherData.js";

defaultFetchData().then(function (data) {
  returnLocation(data, locationName);
  returnCurrentTemp(data, currentTemperature);
  returnHigh(data, currentDayHigh);
  returnLow(data, currentDayLow);
  returnRealFeel(data, realFeel);
  returnCurrentDayConditions(data, currentDayConditions);
  returnNextDayHigh(data, nextDayHigh);
  returnNextDayLow(data, nextDayLow);
  returnNextDayConditions(data, nextDayConditions);
  returnThirdDayDate(data, thirdDayDate);
  returnThirdDayHigh(data, thirdDayHigh);
  returnThirdDayLow(data, thirdDayLow);
  returnThirdDayConditions(data, thirdDayConditions);
  returnFourthDayDate(data, fourthDayDate);
  returnFourthDayHigh(data, fourthDayHigh);
  returnFourthDayConditions(data, fourthDayConditions);
  returnFifthDayDate(data, fifthDayDate);
  returnFifthDayHigh(data, fifthDayHigh);
  returnFifthDayLow(data, fifthDayLow);
  returnFifthDayConditions(data, fifthDayConditions);
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
      returnThirdDayDate(data, thirdDayDate);
      returnThirdDayHigh(data, thirdDayHigh);
      returnThirdDayLow(data, thirdDayLow);
      returnThirdDayConditions(data, thirdDayConditions);
      returnFourthDayDate(data, fourthDayDate);
      returnFourthDayHigh(data, fourthDayHigh);
      returnFourthDayConditions(data, fourthDayConditions);
      returnFifthDayDate(data, fifthDayDate);
      returnFifthDayHigh(data, fifthDayHigh);
      returnFifthDayLow(data, fifthDayLow);
      returnFifthDayConditions(data, fifthDayConditions);
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
    returnThirdDayDate(data, thirdDayDate);
    returnThirdDayHigh(data, thirdDayHigh);
    returnThirdDayLow(data, thirdDayLow);
    returnThirdDayConditions(data, thirdDayConditions);
    returnFourthDayDate(data, fourthDayDate);
    returnFourthDayHigh(data, fourthDayHigh);
    returnFourthDayConditions(data, fourthDayConditions);
    returnFifthDayDate(data, fifthDayDate);
    returnFifthDayHigh(data, fifthDayHigh);
    returnFifthDayLow(data, fifthDayLow);
    returnFifthDayConditions(data, fifthDayConditions);
    returnWeatherIcon(data, weatherIcon);
  });
  cityInput.value = "";
});

convertBtn.addEventListener("click", () => {
  if (convertBtn.textContent === "F °") {
    convertBtn.textContent = "C °";
    toCelsius();
  } else if (convertBtn.textContent === "C °") {
    convertBtn.textContent = "F °";
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
