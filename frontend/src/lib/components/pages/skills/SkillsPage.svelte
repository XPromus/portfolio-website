<script lang="ts">
    import svelteLogo from "../../../../assets/svelte.svg";
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
                <!--
                <ProgressBar icon="{svelteLogo}" baseColor="orange" width="85" alt="Svelte"/>
                <ProgressBar icon="{unityLogoLight}" baseColor="slate" width="80" alt="Unity"/>
                <ProgressBar icon="{springLogo}" baseColor="green" width="70" alt="Springboot"/>
                <ProgressBar icon="{gitLogo}" baseColor="amber" width="50" alt="Git"/>
                <ProgressBar icon="{dockerLogo}" baseColor="blue" width="40" alt="Docker"/>
                <ProgressBar icon="{tailwindLogo}" baseColor="sky" width="40" alt="Tailwindcss"/>
                -->
                <div class="flex flex-row items-center w-full px-5 space-x-5">
                    <img class="w-fit" src="{svelteLogo}" alt="Svelte"/>
                    <div class="w-full rounded-full h-2.5 bg-slate-600">
                        <div class="h-2.5 rounded-full bg-orange-500 bg-gradient-to-r from-orange-600 to-orange-400 shadow-orange-800 shadow-md" style="width: 85%"></div>
                    </div>
                </div>
                <div class="flex flex-row items-center w-full px-5 space-x-5">
                    <img class="w-fit" src="{unityLogoLight}" alt="Unity"/>
                    <div class="w-full rounded-full h-2.5 bg-slate-600">
                        <div class="h-2.5 rounded-full bg-slate-500 bg-gradient-to-r from-slate-600 to-slate-400 shadow-slate-800 shadow-md" style="width: 80%"></div>
                    </div>
                </div>
                <div class="flex flex-row items-center w-full px-5 space-x-5">
                    <img class="w-fit" src="{springLogo}" alt="Springboot"/>
                    <div class="w-full rounded-full h-2.5 bg-slate-600">
                        <div class="h-2.5 rounded-full bg-green-500 bg-gradient-to-r from-green-600 to-green-400 shadow-green-800 shadow-md" style="width: 70%"></div>
                    </div>
                </div>
                <div class="flex flex-row items-center w-full px-5 space-x-5">
                    <img class="w-fit" src="{gitLogo}" alt="Git"/>
                    <div class="w-full rounded-full h-2.5 bg-slate-600">
                        <div class="h-2.5 rounded-full bg-amber-500 bg-gradient-to-r from-amber-600 to-amber-400 shadow-amber-800 shadow-md" style="width: 50%"></div>
                    </div>
                </div>
                <div class="flex flex-row items-center w-full px-5 space-x-5">
                    <img class="w-fit" src="{dockerLogo}" alt="Docker"/>
                    <div class="w-full rounded-full h-2.5 bg-slate-600">
                        <div class="h-2.5 rounded-full bg-blue-500 bg-gradient-to-r from-blue-600 to-blue-400 shadow-blue-800 shadow-md" style="width: 40%"></div>
                    </div>
                </div>
                <div class="flex flex-row items-center w-full px-5 space-x-5">
                    <img class="w-fit" src="{tailwindLogo}" alt="Tailwindcss"/>
                    <div class="w-full rounded-full h-2.5 bg-slate-600">
                        <div class="h-2.5 rounded-full bg-sky-500 bg-gradient-to-r from-sky-600 to-sky-400 shadow-sky-800 shadow-md" style="width: 40%"></div>
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
    <div class="basis-1/3">
        <div class="w-full h-full p-5 text-left text-slate-200">
            <div>
                <h4>Used for Work</h4>
                <ul class="list-disc">
                    <li>Unity</li>
                    <li>Svelte</li>
                    <li>Springboot</li>
                    <li>Leaflet API</li>
                    <li>Docker</li>
                </ul>
            </div>
            <div class="mt-5">
                <h4>Used for private projects</h4>
                <li>Svelte</li>
                <li>TailwindCSS</li>
                <li>Springboot</li>
                <li>Pocketbase</li>
                <li>Docker</li>
                <li>Kotlin with Android</li>
            </div>
        </div>
    </div>
</div>

<style>
    
</style>