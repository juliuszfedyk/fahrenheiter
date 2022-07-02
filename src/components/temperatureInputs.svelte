<script lang="ts">
  import temperatureStores from '../stores/temperatures';

  import TemperatureInput from './temperatureInput.svelte';

  const temperatureStoresMap = Object.entries(temperatureStores);
</script>

{#each temperatureStoresMap as [storeName, store]}
  <TemperatureInput scaleName={storeName} temperatureStore={store} />
{/each}

<style>
</style>
