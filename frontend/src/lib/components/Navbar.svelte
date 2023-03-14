<script lang="ts">
  import { activePage } from "../data/pageStore";
    import NavbarButton from "./NavbarButton.svelte";

    let darkTheme: boolean = true;

    let pages: string[] = ["About", "Projects", "Skills", "Education", "Experiences"];
    let pageAcitve: boolean[] = Array(pages.length).fill(false);
    pageAcitve[0] = true;

    const changeLanguage = (lang: string) => {

    }

    const changePage = (index: number) => {
        pageAcitve.fill(false);
        pageAcitve[index] = true;
        activePage.set(index);
    }

</script>

<nav class="fixed top-0 left-0 w-screen py-5 bg-slate-800 text-white flex flex-row px-5">
    <span class="font-bold min-w-fit w-fit">Christopher-Manuel Hilgner</span>
    <div class="flex flex-row-reverse w-full space-x-5 space-x-reverse">
        <div class="flex flex-row min-w-fit space-x-3">
            <button on:click={() => changeLanguage("us")} class="">
                <span class="fi fi-us"></span>
            </button>
            <button on:click={() => changeLanguage("de")} class="">
                <span class="fi fi-de"></span>
            </button>
            <button on:click={() => changeLanguage("jp")} class="">
                <span class="fi fi-jp"></span>
            </button>
            <button on:click={() => changeLanguage("sg")} class="">
                <span class="fi fi-sg"></span>
            </button>
        </div>
        <div>
            {#if darkTheme}
                <button on:click={() => {darkTheme = false}} class="rounded inline-block px-2 py-1.5 uppercase leading-none shadow-inner shadow-black">
                    <i class="fa-solid fa-moon"></i>
                </button>
            {:else}
                <button on:click={() => {darkTheme = true}} class="rounded inline-block px-2 py-1.5 uppercase leading-none">
                    <i class="fa-solid fa-moon"></i>
                </button>
            {/if}
        </div>
        <div class="flex flex-row min-w-fit space-x-5">
            {#each pages as page, i}
                <NavbarButton text="{page}" active="{pageAcitve[i]}" buttonFunction="{() => changePage(i)}"/>
            {/each}
        </div>
    </div>
</nav>

<style>

</style>