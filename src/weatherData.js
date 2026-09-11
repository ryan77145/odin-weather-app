export function returnLocation(response, locationName) {
  const locationInfo = document.createElement("span");
  locationInfo.setAttribute("class", "locationInfo");
  locationInfo.textContent = response.address;
  locationName.appendChild(locationInfo);
}

export function returnDate(response, date) {
  const dateInfo = document.createElement("span");
  dateInfo.setAttribute("class", "dateInfo");
  dateInfo.textContent = response.days[0].datetime;
  date.appendChild(dateInfo);
}

export function returnHigh(response, tempMax) {
  const tempMaxInfo = document.createElement("span");
  tempMaxInfo.setAttribute("class", "tempMaxInfo");
  tempMaxInfo.textContent = response.days[0].tempmax;
  tempMax.appendChild(tempMaxInfo);
}

export function returnLow(response, tempMin) {
  const tempMinInfo = document.createElement("span");
  tempMinInfo.setAttribute("class", "tempMinInfo");
  tempMinInfo.textContent = response.days[0].tempmin;
  tempMin.appendChild(tempMinInfo);
}

export function returnRealFeel(response, realFeel) {
  const realFeelInfo = document.createElement("span");
  realFeelInfo.setAttribute("class", "realFeelInfo");
  realFeelInfo.textContent = response.days[0].feelslike;
  realFeel.appendChild(realFeelInfo);
}

export function returnConditions(response, conditions) {
  const conditionInfo = document.createElement("span");
  conditionInfo.setAttribute("class", "conditionInfo");
  conditionInfo.textContent = response.days[0].conditions;
  conditions.appendChild(conditionInfo);
}