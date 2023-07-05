<script lang="ts">
    export let handleClick = () => {};
</script>

<button class="flex flex-row px-5 py-3 space-x-1 font-bold text-white rounded-md shadow bg-slate-500 hover:bg-slate-400" on:click={handleClick}>
    <slot />
</button>