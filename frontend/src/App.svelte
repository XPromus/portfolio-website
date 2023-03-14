<script lang="ts">
    import Navbar from "./lib/components/Navbar.svelte";
    import PageContent from "./lib/components/PageContent.svelte";
    import { theme } from "./lib/components/theme/theme";

    let colorTheme: string = $theme;
    theme.subscribe((value) => {
        colorTheme = value;
    })

</script>

<main class="h-screen {colorTheme}">
    <Navbar />
    <PageContent />
</main>

<style>

</style>