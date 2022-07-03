<script lang="ts">
  import { examples } from '../data/examples';
  import ExampleCard from './exampleCard.svelte';
</script>

<div class="exampleCards">
  {#each examples as example}
    <ExampleCard {example} />
  {/each}
</div>

<style>
  .exampleCards {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }
</style>
