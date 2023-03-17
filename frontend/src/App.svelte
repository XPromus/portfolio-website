<script lang="ts">
    import StartPage from "./lib/components/pages/start/StartPage.svelte";
    import { theme } from "./lib/components/theme/theme";

    let colorTheme: string = $theme;
    theme.subscribe((value) => {
        colorTheme = value;
    })

</script>

<main class="h-screen max-h-screen {colorTheme}">
    <StartPage />
</main>

<style>

</style>