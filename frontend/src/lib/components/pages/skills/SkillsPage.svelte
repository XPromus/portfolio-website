<script lang="ts">
    import svelteLogo from "../../../../assets/svelte.svg";
    import unityLogo from "../../../../assets/icons8-unity.svg";
    import unityLogoLight from "../../../../assets/icons8-unity-light.svg"
    import springLogo from "../../../../assets/icons8-springboot.svg";
    import gitLogo from "../../../../assets/icons8-git.svg";
    import dockerLogo from "../../../../assets/icons8-docker.svg";
    import tailwindLogo from "../../../../assets/icons8-tailwindcss.svg"
    import UnityLogoLegal from "../../../legal/UnityLogoLegal.svelte";
    import SpringLogoLegal from "../../../legal/SpringLogoLegal.svelte";
    import GitLogoLegal from "../../../legal/GitLogoLegal.svelte";
    import DockerLogoLegal from "../../../legal/DockerLogoLegal.svelte";
    import ProgressBar from "./ProgressBar.svelte";
    import TailwindcssLogoLegal from "../../../legal/TailwindcssLogoLegal.svelte";
</script>

<div class="flex flex-row w-full h-full p-4 space-x-4">
    <div class="w-full h-full basis-2/3">
        <div class="flex flex-col w-full h-full">
            <div class="flex flex-col items-center justify-center w-full h-full space-y-10">
                <ProgressBar icon="{svelteLogo}" baseColor="orange" width="85" alt="Svelte"/>
                <ProgressBar icon="{unityLogoLight}" baseColor="slate" width="80" alt="Unity"/>
                <ProgressBar icon="{springLogo}" baseColor="green" width="70" alt="Springboot"/>
                <ProgressBar icon="{gitLogo}" baseColor="amber" width="50" alt="Git"/>
                <ProgressBar icon="{dockerLogo}" baseColor="blue" width="40" alt="Docker"/>
                <div class="flex flex-row items-center w-full px-5 space-x-5">
                    <img class="w-fit" src="{tailwindLogo}" alt="Tailwindcss"/>
                    <div class="w-full rounded-full h-2.5 bg-slate-600">
                        <div class="h-2.5 rounded-full bg-gradient-to-r from-sky-600 to-sky-400 shadow-sky-800 shadow-md" style="width: 40%"></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row w-full space-x-5 min-h-fit">
                <UnityLogoLegal />
                <SpringLogoLegal />
                <GitLogoLegal />
                <DockerLogoLegal />
                <TailwindcssLogoLegal />
            </div>
        </div>
    </div>
    <div class="bg-red-300 basis-1/3">

    </div>
</div>

<style>
    
</style>