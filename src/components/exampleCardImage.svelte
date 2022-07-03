<script lang="ts">
  import type { ExampleTypes } from '../types/example.types';
  const imageSrcs = {
    solid: '/img/small/solid.png',
    liquid: '/img/small/liquid.png',
    gas: '/img/small/gas.png',
  };
  export let type: ExampleTypes;
</script>

<div class="exampleImages">
  {#if type === 'melting-point'}
    <img src={imageSrcs.solid} alt="solid" />/
    <img src={imageSrcs.liquid} alt="liquid" />
  {:else if type === 'boiling-point'}
    <img src={imageSrcs.liquid} alt="liquid" />/
    <img src={imageSrcs.gas} alt="gas" />
  {/if}
</div>

<style>
  .exampleImages {
    font-size: 20px;
    min-width: 80px;
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 3px;
    filter: var(--theme-images-black_icon_filter);
    -webkit-filter: var(--theme-images-black_icon_filter);
  }
</style>
