import { onDestroy } from 'svelte';

import type { Formulas, TemperatureScales } from './../types/temperature';
const temperatures = {
  kelvin: '0',
  celsius: '0',
  fahrenheit: '0',
};
import temperatureStores from '../stores/temperatures';
const unsubscribes = Object.keys(temperatureStores).map(store =>
  temperatureStores[store].subscribe(temp => (temperatures[store] = temp)),
);
// const unsubscribe = () => unsubscribes.forEach(unsubscribe => unsubscribe());
// onDestroy(unsubscribe);

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
  Object.keys(temperatures).forEach(scale => {
    if (scale === scaleFrom) return;
    const temperatureNr = parseFloat(temperature);
    const newTemp = formulas[scaleFrom][scale](temperatureNr).toFixed(2);
    console.log(scale, typeof newTemp);
    temperatureStores[scale].update(() => newTemp);
  });
};
