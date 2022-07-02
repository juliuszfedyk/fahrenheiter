import type { TemperatureScales } from '../types/temperature.types';
import { Writable, writable } from 'svelte/store';
import { minTemperatures } from '../helpers/validation';
export const kelvin = writable<string>(minTemperatures.kelvin);
export const celsius = writable<string>(minTemperatures.celsius);
export const fahrenheit = writable(minTemperatures.fahrenheit);

const temperatureStores: { [storName in TemperatureScales]: Writable<string> } =
  {
    kelvin,
    fahrenheit,
    celsius,
  };
export default temperatureStores;
