<script lang="ts">
  import { afterUpdate, beforeUpdate } from 'svelte';

  import type { Writable } from 'svelte/store';
  import { recalculate } from '../helpers/recalculate';
  import {
    isNumericPeriodOrMinusOrPlus,
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
    if (!isNumericPeriodOrMinusOrPlus(event.code)) {
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
  <label for={scaleName}>{scaleName}</label>
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
    font-size: var(--theme-fonts-sizes-medium);
    color: var(--theme-colors-secondary);
    outline: none;
    text-align: end;
    margin-left: var(--theme-spacings-large);
    box-sizing: border-box;
    min-width: 70%;
  }

  .inputWrapper {
    margin: var(--theme-spacings-small);
    padding: var(--theme-spacings-large);
    background-color: var(--theme-colors-background-accent);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    align-items: baseline;
  }

  @media (min-width: 800px) {
    .inputWrapper {
      flex-direction: column;
      width: 30%;
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
    input {
      margin: 0;
      width: 100%;
    }
  }
</style>
