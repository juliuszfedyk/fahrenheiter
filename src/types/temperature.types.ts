export type TemperatureScales = 'kelvin' | 'celsius' | 'fahrenheit';

export type Temperatures = {
  [scale in TemperatureScales]: string;
};

export type RecalculateEventDispatcherProps = {
  recalculate: TemperatureInputChangeEventDetail;
};

export type TemperatureInputChangeEventDetail = {
  scaleFrom: TemperatureScales;
  temperature: string;
};
export type TemperatureInputChangeEvent =
  CustomEvent<TemperatureInputChangeEventDetail>;

export type Formula = (temp: number) => number;

export type Formulas = {
  [key in TemperatureScales]: { [key in TemperatureScales]?: Formula };
};
