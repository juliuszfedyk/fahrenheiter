<script lang="ts">
  import TemperatureInputs from './components/temperatureInputs.svelte';
  import type {} from './types/temperature.types';
  import temperatureStores from './stores/temperatures';
  import { ThemeWrapper, ThemeToggle } from 'svelte-themer';
  import { themes } from './themes/themes';
  import TemperatureSlider from './components/temperatureSlider.svelte';
  import ExampleCards from './components/exampleCards.svelte';
  import CopyToClipboard from './components/copyToClipboard.svelte';
  import TemperatureDisplay from './components/temperatureDisplay.svelte';
</script>

<main>
  <ThemeWrapper key="fahrenheiter__theme" {themes}>
    <div class="togglePlacer">
      <ThemeToggle />
    </div>
    <h1>Fahrenheiter</h1>
    <TemperatureInputs />
    <div class="values">
      {#each Object.entries(temperatureStores) as [scale, temperatureStore]}
        <TemperatureDisplay {temperatureStore} {scale} />
      {/each}
    </div>
    <TemperatureSlider />
    <ExampleCards />
  </ThemeWrapper>

  <div class="credits">
    <div>
      Icons made by <a
        href="https://www.flaticon.com/authors/good-ware"
        title="Good Ware">Good Ware</a
      >
      and by <a href="https://www.freepik.com" title="Freepik">Freepik</a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
  <div class="links">
    <a href="https://github.com/juliuszfedyk/fahrenheiter">github</a>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nixie+One&family=PT+Sans+Narrow&display=swap');

  :global(html) {
    background-color: var(--theme-colors-background, initial);
    color: var(--theme-colors-text, initial);
    font-size: var(--theme-fonts-sizes-medium);
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
    font-size: var(--theme-fonts-sizes-large);
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

  @media (min-width: 800px) {
    h1 {
      font-size: var(--theme-fonts-sizes-x_large);
    }
    .values {
      flex-direction: row;
    }
  }

  .credits,
  .links {
    background-color: var(--theme-colors-background);
    padding: var(--theme-spacings-small);
    font-size: small;
  }

  .credits {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .links {
    position: fixed;
    bottom: 0;
    right: 0;
  }
</style>
