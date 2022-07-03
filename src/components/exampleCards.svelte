<script lang="ts">
  import ExampleCard from './exampleCard.svelte';
  import { examples, filterExamples } from '../stores/examples';
  let searchTerm = '';
  $: filterExamples(searchTerm);
</script>

<div class="exampleCards">
  <div class="searchBar">
    <span>Search examples:</span>
    <input type="text" bind:value={searchTerm} />
  </div>
  {#each $examples as { name, type, temperatureK }}
    <ExampleCard {name} {type} {temperatureK} />
  {/each}
</div>

<style>
  .exampleCards {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--theme-spacings-large);
  }
  .searchBar {
    box-sizing: border-box;
    width: 100%;
    background-color: var(--theme-colors-background-accent);
    padding: var(--theme-spacings-large);
    border-radius: var(--theme-borders-radius);
    display: flex;
    align-items: baseline;
  }
  .searchBar span {
    flex-shrink: 0;
  }
  input {
    margin-left: var(--theme-spacings-small);
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 0;
  }

  input:focus {
    border: 2px solid var(--theme-colors-primary_dark);
  }
</style>
