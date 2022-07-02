<script lang="ts">
  import type { Writable } from 'svelte/store';

  import { recalculate } from '../helpers/recalculate';
  import {
    isNumericPeriodOrMinus,
    isTemperatureFormatValid,
    temperatureRx,
  } from '../helpers/validation';
  import type { TemperatureScales } from '../types/temperature';

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

<input
  type="text"
  value={$temperatureStore}
  name={scaleName}
  pattern={temperatureRx}
  on:input={e => onInput(scaleName, e)}
  on:keypress={onKeyPress}
  on:paste={onPaste}
/>
