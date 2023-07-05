<script>
    import "../app.postcss";
    import NavBar from "../components/NavBar.svelte";
    import { initLocalizationContext } from "../lang";
    initLocalizationContext();
</script>
  
<div class="flex flex-col h-screen v-screen">
    <div class="shrink">
        <NavBar />
    </div>
    <div class="w-full h-full grow">
        <slot />
    </div>
</div>