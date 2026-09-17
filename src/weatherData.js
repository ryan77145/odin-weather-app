export function returnWeather(
  response,
  dates,
  tempMins,
  tempMaxes,
  conditions,
) {
  for (let i = 0; i < 8; i++) {
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const weatherDate =
      dayNames[new Date(response.days[i + 2].datetime).getUTCDay()];
    const dateSpan = document.createElement("span");
    dateSpan.setAttribute("class", "dateSpan");
    dateSpan.textContent = "" + weatherDate;
    dates[i].innerHTML = "";
    dates[i].appendChild(dateSpan);
  }

  for (let i = 0; i < 10; i++) {
    const weatherMin = response.days[i].tempmin;
    const weatherMax = response.days[i].tempmax;
    const weatherCon = response.days[i].conditions;

    const tempMinSpan = document.createElement("span");
    const tempMaxSpan = document.createElement("span");
    const conditionSpan = document.createElement("span");

    tempMinSpan.setAttribute("class", "tempMinSpan");
    tempMaxSpan.setAttribute("class", "tempMaxSpan");
    conditionSpan.setAttribute("class", "conditionSpan");

    tempMinSpan.textContent = "" + weatherMin;
    tempMaxSpan.textContent = "" + weatherMax;
    conditionSpan.textContent = "" + weatherCon;

    tempMaxes[i].innerHTML = "High: ";
    tempMins[i].innerHTML = "Low: ";
    conditions[i].innerHTML = "Conditions: ";

    tempMins[i].appendChild(tempMinSpan);
    tempMaxes[i].appendChild(tempMaxSpan);
    conditions[i].appendChild(conditionSpan);
  }
}

export function returnWeatherIcon(response, weatherIcon) {
  const partlyCloudy = "assets/partly-cloudy.png";
  const cloudy = "assets/cloudy.png";
  const sunny = "assets/sunny.png";
  const rainy = "assets/rainy.png";
  const storming = "assets/storming.png";
  const snowy = "assets/snowing.png";
  const sunnyBG = "assets/sunnyBG.jpg";
  const cloudyBG = "assets/cloudyBG.jpg";

  for (let i = 0; i < 10; i++) {
    const conditions = response.days[i].conditions;
    const checkConditions = conditions.split(", ");
    const todaysWeather = document.querySelector(".todaysWeather");
    if (checkConditions[0] === "Partially cloudy") {
      weatherIcon[i].src = partlyCloudy;
      todaysWeather.style.backgroundImage = cloudyBG;
    }
    if (checkConditions[0] === "Overcast") {
      weatherIcon[i].src = cloudy;
      todaysWeather.style.backgroundImage = cloudyBG;
    }
    if (checkConditions[0] === "Rain") {
      weatherIcon[i].src = rainy;
    }
    if (checkConditions[0] === "Clear") {
      weatherIcon[i].src = sunny;
      todaysWeather.style.backgroundImage = sunnyBG;
    }
    if (checkConditions[0] === "Snow") {
      weatherIcon[i].src = snowy;
    }
    if (checkConditions[0] === "Storms") {
      weatherIcon[i].src = storming;
    }
  }
  for (let i = 0; i < 8; i++) {
    const conditions = response.days[i].conditions;
    const checkConditions = conditions.split(", ");
    const dailyWeather = document.querySelectorAll(".dailyWeather");
    if (checkConditions[0] === "Partially cloudy") {
      dailyWeather[i].style.backgroundImage = cloudyBG;
    }
    if (checkConditions[0] === "Overcast") {
      dailyWeather[i].style.backgroundImage = cloudyBG;
    }
    if (checkConditions[0] === "Clear") {
      dailyWeather[i].style.backgroundImage = sunnyBG;
    }
  }
}

export function returnLocation(response, locationName) {
  locationName.innerHTML = "Location: ";
  const locationInfo = document.createElement("span");
  locationInfo.setAttribute("class", "locationInfo");
  locationInfo.textContent = "    " + response.address;
  locationName.appendChild(locationInfo);
}

export function returnCurrentTemp(response, currentTemperature) {
  currentTemperature.innerHTML = "Temperature: ";
  const currentTempInfo = document.createElement("span");
  currentTempInfo.setAttribute("class", "currentTempInfo");
  currentTempInfo.textContent = "  " + response.days[0].temp;
  currentTemperature.appendChild(currentTempInfo);
}

export function returnRealFeel(response, realFeel) {
  realFeel.innerHTML = "Feels Like: "
  const realFeelInfo = document.createElement("span");
  realFeelInfo.setAttribute("class", "realFeelInfo");
  realFeelInfo.textContent = "    " + response.days[0].feelslike;
  realFeel.appendChild(realFeelInfo);
}

export function toFahrenheit() {
  const els = document.querySelectorAll(
    ".currentTempInfo, .realFeelInfo, .tempMaxSpan, .tempMinSpan"
  );
  for (const el of els) {
    if (el.dataset.f === undefined) {
      el.dataset.f = parseFloat(el.textContent);
    }
    el.textContent = ((parseFloat(el.dataset.f) * 9) / 5 + 32).toFixed(1);
  }
}

export function toCelsius() {
  const els = document.querySelectorAll(
    ".currentTempInfo, .realFeelInfo, .tempMaxSpan, .tempMinSpan"
  );
  for (const el of els) {
    if (el.dataset.f === undefined) {
      el.dataset.f = parseFloat(el.textContent);
    }
    el.textContent = (((parseFloat(el.dataset.f) - 32) * 5) / 9).toFixed(1);
  }
}

export function threeDayDisplay() {
  const days = document.querySelectorAll(".dailyWeather");
  for (let i = 0; i < days.length; i++) {
    if (i < 2) {
      days[i].classList.remove("hidden");
    }
    if (i >= 2) {
      days[i].classList.add("hidden");
    }
  }
}

export function fiveDayDisplay() {
  const days = document.querySelectorAll(".dailyWeather");
  for (let i = 0; i < days.length; i++) {
    if (i < 4) {
      days[i].classList.remove("hidden");
    }
    if (i >= 4) {
      days[i].classList.add("hidden");
    }
  }
}

export function sevenDayDisplay() {
  const days = document.querySelectorAll(".dailyWeather");
  for (let i = 0; i < days.length; i++) {
    if (i < 6) {
      days[i].classList.remove("hidden");
    }
    if (i >= 6) {
      days[i].classList.add("hidden");
    }
  }
}

export function tenDayDisplay() {
  const days = document.querySelectorAll(".dailyWeather");
  for (let i = 0; i < days.length; i++) {
    if (i <= 9) days[i].classList.remove("hidden");
  }
}
