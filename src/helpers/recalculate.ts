import type { Temperatures, TemperatureScales } from './../types/temperature';
export const recalculate = (
  scaleFrom: TemperatureScales,
  temperature: number,
  temperatures: Temperatures,
): Temperatures => {
  if (temperatures[scaleFrom] === temperature) return temperatures;

  switch (scaleFrom) {
    case 'kelvin':
      temperatures = {
        kelvin: temperature,
        fahrenheit: (9 / 5) * (temperature - 273) + 32,
        celsius: temperature - 273.15,
      };
      break;
    case 'celsius':
      temperatures = {
        kelvin: temperature + 273.15,
        fahrenheit: (9 / 5) * temperature + 32,
        celsius: temperature,
      };
      break;

    case 'fahrenheit':
      temperatures = {
        kelvin: (5 / 9) * (temperature - 32) + 273.15,
        fahrenheit: temperature,
        celsius: (temperature - 32) / 1.8,
      };
      break;
  }
  return temperatures;
};
