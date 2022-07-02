<script lang="ts">
  import TemperatureInputs from './components/temperatureInputs.svelte';
  import { recalculate } from './helpers/recalculate';
  import type {} from './types/temperature';
  import { kelvin, celsius, fahrenheit } from './stores/temperatures';
</script>

<main>
  <h1>Farensius</h1>
  <TemperatureInputs />
  <div>
    {$kelvin} | {$celsius} | {$fahrenheit}
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nixie+One&family=PT+Sans+Narrow&display=swap');

  :root {
    font-family: 'PT Sans Narrow', sans-serif, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
    font-family: 'Nixie One', cursive;
  }
</style>
