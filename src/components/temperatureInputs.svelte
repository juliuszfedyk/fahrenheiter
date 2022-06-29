<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type {
    RecalculateEventDispatcherProps,
    Temperatures,
    TemperatureScales,
  } from '../types/temperature';

  export let temperatures: Temperatures;
  const dispatch = createEventDispatcher<RecalculateEventDispatcherProps>();
  const onInputChange = (scaleFrom: TemperatureScales, event: Event) =>
    dispatch('recalculate', {
      scaleFrom,
      temperature: parseInt((event.target as HTMLInputElement).value, 10),
    });
</script>

<input
  type="number"
  value={temperatures.kelvin}
  name="kelvin"
  step="0.01"
  min='0'
  on:input={e => onInputChange('kelvin', e)}
/>
<input
  type="number"
  value={temperatures.celsius}
  name="celsius"
  step="0.01"
  min="-273.15"
  on:input={e => onInputChange('celsius', e)}
/>
<input
  type="number"
  value={temperatures.fahrenheit}
  name="fahrenheit"
  step="0.01"
  min="-459.67"
  on:input={e => onInputChange('fahrenheit', e)}
/>
