const urlBase = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = '04a8c1a02a53248bed662174104eddff';
const diffKelvin = 273.15;

document.getElementById('searchbutton').addEventListener('click', () => {
    const city = document.getElementById('cityinput').value;
    if (city) {
        fetchWeather(city)
    } else {
        alert('ingrese una ciudad valida')
    }
})

function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
        .then(data => data.json())
        .then(data => showWeatherData(data))
}


function showWeatherData(data) {
    const divResData = document.getElementById('resData');
    divResData.innerHTML = '';
    const cityName = data.name;
    const countryName = data.sys.country;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const cityInfo = document.createElement('h2');
    cityInfo.textContent = `${cityName}, ${countryName}`
    const tempInfo = document.createElement('p');
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp - diffKelvin)}°C`
    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = `La humedad es del: ${humidity}`
    const icoInfo = document.createElement('img');
    icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `La descripción meteorológica es: ${description}`
    divResData.appendChild(cityInfo);
    divResData.appendChild(tempInfo);
    divResData.appendChild(humidityInfo);
    divResData.appendChild(icoInfo);
    divResData.appendChild(descriptionInfo);
}