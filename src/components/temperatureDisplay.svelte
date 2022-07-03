<script lang="ts">
  import type { Writable } from 'svelte/store';

  import CopyToClipboard from './copyToClipboard.svelte';
  export let temperatureStore: Writable<string>;
  export let scale: string;
</script>

<div class="value">
  {$temperatureStore}&deg;{scale.charAt(0).toUpperCase()}
  <CopyToClipboard {scale} textToCopy={$temperatureStore} />
</div>

<style>
  .value {
    padding: var(--theme-spacings-large);
  }
</style>
