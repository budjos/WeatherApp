async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "77d7f2fa656e4d3ea2c115714252105"; // Zamijeni s pravim API ključem ako želiš
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
  const data = await response.json();
  if (data.error) {
    document.getElementById("weatherResult").innerHTML = "City not found.";
    return;
  }
  document.getElementById("weatherResult").innerHTML = `
    <h2>${data.location.name}, ${data.location.country}</h2>
    <p>${data.current.temp_c}&deg;C, ${data.current.condition.text}</p>
    <img src="${data.current.condition.icon}" alt="weather icon">
  `;
}
