export type ExampleTypes = 'boiling-point' | 'melting-point' | 'star';

export type Example = {
  name: string;
  type: ExampleTypes;
  temperatureK: string;
};
