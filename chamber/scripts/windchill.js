const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Davao%20City&units=metric&appid=34e197cd5ba229b3c1bfe4f44829a8a8';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;C</strong>`;
  const description = weatherData.weather[0].description
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  captionDesc.textContent = description;
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
  );
  weatherIcon.setAttribute(
    "alt",`this is an icon image of ${weatherData.weather[0].description}`);

  const windSpeed = weatherData.wind.speed;
  const windSpeedKph = (windSpeed * 1.60934).toFixed(1);
  const windInfo = `${windSpeedKph} km/h`;
  const windSpeedEl = document.querySelector("#wind-speed");
  windSpeedEl.textContent = windInfo;

  const windChill = calculateWindChill(weatherData.main.temp, windSpeedKph);
  const windChillEl = document.querySelector("#windChill");
  windChillEl.textContent = windChill === "N/A" ? windChill : `${windChill.toFixed(0)}&deg;C`;
}

function calculateWindChill(tempCelsius, windSpeedKph) {
  if (tempCelsius > 10 || windSpeedKph < 4.8) {
    return "N/A";
  }
  const windChillCelsius = 13.12 + 0.6215 * tempCelsius - 11.37 * Math.pow(windSpeedKph, 0.16) + 0.3965 * tempCelsius * Math.pow(windSpeedKph, 0.16);
  return windChillCelsius;
}
