<script lang="ts">

</script>

<div class="grid w-full h-full grid-flow-col grid-rows-1 gap-4">
    <div class="w-full h-full max-w-full max-h-full row-span-1 p-5 overflow-y-scroll text-center">

    </div>
    <div class="justify-center w-full h-full max-w-full max-h-full row-span-1 p-5 overflow-y-scroll text-center">
        <div class="flex flex-col w-full space-y-4 h-fit">
            <div class="flex flex-col w-full space-y-1 text-left">
                <div class="font-mono">
                    <span>Full Name</span>
                    <span class="text-red-500">*</span>  
                </div>
                <input class="p-2 bg-orange-100 border border-slate-600" type="text" placeholder="">
            </div>
            <div class="flex flex-col w-full space-y-1 text-left">
                <div class="font-mono">
                    <span>Company</span>
                    <span class="text-red-500">*</span>  
                </div>
                <input class="p-2 bg-orange-100 border border-slate-600" type="text" placeholder="">
            </div>
            <div class="flex flex-col w-full space-y-1 text-left">
                <div class="font-mono">
                    <span>E-Mail</span>
                    <span class="text-red-500">*</span>  
                </div>
                <input class="p-2 bg-orange-100 border border-slate-600" type="email" placeholder="">
            </div>
            <div class="flex flex-col w-full space-y-1 text-left">
                <div class="font-mono">
                    <span>Message</span>
                    <span class="text-red-500">*</span>  
                </div>
                <textarea class="p-2 bg-orange-100 border border-slate-600" cols="30" rows="10" placeholder=""></textarea>
            </div>
            <button class="p-2 font-mono transition-all duration-200 bg-transparent border border-slate-600 hover:bg-slate-600 hover:text-white text-slate-600">Send</button>
        </div>
    </div>
</div>

<style>

</style>