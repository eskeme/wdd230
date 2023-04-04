const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#caption-desc");
const forecastDays = document.querySelector(".weather-card__forecast-days");

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&appid=34e197cd5ba229b3c1bfe4f44829a8a8";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=metric&appid=34e197cd5ba229b3c1bfe4f44829a8a8";

async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function displayWeather() {
  const [weatherData, forecastData] = await Promise.all([
    apiFetch(weatherUrl),
    apiFetch(forecastUrl),
  ]);
  displayCurrent(weatherData);
  displayForecast(forecastData);
}

function displayCurrent(weatherData) {
  currentTemp.innerHTML = `<strong>${Math.round(weatherData.main.temp)}&deg;C</strong>`;
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
    "alt",
    `This is an icon image of ${weatherData.weather[0].description}`
  );
}

function displayForecast(forecastData) {
  const forecastDaysHtml = forecastData.list
    .filter((data, index) => index % 8 === 0)
    .map((day) => {
      const dayOfWeek = new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "short" });
      const minTemp = Math.round(day.main.temp_min);
      const maxTemp = Math.round(day.main.temp_max);
      return `<div class="weather-card__forecast-day">
                <div>${dayOfWeek}</div>
                <div>${minTemp}&deg;C / ${maxTemp}&deg;C</div>
              </div>`;
    })
    .join("");
  forecastDays.innerHTML = forecastDaysHtml;
}

displayWeather();
