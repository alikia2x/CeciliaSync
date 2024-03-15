import watchFolder from "../server/hooks/watchFolder";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook("vue:setup", () => {
        console.error("Initialization hook triggered.");
        const dir = "/Users/alikia/Code/CeciliaSync/";
        watchFolder(dir);
    });
});
