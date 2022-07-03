<script lang="ts">
  import { kelvin } from '../stores/temperatures';
  import { recalculate } from '../helpers/recalculate';

  import ExampleCardImage from './exampleCardImage.svelte';
  import type { ExampleTypes } from 'src/types/example.types';

  export let name: string, type: ExampleTypes, temperatureK: string;
  $: title =
    type === 'boiling-point'
      ? 'Boiling Point of ' + name
      : 'Melting point of ' + name;
</script>

<button
  class="exampleCard"
  class:active={$kelvin === temperatureK}
  on:click={() => recalculate('kelvin', temperatureK)}
  {title}
>
  <ExampleCardImage {type} />
  <div class="name">
    {name}
  </div>
</button>

<style>
  .exampleCard {
    width: 45%;
    background-color: var(--theme-colors-background-accent);
    border: 2px solid var(--theme-colors-background-accent);
    border-radius: var(--theme-borders-radius);
    padding: var(--theme-spacings-large);
    cursor: pointer;
    flex-grow: 1;
    box-sizing: border-box;
    color: var(--theme-colors-text);
    /* font-size: var(--theme-fonts-sizes-small); */
    font-size: var(--theme-fonts-sizes-medium);
    transition: all 0.5s;
  }

  .name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .exampleCard:focus {
    outline: 2px solid var(--theme-colors-primary_dark);
  }
  .exampleCard.active {
    border: 2px solid var(--theme-colors-secondary);
    background-color: var(--theme-colors-background-dark);
    outline: none;
  }

  @media (min-width: 400px) {
    .exampleCard {
      width: 30%;
      font-size: var(--theme-fonts-sizes-small);
    }
  }

  @media (min-width: 600px) {
    .exampleCard {
      font-size: var(--theme-fonts-sizes-medium);
    }
  }
</style>
