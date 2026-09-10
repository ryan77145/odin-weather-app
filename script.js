const container = document.querySelector(".container");
const cityInput = document.querySelector(".cityInput");
const btn = document.querySelector(".getWeatherBtn");
const weatherData = document.querySelector(".weatherData");
const city = "Chicago";

const locationName = document.createElement("p");
locationName.setAttribute("class", "location");
locationName.textContent = "Location: ";
weatherData.appendChild(locationName);

const date = document.createElement('p');
date.setAttribute('class', 'date');
date.textContent = "Date: "
weatherData.appendChild(date);

const baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

//const param = cityInput.value;

const apiKey = "R6QL2SBQFA4DLNWLV2NE347ZA";

/*fetch(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Chicago/?key=" +
    apiKey,
).then(function (response) {
  console.log(response.json());
});

/* btn.addEventListener("click", () => {
  async function fetchData() {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=FlhBMiZEHs2UdmfUzRfcBdIXds7ZJpWX",
    );
    response
      .json()
      .then(function (response) {
        img.src = response.data.images.original.url;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  fetchData();
}); */
