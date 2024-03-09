<template>
    <div class="relative h-full w-full overflow-hidden ">
        <div class="relative text-center w-full h-fit pb-24 px-4 md:px-0">
            <h1 class="relative font-bold mt-64" style="font-size: max(48px,min(5vw,76px));line-height: 1.1;">
                The sync tool designed for your code.
            </h1>
            <p class="relative text-lg font-light text-zinc-300 mt-12">
                There are many tools to sync a folder. Google Drive, Dropbox, OneDrive...
                But none of them is designed for code syncing.<br>
                So we created CeciliaSync, a tool born to sync and backup your code, with the pain-free and seamless
                experience.
            </p>
        </div>
        <div class="relative text-center w-full flex justify-center gap-5">
            <button class="relative text-xl w-36 h-13 font-bold rounded-xl
            bg-zinc-50 text-black hover:bg-zinc-300 duration-200">
                <NuxtLink to="/guide/">Get Started</NuxtLink>
            </button>
            <button class="relative text-lg w-44 h-13 font-medium rounded-xl duration-200 border-2
            text-zinc-200 border-zinc-500 hover:bg-[#191a1e] hover:border-[#4a4a52]">
                <NuxtLink to="/dashboard/">View Dashboard</NuxtLink>
            </button>
        </div>
    </div>
</template>