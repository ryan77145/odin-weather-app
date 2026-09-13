export function returnLocation(response, locationName) {
  const locationInfo = document.createElement("span");
  locationInfo.setAttribute("class", "locationInfo");
  locationInfo.textContent = response.address;
  locationName.appendChild(locationInfo);
}

export function returnCurrentTemp(response, currentTemperature) {
  const currentTempInfo = document.createElement("span");
  currentTempInfo.setAttribute("class", "currentTempInfo");
  currentTempInfo.textContent = response.days[0].temp;
  currentTemperature.appendChild(currentTempInfo);
}

export function returnHigh(response, currentDayHigh) {
  const currentDayTempMaxInfo = document.createElement("span");
  currentDayTempMaxInfo.setAttribute("class", "currentDayTempMaxInfo");
  currentDayTempMaxInfo.textContent = response.days[0].tempmax;
  currentDayHigh.appendChild(currentDayTempMaxInfo);
}

export function returnLow(response, currentDayLow) {
  const currentDayTempMinInfo = document.createElement("span");
  currentDayTempMinInfo.setAttribute("class", "currentDayTempMinInfo");
  currentDayTempMinInfo.textContent = response.days[0].tempmin;
  currentDayLow.appendChild(currentDayTempMinInfo);
}

export function returnRealFeel(response, realFeel) {
  const realFeelInfo = document.createElement("span");
  realFeelInfo.setAttribute("class", "realFeelInfo");
  realFeelInfo.textContent = response.days[0].feelslike;
  realFeel.appendChild(realFeelInfo);
}

export function returnCurrentDayConditions(response, currentDayConditions) {
  const conditionInfo = document.createElement("span");
  conditionInfo.setAttribute("class", "conditionInfo");
  conditionInfo.textContent = response.days[0].conditions;
  currentDayConditions.appendChild(conditionInfo);
}

export function returnNextDayHigh(response, nextDayHigh) {
  const nextDayHighInfo = document.createElement("span");
  nextDayHighInfo.setAttribute("class", "nextDayHighInfo");
  nextDayHighInfo.textContent = response.days[1].tempmax;
  nextDayHigh.appendChild(nextDayHighInfo);
}

export function returnNextDayLow(response, nextDayLow) {
  const nextDayLowInfo = document.createElement("span");
  nextDayLowInfo.setAttribute("class", "nextDayLowInfo");
  nextDayLowInfo.textContent = response.days[1].tempmin;
  nextDayLow.appendChild(nextDayLowInfo);
}

export function returnNextDayConditions(response, nextDayConditions) {
  const nextDayConditionInfo = document.createElement("span");
  nextDayConditionInfo.setAttribute("class", "nextDayConditionInfo");
  nextDayConditionInfo.textContent = response.days[1].conditions;
  nextDayConditions.appendChild(nextDayConditionInfo);
}

export function returnThirdDayDate(response, thirdDayDate) {
  const thirdDayDateInfo = document.createElement("span");
  thirdDayDateInfo.setAttribute("class", "thirdDayDateInfo");
  thirdDayDateInfo.textContent = response.days[2].datetime;
  thirdDayDate.appendChild(thirdDayDateInfo);
}

export function returnThirdDayHigh(response, thirdDayHigh) {
  const thirdDayHighInfo = document.createElement("span");
  thirdDayHighInfo.setAttribute("class", "thirdDayHighInfo");
  thirdDayHighInfo.textContent = response.days[2].tempmax;
  thirdDayHigh.appendChild(thirdDayHighInfo);
}

export function returnThirdDayLow(response, thirdDayLow) {
  const thirdDayLowInfo = document.createElement("span");
  thirdDayLowInfo.setAttribute("class", "thirdDayLowInfo");
  thirdDayLowInfo.textContent = response.days[2].tempmin;
  thirdDayLow.appendChild(thirdDayLowInfo);
}

export function returnThirdDayConditions(response, thirdDayConditions) {
  const thirdDayConditionInfo = document.createElement("span");
  thirdDayConditionInfo.setAttribute("class", "thirdDayConditionInfo");
  thirdDayConditionInfo.textContent = response.days[2].conditions;
  thirdDayConditions.appendChild(thirdDayConditionInfo);
}

export function returnFourthDayDate(response, fourthDayDate) {
  const fourthDayDateInfo = document.createElement("span");
  fourthDayDateInfo.setAttribute("class", "fourthDayDateInfo");
  fourthDayDateInfo.textContent = response.days[3].datetime;
  fourthDayDate.appendChild(fourthDayDateInfo);
}

export function returnFourthDayHigh(response, fourthDayHigh) {
  const fourthDayHighInfo = document.createElement("span");
  fourthDayHighInfo.setAttribute("class", "fourthDayHighInfo");
  fourthDayHighInfo.textContent = response.days[3].tempmax;
  fourthDayHigh.appendChild(fourthDayHighInfo);
}

export function returnFourthDayLow(response, fourthDayLow) {
  const fourthDayLowInfo = document.createElement("span");
  fourthDayLowInfo.setAttribute("class", "fourthDayLowInfo");
  fourthDayLowInfo.textContent = response.days[3].tempmin;
  fourthDayLow.appendChild(fourthDayLowInfo);
}

export function returnFourthDayConditions(response, fourthDayConditions) {
  const fourthDayConditionsInfo = document.createElement("span");
  fourthDayConditionsInfo.setAttribute("class", "fourthDayConditionsInfo");
  fourthDayConditionsInfo.textContent = response.days[3].conditions;
  fourthDayConditions.appendChild(fourthDayConditionsInfo);
}

export function returnFifthDayDate(response, fifthDayDate) {
  const fifthDayDateInfo = document.createElement("span");
  fifthDayDateInfo.setAttribute("class", "fifthDayDateInfo");
  fifthDayDateInfo.textContent = response.days[4].datetime;
  fifthDayDate.appendChild(fifthDayDateInfo);
}

export function returnFifthDayHigh(response, fifthDayHigh) {
  const fifthDayHighInfo = document.createElement("span");
  fifthDayHighInfo.setAttribute("class", "fifthDayHighInfo");
  fifthDayHighInfo.textContent = response.days[4].tempmax;
  fifthDayHigh.appendChild(fifthDayHighInfo);
}

export function returnFifthDayLow(response, fifthDayLow) {
  const fifthDayLowInfo = document.createElement("span");
  fifthDayLowInfo.setAttribute("class", "fifthDayLowInfo");
  fifthDayLowInfo.textContent = response.days[4].tempmin;
  fifthDayLow.appendChild(fifthDayLowInfo);
}

export function returnFifthDayConditions(response, fifthDayConditions) {
  const fifthDayConditionsInfo = document.createElement('span')
  fifthDayConditionsInfo.setAttribute('class', "fifthDayConditionsInfo")
  fifthDayConditionsInfo.textContent = response.days[4].conditions
  fifthDayConditions.appendChild(fifthDayConditionsInfo);
}

export function returnSixthDayHigh(response, sixthDayHigh) {}

export function returnSixthDayLow(response, sixthDayLow) {}

export function returnSixthDayConditions(response, sixthDayConditions) {}

export function returnSeventhDayHigh(response, seventhDayHigh) {}

export function returnSeventhDayLow(response, seventhDayLow) {}

export function returnSeventhDayConditions(response, seventhDayConditions) {}

export function returnEighthDayHigh(response, eighthDayHigh) {}

export function returnEighthDayLow(response, eighthDayLow) {}

export function returnEighthDayConditions(response, eighthDayConditions) {}

export function returnNinthDayHigh(response, ninthDayHigh) {}

export function returnNinthDayLow(response, ninthDayLow) {}

export function returnNinthDayConditions(response, ninthDayConditions) {}

export function returnTenthDayHigh(response, tenthDayHigh) {}

export function returnTenthDayLow(response, tenthDayLow) {}

export function returnTenthDayConditions(response, tenthDayConditions) {}

export function returnWeatherIcon(response, weatherIcon) {
  const partlyCloudy = "assets/partly-cloudy.png";
  const cloudy = "assets/cloudy.png";
  const sunny = "assets/sunny.png";
  const rainy = "assets/rainy.png";
  const storming = "assets/storming.png";
  const snowy = "assets/snowing.png";

  for (let i = 0; i < 10; i++) {
    const conditions = response.days[i].conditions;
    const checkConditions = conditions.split(", ");
    if (checkConditions[0] === "Partially cloudy") {
      weatherIcon[i].src = partlyCloudy;
    }
    if (checkConditions[0] === "Overcast") {
      weatherIcon[i].src = cloudy;
    }
    if (checkConditions[0] === "Rain") {
      weatherIcon[i].src = rainy;
    }
    if (checkConditions[0] === "Clear") {
      weatherIcon[i].src = sunny;
    }
    if (checkConditions[0] === "Snow") {
      weatherIcon[i].src = snowy;
    }
    if (checkConditions[0] === "Storms") {
      weatherIcon[i].src = storming;
    }
  }
}

export function toFahrenheit() {
  const tempElements = document.querySelectorAll(
    ".currentTempInfo, .currentDayTempMaxInfo, .currentDayTempMinInfo, .realFeelInfo, .nextDayHighInfo, .nextDayLowInfo, .thirdDayHighInfo, .thirdDayLowInfo, .fourthDayHighInfo, .fourthDayLowInfo, .fifthDayHighInfo, .fifthDayLowInfo, .sixthDayHighInfo, .sixthDayLowInfo, .seventhDayHighInfo, .seventhDayLowInfo, .eighthDayHighInfo, .eighthDayLowInfo, .ninthDayHighInfo, .ninthDayLowInfo, .tenthDayHighInfo, .tenthDayLowInfo",
  );
  tempElements.forEach(function (el) {
    const tempC = parseFloat(el.textContent);
    el.textContent = ((tempC * 9) / 5 + 32).toFixed(1);
  });
}

export function toCelsius() {
  const tempElements = document.querySelectorAll(
    ".currentTempInfo, .currentDayTempMaxInfo, .currentDayTempMinInfo, .realFeelInfo, .nextDayHighInfo, .nextDayLowInfo, .thirdDayHighInfo, .thirdDayLowInfo, .fourthDayHighInfo, .fourthDayLowInfo, .fifthDayHighInfo, .fifthDayLowInfo, .sixthDayHighInfo, .sixthDayLowInfo, .seventhDayHighInfo, .seventhDayLowInfo, .eighthDayHighInfo, .eighthDayLowInfo, .ninthDayHighInfo, .ninthDayLowInfo, .tenthDayHighInfo, .tenthDayLowInfo",
  );

  tempElements.forEach(function (el) {
    const tempF = parseFloat(el.textContent);
    el.textContent = (((tempF - 32) * 5) / 9).toFixed(1);
  });
}

export function threeDayDisplay() {
  const daysFourThroughTen = document.querySelectorAll(
    ".dayFourWeather, .dayFiveWeather, .daySixWeather, .daySevenWeather, .dayEightWeather, .dayNineWeather, .dayTenWeather",
  );

  const otherDays = document.querySelectorAll(
    ".todaysWeather, .tomorrowsWeather, .dayThreeWeather",
  );

  for (let e of daysFourThroughTen) {
    e.classList.add("hidden");
  }

  for (let e of otherDays) {
    e.classList.remove("hidden");
  }
}

export function fiveDayDisplay() {
  const daysSixThroughTen = document.querySelectorAll(
    ".daySixWeather, .daySevenWeather, .dayEightWeather, .dayNineWeather, .dayTenWeather",
  );
  const otherDays = document.querySelectorAll(
    ".todaysWeather, .tomorrowsWeather, .dayThreeWeather, .dayFourWeather, .dayFiveWeather",
  );
  for (let e of daysSixThroughTen) {
    e.classList.add("hidden");
  }
  for (let e of otherDays) {
    e.classList.remove("hidden");
  }
}

export function sevenDayDisplay() {
  const daysEightThroughTen = document.querySelectorAll(
    ".dayEightWeather, .dayNineWeather, .dayTenWeather",
  );

  const otherDays = document.querySelectorAll(
    ".todaysWeather, .tomorrowsWeather, .dayThreeWeather, .dayFourWeather, .dayFiveWeather, .daySixWeather, .daySevenWeather",
  );

  for (let e of daysEightThroughTen) {
    e.classList.add("hidden");
  }

  for (let e of otherDays) {
    e.classList.remove("hidden");
  }
}

export function tenDayDisplay() {
  const allDays = document.querySelectorAll(
    ".todaysWeather, .tomorrowsWeather, .dayThreeWeather, .dayFourWeather, .dayFiveWeather, .daySixWeather, .daySevenWeather, .dayEightWeather, .dayNineWeather, .dayTenWeather",
  );
  for (let e of allDays) {
    e.classList.remove("active");
  }
}
