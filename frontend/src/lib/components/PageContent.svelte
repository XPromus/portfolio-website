<script lang="ts">
    
    import { get } from "svelte/store";
    import { activePage } from "../data/pageStore";
    
    import AboutPage from "./pages/AboutPage.svelte";
    import EducationPage from "./pages/EducationPage.svelte";
    import ExperiencesPage from "./pages/ExperiencesPage.svelte";
    import ProjectsPage from "./pages/ProjectsPage.svelte";
    import SkillsPage from "./pages/skills/SkillsPage.svelte";

    let page: number = get(activePage);
    activePage.subscribe((value) => {
        page = value;
    });

</script>

<div class="relative h-full overflow-y-scroll bg-slate-100 dark:bg-slate-700">
    {#key page}
        {#if page == 0}
            <AboutPage />
        {:else if page == 1}
            <ProjectsPage />
        {:else if page == 2}
            <SkillsPage />
        {:else if page == 3}
            <EducationPage />
        {:else if page == 4}
            <ExperiencesPage />
        {/if}
    {/key}
</div>

<style>

</style>