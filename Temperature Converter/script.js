function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
         if (isNaN(inputValue)) {
                document.getElementById('result').innerText = "Please enter a valid number.";
                return;
            }
