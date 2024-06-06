function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const temperature = parseFloat(temperatureInput);
    const scale = document.getElementById('scaleInput').value;

    if (isNaN(temperature)) {
        alert('Please enter a valid number');
        return;
    }
