<script lang="ts">
  import { kelvin } from '../stores/temperatures';
  import { recalculate } from '../helpers/recalculate';

  import type { Example } from '../types/example.types';
  import ExampleCardImage from './exampleCardImage.svelte';

  export let name, type, temperatureK;
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
  {name}
</button>

<style>
  .exampleCard {
    width: 30%;
    background-color: var(--theme-colors-background-accent);
    border: 2px solid var(--theme-colors-background-accent);
    border-radius: var(--theme-borders-radius);
    padding: var(--theme-spacings-large);
    cursor: pointer;
    flex-grow: 1;
    box-sizing: border-box;
    color: var(--theme-colors-text);
    font-size: 16px;
  }
  .exampleCard:focus {
    outline: 2px solid var(--theme-colors-primary_dark);
  }
  .exampleCard.active {
    border: 2px solid var(--theme-colors-secondary);
  }
</style>
