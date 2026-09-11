import {
  locationName,
  date,
  tempMax,
  tempMin,
  realFeel,
  conditions,
  btn,
  cityInput,
} from "./dom.js";
import { fetchData } from "./weatherApi.js";
import {
  returnLocation,
  returnDate,
  returnHigh,
  returnLow,
  returnRealFeel,
  returnConditions,
} from "./weatherData.js";

fetchData().then(function (data) {
  returnLocation(data, locationName);
  returnDate(data, date);
  returnHigh(data, tempMax);
  returnLow(data, tempMin);
  returnRealFeel(data, realFeel);
  returnConditions(data, conditions);
});

cityInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    fetchData().then(function (data) {
      returnLocation(data, locationName);
      returnDate(data, date);
      returnHigh(data, tempMax);
      returnLow(data, tempMin);
      returnRealFeel(data, realFeel);
      returnConditions(data, conditions);
    });
    cityInput.value = "";
  }
});

btn.addEventListener("click", () => {
  fetchData().then(function (data) {
    returnLocation(data, locationName);
    returnDate(data, date);
    returnHigh(data, tempMax);
    returnLow(data, tempMin);
    returnRealFeel(data, realFeel);
    returnConditions(data, conditions);
  });
  cityInput.value = "";
});
