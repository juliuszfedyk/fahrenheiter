<script lang="ts">
  import TemperatureInputs from './components/temperatureInputs.svelte';
  import type {} from './types/temperature.types';
  import { kelvin, celsius, fahrenheit } from './stores/temperatures';
  import { ThemeWrapper, ThemeToggle } from 'svelte-themer';
  import { themes } from './themes/themes';
</script>

<main>
  <ThemeWrapper key="fahrenheiter__theme" {themes}>
    <div class="togglePlacer">
      <ThemeToggle />
    </div>
    <h1>Fahrenheiter</h1>
    <TemperatureInputs />
    <div>
      {$kelvin}&deg;K | {$celsius}&deg;C | {$fahrenheit}&deg;F
    </div>
  </ThemeWrapper>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nixie+One&family=PT+Sans+Narrow&display=swap');

  :global(html) {
    background-color: var(--theme-colors-background, initial);
    color: var(--theme-colors-text, initial);
    font-size: 18px;
    font-family: 'PT Sans Narrow', sans-serif, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  main {
    padding: 1em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
  }

  h1 {
    color: var(--theme-colors-primary);
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 100;
    line-height: 48px;
    font-family: 'Nixie One', cursive;
  }

  .togglePlacer {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 48px;
    }
  }
</style>
