const converterTemperatura = (celsius, callback) => {
    return callback(celsius);
};

const celsiusParaFahrenheit = (celsius) => (celsius * 9/5) + 32;

const celsiusParaKelvin = (celsius) => celsius + 273.15;

const temperaturaCelsius = 25;

const temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, celsiusParaFahrenheit);
console.log(`Temperatura em Fahrenheit: ${temperaturaFahrenheit}`); 

const temperaturaKelvin = converterTemperatura(temperaturaCelsius, celsiusParaKelvin);
console.log(`Temperatura em Kelvin: ${temperaturaKelvin}`); 
