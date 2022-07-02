import type { TemperatureScales } from './../types/temperature';
import { Writable, writable } from 'svelte/store';
import { minTemperatures } from 'src/helpers/validation';
// note: the stores are separate to avoid updating field value when
// typing and cursor jumping to the end of value
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
