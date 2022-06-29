<script lang="ts">
  import TemperatureInputs from './components/temperatureInputs.svelte';
import { recalculate } from './helpers/recalculate';
  import type { TemperatureInputChangeEvent } from './types/temperature';

  let temperatures = {
    kelvin: 0,
    celsius: -273.15,
    fahrenheit: -459.67,
  };

  const onRecalculate = ( event: TemperatureInputChangeEvent) => {
    const { scaleFrom, temperature } = event.detail;
    temperatures = recalculate(scaleFrom, temperature, temperatures)
  }
</script>

<main>
  <h1>Farensius</h1>
  <TemperatureInputs {temperatures} on:recalculate={onRecalculate} />
  <div>
    {temperatures.kelvin} | {temperatures.celsius} | {temperatures.fahrenheit}
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

  .thermometer > * {
    position: absolute;
  }

  img {
    height: 16rem;
    width: 16rem;
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

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
