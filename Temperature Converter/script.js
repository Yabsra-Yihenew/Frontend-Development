function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
         if (isNaN(inputValue)) {
                document.getElementById('result').innerText = "Please enter a valid number.";
                return;
            }
    
        let tempInCelsius;

        // Convert input temperature to Celsius
        if (inputUnit === 'Celsius') {
            tempInCelsius = inputValue;
        } else if (inputUnit === 'Fahrenheit') {
            tempInCelsius = (inputValue - 32) * 5 / 9;
        } else if (inputUnit === 'Kelvin') {
            tempInCelsius = inputValue - 273.15;
        }
    
        let convertedTemp;
        
            // Convert Celsius temperature to the desired output unit
            if (outputUnit === 'Celsius') {
                convertedTemp = tempInCelsius;
            } else if (outputUnit === 'Fahrenheit') {
                convertedTemp = (tempInCelsius * 9 / 5) + 32;
            } else if (outputUnit === 'Kelvin') {
                convertedTemp = tempInCelsius + 273.15;
            }
        
            document.getElementById('result').innerText = `Converted Temperature: ${convertedTemp.toFixed(2)} ${outputUnit}`;
}
