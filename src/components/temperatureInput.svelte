<script lang="ts">
  import type { Writable } from 'svelte/store';
  import { recalculate } from '../helpers/recalculate';
  import {
    isNumericPeriodOrMinus,
    isTemperatureFormatValid,
    temperatureRx,
  } from '../helpers/validation';
  import type { TemperatureScales } from '../types/temperature.types';

  export let temperatureStore: Writable<string> | undefined;
  export let scaleName: TemperatureScales | undefined;

  const onKeyPress = (event: KeyboardEvent) => {
    console.log(event);
    if (!isNumericPeriodOrMinus(event.code)) {
      event.preventDefault();
    }
  };

  const onInput = (scaleFrom: TemperatureScales, event: Event) => {
    recalculate(scaleFrom, (event.target as HTMLInputElement).value);
  };

  const onPaste = (event: ClipboardEvent) => {
    if (!isTemperatureFormatValid(event.clipboardData.getData('text/plain'))) {
      event.preventDefault();
    }
  };
</script>

<div class="inputElement">
  <label for={scaleName}>{scaleName}</label><br />
  <input
    type="text"
    value={$temperatureStore}
    name={scaleName}
    pattern={temperatureRx}
    on:input={e => onInput(scaleName, e)}
    on:keypress={onKeyPress}
    on:paste={onPaste}
  />
</div>

<style>
  input {
    background-color: var(--theme-colors-background);
    border: 2px solid var(--theme-colors-secondary);
    border-radius: 5px;
    padding: 8px;
    font-size: 18px;
    color: var(--theme-colors-secondary);
    outline: none;
    text-align: end;
  }

  .inputElement {
    margin: 5px;
    padding: 5px;
    background-color: var(--theme-colors-background-accent);
    border-radius: 5px;
  }
</style>
