<script lang="ts">
    export let text: string;
    export let active: boolean = false;
    export let buttonFunction;
</script>

{#if active}
    <button on:click={buttonFunction} class="rounded inline-block px-2 py-1.5 leading-none shadow-inner shadow-black">
        {text}
    </button>
{:else}
    <button on:click={buttonFunction} class="rounded inline-block px-2 py-1.5 leading-none">
        {text}
    </button>
{/if}

<style>

</style>