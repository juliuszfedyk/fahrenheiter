<script lang="ts">
  export let textToCopy: string;
  export let scale: string;

  let copied: 'no' | 'yes' | 'failed' = 'no';

  const onClick = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      copied = 'yes';
    } catch (e) {
      copied = 'failed';
    }
    setTimeout(() => (copied = 'no'), 800);
  };
</script>

<button
  on:click={onClick}
  class:failed={copied === 'failed'}
  class:success={copied === 'yes'}
  aria-label={`Copy temperature in ${scale}`}
  title={`Copy temperature in ${scale}`}
>
  {#if copied === 'no'}
    <img src="/img/small/copy.png" alt="Copy to cliboard Icon" />
  {:else if copied === 'yes'}
    <img src="/img/small/check-mark.png" alt="Copied to clipboard icon" />
  {:else if copied === 'failed'}
    <img src="/img/small/failed.png" alt="Copy to clipboard failed icon" />
  {/if}
</button>

<style>
  button {
    background-color: var(--theme-colors-background-accent);
    border: none;
    padding: var(--theme-spacings-small);
    border-radius: var(--theme-borders-radius);
    cursor: pointer;
  }
  button.failed {
    background-color: var(--theme-colors-primary);
  }
  button.success {
    background-color: var(--theme-colors-secondary);
  }
  button.success img {
    filter: none;
  }
  img {
    width: 15px;
    height: 15px;
    filter: var(--theme-images-black_icon_filter);
  }
</style>
