<script lang="ts">
    export let icon;
    export let baseColor;
    export let width;
    export let alt;
</script>

<div class="flex flex-row items-center w-full px-5 space-x-5">
    <img class="w-fit" src="{icon}" alt="{alt}"/>
    <div class="w-full rounded-full h-2.5 bg-slate-600">
        <div class="h-2.5 rounded-full bg-gradient-to-r from-{baseColor}-600 to-{baseColor}-400 shadow-{baseColor}-800 shadow-md" style="width: {width}%"></div>
    </div>
</div>

<style>

</style>