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
  // Svelte event typing issue
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onInput = (scaleFrom: TemperatureScales, event: any) => {
    const target = (event as InputEvent).target;
    const value = (target as HTMLInputElement).value;
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
    text-align: end;
    margin-left: var(--theme-spacings-large);
    min-width: 70%;
  }

  .inputWrapper {
    margin: var(--theme-spacings-small);
    padding: var(--theme-spacings-large);
    background-color: var(--theme-colors-background-accent);
    border-radius: var(--theme-borders-radius);
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
