<script lang="ts">
  import { afterUpdate, beforeUpdate } from 'svelte';

  import type { Writable } from 'svelte/store';
  import { recalculate } from '../helpers/recalculate';
  import {
    isNumericPeriodOrMinus,
    isTemperatureFormatValid,
    temperatureRxStr,
  } from '../helpers/validation';
  import type { TemperatureScales } from '../types/temperature.types';

  export let temperatureStore: Writable<string>;
  export let scaleName: TemperatureScales;
  let valid = true;
  let input: HTMLInputElement;
  let cursorPosition = 0;

  beforeUpdate(() => {
    if (input) {
      cursorPosition = input.selectionStart;
    }
  });

  afterUpdate(() => {
    if (input) {
      input.setSelectionRange(cursorPosition, cursorPosition);
    }
  });

  temperatureStore.subscribe(temp => (valid = isTemperatureFormatValid(temp)));

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
</script>

<div class="inputWrapper" class:invalid={!valid}>
  <label for={scaleName}>{scaleName}</label><br />
  <input
    type="text"
    bind:this={input}
    value={$temperatureStore}
    name={scaleName}
    id={scaleName}
    pattern={temperatureRxStr}
    on:input={e => onInput(scaleName, e)}
    on:keypress={onKeyPress}
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

  .inputWrapper {
    margin: 5px;
    padding: 5px;
    background-color: var(--theme-colors-background-accent);
    border-radius: 5px;
  }

  .inputWrapper:first-child {
    margin-left: 0;
  }

  .inputWrapper:last-child {
    margin-right: 0;
  }

  .inputWrapper.invalid {
    background-color: var(--theme-colors-primary);
  }
</style>
