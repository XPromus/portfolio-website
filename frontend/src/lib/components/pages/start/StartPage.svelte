<script lang="ts">
    import Lorem from "./Lorem.svelte";
    import StartTabButton from "./StartTabButton.svelte";
</script>

<div class="relative z-0 w-screen h-screen p-10 bg-orange-100">
    <div class="absolute top-0 left-0 z-20 flex flex-row w-full h-10 px-10 mt-2">
        <div class="w-1/2 h-full">
            <p class="text-xl font-extralight">
                Christopher-Manuel Hilgner
            </p>
        </div>
        <div class="flex flex-row-reverse w-1/2 h-full space-x-1 space-x-reverse">
            <StartTabButton text="Contact"/>
            <StartTabButton text="Blog"/>
            <StartTabButton text="Experiences"/>
            <StartTabButton text="Skills"/>
            <StartTabButton text="Projects"/>
            <StartTabButton text="About"/>
        </div>
    </div>
    <div class="z-10 w-full h-full mt-2 bg-orange-100 border border-slate-500">
        <div class="grid w-full h-full grid-flow-col grid-rows-1 gap-4">
            <div class="w-full h-full max-w-full max-h-full row-span-1 p-5 overflow-y-scroll text-center">
                <Lorem />            
            </div>
            <div class="w-full h-full max-w-full max-h-full row-span-1 p-5 overflow-y-scroll text-center">
                <Lorem />
            </div>
        </div>    
    </div>
    <div class="absolute bottom-0 right-0 z-10 h-10 px-10 py-1">
        <p class="font-extralight">2023</p>
    </div>
</div>

<style>

</style>