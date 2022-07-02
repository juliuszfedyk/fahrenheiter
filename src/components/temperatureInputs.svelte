<script lang="ts">
  import type { TemperatureScales } from '../types/temperature.types';
  import temperatureStores from '../stores/temperatures';
  import TemperatureInput from './temperatureInput.svelte';
  import type { Writable } from 'svelte/store';

  const temperatureStoresMap = Object.entries(temperatureStores) as [
    storeName: TemperatureScales,
    store: Writable<string>,
  ][];
</script>

<div class="temperatureInputs">
  {#each temperatureStoresMap as [storeName, store]}
    <TemperatureInput scaleName={storeName} temperatureStore={store} />
  {/each}
</div>

<style>
  .temperatureInputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 800px) {
    .temperatureInputs {
      flex-direction: row;
    }
  }
</style>
