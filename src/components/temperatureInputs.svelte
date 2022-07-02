<script lang="ts">
  import type { TemperatureScales } from '../types/temperature';
  import temperatureStores from '../stores/temperatures';
  import TemperatureInput from './temperatureInput.svelte';
  import type { Writable } from 'svelte/store';

  const temperatureStoresMap = Object.entries(temperatureStores) as [
    storeName: TemperatureScales,
    store: Writable<string>,
  ][];
</script>

{#each temperatureStoresMap as [storeName, store]}
  <TemperatureInput scaleName={storeName} temperatureStore={store} />
{/each}

<style>
</style>
