document.getElementById("submit-btn").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    const apiKey = '7295f46f6f8c45a780782555242510'; 
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
                displayForecast(data.forecast.forecastday);
            })
})

function displayForecast(forecast) {
    const weatherDisplay = document.getElementById("weather-display");
    weatherDisplay.innerHTML = ''; // Clear previous results

    forecast.forEach(day => {
        const date = day.date;
        const condition = day.day.condition.text;
        const maxTemp = day.day.maxtemp_c;
        const minTemp = day.day.mintemp_c;
        const icon = day.day.condition.icon;

        const weatherCard = `
            <div class="weather-card">
                <h3>${date}</h3>
                <p>Condition: ${condition}</p>
                <p>Max Temp: ${maxTemp}°C</p>
                <p>Min Temp: ${minTemp}°C</p>
                <img src="https:${icon}" alt="Weather icon" />
            </div>
        `;

        weatherDisplay.innerHTML += weatherCard;
    });
}