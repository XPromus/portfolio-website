<script lang="ts">
    export let text: string;
    export let func;
</script>

<button on:click={func} class="h-full px-5 font-mono transition-all duration-300 bg-orange-100 border-t border-orange-100 active:text-white border-x hover:translate-y-2 hover:border-slate-600 hover:border-x hover:border-t hover:border-solid w-fit text-slate-600 active:bg-slate-500 active:duration-75">
    {text}
</button>

<style>

</style>