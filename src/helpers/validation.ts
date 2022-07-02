import type { Temperatures } from '../types/temperature.types';
export const temperatureRx = '/^(-?[0-9]*(.[0-9]{0,1})?$/';
export const isTemperatureFormatValid = (temp: string) =>
  temp.match(temperatureRx);

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
