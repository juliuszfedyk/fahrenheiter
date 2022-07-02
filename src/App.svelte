<script lang="ts">
  import TemperatureInputs from './components/temperatureInputs.svelte';
  import type {} from './types/temperature.types';
  import { kelvin, celsius, fahrenheit } from './stores/temperatures';
  import { ThemeWrapper, ThemeToggle } from 'svelte-themer';
  import { themes } from './themes/themes';
  import TemperatureSlider from './components/temperatureSlider.svelte';
</script>

<main>
  <ThemeWrapper key="fahrenheiter__theme" {themes}>
    <div class="togglePlacer">
      <ThemeToggle />
    </div>
    <h1>Fahrenheiter</h1>
    <TemperatureInputs />
    <div class="values">
      <div>
        {$kelvin}&deg;K
      </div>
      <div>
        {$celsius}&deg;C
      </div>
      <div>
        {$fahrenheit}&deg;F
      </div>
    </div>
    <TemperatureSlider />
  </ThemeWrapper>

  <div class="credits">
    <a href="https://github.com/juliuszfedyk/fahrenheiter">github</a>
  </div>
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
    max-width: 800px;
  }

  h1 {
    color: var(--theme-colors-primary);
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 100;
    line-height: 48px;
    font-family: 'Nixie One', cursive;
  }
  a,
  a:visited {
    color: var(--theme-colors-secondary);
  }

  .togglePlacer {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .values {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .values div {
    padding: 5px;
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 48px;
    }
    .values {
      flex-direction: row;
    }
  }

  .credits {
    position: fixed;
    bottom: 10px;
    right: 10px;
  }
</style>
