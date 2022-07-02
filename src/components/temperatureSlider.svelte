<script lang="ts">
  import { recalculate } from '../helpers/recalculate';

  import { kelvin } from '../stores/temperatures';

  $: outOfRange = parseFloat($kelvin) > 10000;
  const onInput = (event: Event) => {
    console.log(outOfRange);
    const temp = (event.target as HTMLInputElement).value + '.00';
    kelvin.update(() => temp);
    recalculate('kelvin', temp);
  };
</script>

<div class="sliderWrapper">
  <input
    value={$kelvin}
    class:outOfRange
    type="range"
    name="temperatureSlider"
    id="temperatureSlider"
    min="0"
    max="10000"
    on:input={onInput}
    aria-label="Kelvin slider"
  />
  <span class="minTemp">0&deg;K</span>
  <span class="maxTemp">10000&deg;K</span>
</div>

<style>
  .sliderWrapper {
    width: 100%;
    padding: 10px;
    margin: 5px;
    background-color: var(--theme-colors-background-accent);
    border-radius: 10px;
    box-sizing: border-box;
  }
  input[type='range'] {
    -webkit-appearance: none; /* Override default CSS styles */
    appearance: none;
    width: 100%;
    background: transparent;
  }
  input[type='range']::-webkit-slider-runnable-track {
    background-color: var(--theme-colors-primary_dark);
    border-radius: 5px;
    height: 20px;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 7px;
    background-color: var(--theme-colors-secondary);
    cursor: pointer;
  }
  input[type='range'].outOfRange::-webkit-slider-thumb {
    background-color: var(--theme-colors-primary_dark);
  }
  .minTemp {
    float: left;
  }
  .maxTemp {
    float: right;
  }
</style>
