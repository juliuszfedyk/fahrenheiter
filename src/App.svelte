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
    <h1>Farensius</h1>
    <TemperatureInputs />
    <div>
      {$kelvin} | {$celsius} | {$fahrenheit}
    </div>
  </ThemeWrapper>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nixie+One&family=PT+Sans+Narrow&display=swap');

  :global(html) {
    background-color: var(--theme-colors-background, initial);
    color: var(--theme-colors-text, initial);
    font-size: 18px;
  }

  :root {
    font-family: 'PT Sans Narrow', sans-serif, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  main {
    padding: 1em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: var(--theme-colors-primary);
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    font-family: 'Nixie One', cursive;
  }

  .togglePlacer {
    position: absolute;
    right: 10px;
    top: 10px;
  }
</style>
