import type { Formulas, TemperatureScales } from '../types/temperature.types';

import temperatureStores from '../stores/temperatures';
import { isTemperatureFormatValid } from './validation';

const formulas: Formulas = {
  kelvin: {
    celsius: (temp: number) => temp - 273.15,
    fahrenheit: (temp: number) => (9 / 5) * (temp - 273) + 32,
  },
  celsius: {
    kelvin: (temp: number) => temp + 273.15,
    fahrenheit: (temp: number) => (9 / 5) * temp + 32,
  },
  fahrenheit: {
    kelvin: (temp: number) => (5 / 9) * (temp - 32) + 273.15,
    celsius: (temp: number) => (temp - 32) / 1.8,
  },
};

export const recalculate = (
  scaleFrom: TemperatureScales,
  temperature: string,
): void => {
  let temperatureNr = parseFloat(temperature);
  Object.keys(temperatureStores).forEach(scale => {
    if (scale === scaleFrom) return;
    let newTemp: string | undefined;
    if (!isTemperatureFormatValid(temperature)) {
      newTemp = "Sorry Can't process that :(";
    } else {
      newTemp = formulas[scaleFrom][scale](temperatureNr).toFixed(2);
    }
    temperatureStores[scale].update(() => newTemp);
  });
};
