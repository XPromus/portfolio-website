<script lang="ts">
    import { goto } from "$app/navigation";
    import { getLocalization } from "../lang";
    import NavBarButton from "./NavBarButton.svelte";
    import NavBarIconButton from "./NavBarIconButton.svelte";
    import NavBarLangButton from "./NavBarLangButton.svelte";

    const {t} = getLocalization();

    const handleClick = (path: string, replaceState: boolean) => {
        goto(path, { replaceState });
    }

</script>

<div class="flex flex-row py-3 space-x-1 w-full bg-slate-600">
    <div class="flex flex-row px-5 space-x-3 basis-1/2">
        <button class="py-3 font-bold text-white" on:click={() => handleClick("/", false)}>
            Christopher-Manuel Hilgner
        </button>
        <NavBarButton handleClick={() => handleClick("/about", false)}>
            <span>{$t("about")}</span>
        </NavBarButton>    
        <NavBarButton handleClick={() => handleClick("/education", false)}>
            <span>{$t("education")}</span>
        </NavBarButton>
        <NavBarButton handleClick={() => handleClick("/experience", false)}>
            <span>{$t("experience")}</span>
        </NavBarButton>
        <NavBarButton handleClick={() => handleClick("/projects", false)}>
            <span>{$t("projects")}</span>
        </NavBarButton>
    </div>
    <div class="flex flex-row-reverse px-5 space-x-2 basis-1/2">
        <NavBarIconButton>
            <i class="fa-solid fa-right-to-bracket"></i>
        </NavBarIconButton>
    </div>
</div>