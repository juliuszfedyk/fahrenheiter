import type { Temperatures } from '../types/temperature.types';
export const temperatureRxStr = '^-?[0-9]*(.[0-9]*)?([Ee][+-][0-9]*)?$';
export const temperatureRx = new RegExp(temperatureRxStr);
export const isTemperatureFormatValid = (temp: string): boolean =>
  !!temp.match(temperatureRx)?.[0];

export const itsTooCold = (scale: string, temp: string) =>
  parseFloat(minTemperatures[scale]) > parseFloat(temp);

export const isNumericPeriodOrMinus = (keyCode: string) =>
  keyCode.includes('Digit') || keyCode === 'Period' || keyCode === 'Minus';

export const minTemperatures: Temperatures = {
  kelvin: '0.00',
  celsius: '-273.15',
  fahrenheit: '-459.67',
};

export const temperatureAlreadyHasTwoDigits = (value: string) => {
  const split = value.split('.');
  return split.length > 1 && split.pop().length >= 2;
};
