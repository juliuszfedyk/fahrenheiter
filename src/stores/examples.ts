import type { Example } from './../types/example.types';
import { examplesData } from './../data/examples';
import { writable } from 'svelte/store';

const compareExampleName = (
  { name: namePrev }: Example,
  { name: nameNext }: Example,
) => namePrev.localeCompare(nameNext);
const exampleDataSorted = examplesData.sort(compareExampleName);

export const examples = writable<Example[]>(exampleDataSorted);

export const filterExamples = (searchTerm: string) => {
  const filtered =
    !searchTerm || searchTerm === ''
      ? exampleDataSorted.sort(compareExampleName)
      : exampleDataSorted.filter(({ name }) =>
          name.toLowerCase().includes(searchTerm.toLowerCase()),
        );
  examples.update(() => filtered);
};
