function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const temperature = parseFloat(temperatureInput);
    const scale = document.getElementById('scaleInput').value;

    if (isNaN(temperature)) {
        alert('Please enter a valid number');
        return;
    }
    let result;

    switch (scale) {
        case 'C':
            result = `${temperature.toFixed(2)} °C is equal to ${(temperature * 9 / 5 + 32).toFixed(2)} °F and ${(temperature + 273.15).toFixed(2)} K`;
            break;
        case 'F':
            result = `${temperature.toFixed(2)} °F is equal to ${((temperature - 32) * 5 / 9).toFixed(2)} °C and ${(((temperature - 32) * 5 / 9) + 273.15).toFixed(2)} K`;
            break;
        case 'K':
            result = `${temperature.toFixed(2)} K is equal to ${(temperature - 273.15).toFixed(2)} °C and ${((temperature - 273.15) * 9 / 5 + 32).toFixed(2)} °F`;
            break;
    }

    document.getElementById('resultOutput').value = result;
}
