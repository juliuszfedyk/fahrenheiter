import type { Example } from './../types/example.types';
import { examplesData } from './../data/examples';
import { writable } from 'svelte/store';

export const examples = writable<Example[]>(examplesData);

export const filterExamples = (searchTerm: string) => {
  const filtered =
    !searchTerm || searchTerm === ''
      ? examplesData
      : examplesData.filter(({ name }) =>
          name.toLowerCase().includes(searchTerm.toLowerCase()),
        );
  examples.update(() => filtered);
};
