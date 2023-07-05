<script lang="ts">
    import { getLocalization } from "../lang";
    import NavBarButton from "./NavBarButton.svelte";

    
    export let targetLang: string;
    const { currentLanguage } = getLocalization();
    const handleClick = () => {
        currentLanguage.update(lang => {
            return targetLang;
        });
    }
</script>

<NavBarButton handleClick={() => handleClick}>
    {targetLang}
</NavBarButton>