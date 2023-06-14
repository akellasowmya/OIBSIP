function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");
    
    if (isNaN(temperature)) {
      resultElement.innerText = "Please enter a valid temperature.";
      return;
    }
    
    var celsius, fahrenheit, kelvin;
    
    if (unit === "celsius") {
      celsius = temperature;
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = celsius + 273.15;
    } else if (unit === "fahrenheit") {
      fahrenheit = temperature;
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    } else if (unit === "kelvin") {
      kelvin = temperature;
      celsius = kelvin - 273.15;
      fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    }
    
    var result = "Celsius: " + celsius.toFixed(2) + "°C<br>" +
                 "Fahrenheit: " + fahrenheit.toFixed(2) + "°F<br>" +
                 "Kelvin: " + kelvin.toFixed(2) + "K";
    
    resultElement.innerHTML = result;
  }
  