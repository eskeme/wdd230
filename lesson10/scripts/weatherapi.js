// JavaScript
const weatherInfo = document.getElementById('weather-info');

const cities = ['Fairbanks', 'Anchorage', 'Juneau'];
const apiKey = '34e197cd5ba229b3c1bfe4f44829a8a8';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function fetchWeatherData(city) {
  const url = `${baseUrl}?q=${city}&units=imperial&appid=${apiKey}`;
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

async function displayWeatherInfo() {
  for (const city of cities) {
    const weatherData = await fetchWeatherData(city);
    const currentTemp = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    const weatherCard = `
      <div class="weather-card">
        <h2>${city}</h2>
        <p>The current temperature in ${weatherData.name} is ${currentTemp} &deg;F</p>
        <figure>
          <img src="${iconsrc}" alt="icon of ${desc}" />
          <figcaption>${desc}</figcaption>
        </figure>
      </div>
    `;
    weatherInfo.insertAdjacentHTML('beforeend', weatherCard);
  }
}
displayWeatherInfo();
