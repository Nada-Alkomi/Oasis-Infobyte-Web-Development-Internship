

const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const celsiusResult = document.getElementById("celsius");
const fahrenheitResult = document.getElementById("fahrenheit");
const kelvinResult = document.getElementById("kelvin");
const errorMessage = document.getElementById("error");


convertBtn.addEventListener("click", function () {

    const value = temperatureInput.value;
    const unit = unitSelect.value;

    
    if (value.trim() === "") {
        showError("Please enter a temperature value.");
        return;
    }

    const temperature = Number(value);

    
    if (!Number.isFinite(temperature)) {
        showError("Please enter a valid number.");
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "C") {
        celsius = temperature;
    } 
    else if (unit === "F") {
        celsius = (temperature - 32) * 5 / 9;
    } 
    else {
        celsius = temperature - 273.15;
    }

    if (celsius < -273.15) {
        showError("Temperature cannot be below absolute zero!");
        return;
    }

   
    fahrenheit = (celsius * 9 / 5) + 32;
    kelvin = celsius + 273.15;

   
    errorMessage.textContent = "";

    celsiusResult.textContent = celsius.toFixed(2) + " °C";
    fahrenheitResult.textContent = fahrenheit.toFixed(2) + " °F";
    kelvinResult.textContent = kelvin.toFixed(2) + " K";
});


function showError(message) {
    errorMessage.textContent = message;

    celsiusResult.textContent = "-- °C";
    fahrenheitResult.textContent = "-- °F";
    kelvinResult.textContent = "-- K";
}