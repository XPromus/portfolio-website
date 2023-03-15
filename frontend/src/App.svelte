<script lang="ts">
    import Navbar from "./lib/components/Navbar.svelte";
    import PageContent from "./lib/components/PageContent.svelte";
    import { theme } from "./lib/components/theme/theme";

    let colorTheme: string = $theme;
    theme.subscribe((value) => {
        colorTheme = value;
    })

</script>

<main class="h-screen max-h-screen {colorTheme}">
    <div class="flex flex-col w-full h-full">
        <Navbar />
        <PageContent />
    </div>
    
</main>

<style>

</style>