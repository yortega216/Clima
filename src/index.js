function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}


function searchCity(city ){
    let apiKey = "0df88fc3bb43t3261o93a95825416cbf";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=imperial`;
    axios.get(apiURL).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
   
    searchCity(searchInput.value);
}

let searchForElement = document.querySelector("#search-form");
searchForElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
