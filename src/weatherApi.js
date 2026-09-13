import { cityInput } from "./dom.js";

const baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export async function defaultFetchData() {
  const defaultURL = `${baseURL}Kansas City`;
  const apiKey = "R6QL2SBQFA4DLNWLV2NE347ZA";
  const response = await fetch(`${defaultURL}?key=${apiKey}`);
  const data = await response.json();
  return data;
}

export async function fetchData() {
  const param = cityInput.value;
  const apiKey = "R6QL2SBQFA4DLNWLV2NE347ZA";
  const response = await fetch(`${baseURL}${param}?key=${apiKey}`);
  const data = await response.json();
  return data;
}
