const apiKey = "59ae2cd48fad0ed5d9cd9f04f9d4bfdb";

function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const weatherDiv = document.getElementById("weatherResult");
      weatherDiv.innerHTML = `
        <h3>Weather in ${data.name}, ${data.sys.country}</h3>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>☁️ Condition: ${data.weather[0].description}</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
        <p>🌄 Humidity: ${data.main.humidity}%</p>
      `;
    })
    .catch((error) => {
      console.error(error);
      document.getElementById(
        "weatherResult"
      ).innerHTML = `<p style="color: red;">❌ ${error.message}</p>`;
    });
}
