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
  on:input={e => onInputChange('kelvin', e)}
/>
<input
  type="number"
  value={temperatures.celsius}
  name="celsius"
  on:input={e => onInputChange('celsius', e)}
/>
<input
  type="number"
  value={temperatures.fahrenheit}
  name="fahrenheit"
  on:input={e => onInputChange('fahrenheit', e)}
/>
