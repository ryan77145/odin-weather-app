const container = document.querySelector(".container");
export const cityInput = document.querySelector(".cityInput");
export const btn = document.querySelector(".getWeatherBtn");
const weatherData = document.querySelector(".weatherData");

export const locationName = document.createElement("p");
locationName.setAttribute("class", "location");
locationName.textContent = "Location: ";
weatherData.appendChild(locationName);

export const date = document.createElement("p");
date.setAttribute("class", "date");
date.textContent = "Date: ";
weatherData.appendChild(date);

export const tempMax = document.createElement("p");
tempMax.setAttribute("class", "tempMax");
tempMax.textContent = "High: ";
weatherData.appendChild(tempMax);

export const tempMin = document.createElement("p");
tempMin.setAttribute("class", "tempMin");
tempMin.textContent = "Low: ";
weatherData.appendChild(tempMin);

export const realFeel = document.createElement("p");
realFeel.setAttribute("class", "realFeel");
realFeel.textContent = "Feels Like: ";
weatherData.appendChild(realFeel);

export const conditions = document.createElement("p");
conditions.setAttribute("class", "conditions");
conditions.textContent = "Conditions Expected: ";
weatherData.appendChild(conditions);

const weatherIcon = document.createElement("img");
weatherIcon.setAttribute("class", "weatherIcon");