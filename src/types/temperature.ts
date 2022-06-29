export type TemperatureScales = 'kelvin' | 'celsius' | 'fahrenheit';

export type Temperatures = {
  [scale in TemperatureScales]: number;
};

export type RecalculateEventDispatcherProps = {
  recalculate: TemperatureInputChangeEventDetail;
};

export type TemperatureInputChangeEventDetail = {
  scaleFrom: TemperatureScales;
  temperature: number;
};
export type TemperatureInputChangeEvent =
  CustomEvent<TemperatureInputChangeEventDetail>;
