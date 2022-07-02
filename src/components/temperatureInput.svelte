<script lang="ts">
  import type { Writable } from 'svelte/store';
  import { recalculate } from '../helpers/recalculate';
  import {
    isNumericPeriodOrMinus,
    isTemperatureFormatValid,
    temperatureRxStr,
  } from '../helpers/validation';
  import type { TemperatureScales } from '../types/temperature.types';

  export let temperatureStore: Writable<string> | undefined;
  export let scaleName: TemperatureScales | undefined;
  let valid = true;

  const onKeyPress = (event: KeyboardEvent) => {
    if (!isNumericPeriodOrMinus(event.code)) {
      event.preventDefault();
    }
  };

  const onInput = (scaleFrom: TemperatureScales, event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    valid = isTemperatureFormatValid(value);
    recalculate(scaleFrom, value);
  };

  const onPaste = (event: ClipboardEvent) => {
    if (!isTemperatureFormatValid(event.clipboardData.getData('text/plain'))) {
      event.preventDefault();
    }
  };
</script>

<div class="inputElement" class:invalid={!valid}>
  <label for={scaleName}>{scaleName}</label><br />
  <input
    type="text"
    value={$temperatureStore}
    name={scaleName}
    pattern={temperatureRxStr}
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

  .inputElement.invalid {
    background-color: var(--theme-colors-primary);
  }
</style>
