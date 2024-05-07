function findMinMax() {
    // Get the input string of numbers
    var inputNumbers = document.getElementById("numberInput").value;
  
    // Convert the input string into an array of numbers
    var numbersArray = inputNumbers.split(",").map(Number);
  
    // Find the minimum and maximum numbers
    var minNumber = Math.min(...numbersArray);
    var maxNumber = Math.max(...numbersArray);
  
    // Display the result
    document.getElementById("result").textContent = "Minimum: " + minNumber + ", Maximum: " + maxNumber;
  }
  
