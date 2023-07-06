<script lang="ts">
    export let handleClick = () => {};
</script>

<button on:click={handleClick} class="h-fit py-3 px-4 font-bold text-white rounded-full shadow bg-slate-500 hover:bg-slate-400">
    <slot />
</button>