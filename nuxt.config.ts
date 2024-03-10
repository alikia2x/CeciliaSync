// https://nuxt.com/docs/api/configuration/nuxt-config
import watchDir from "./server/hooks/watchDir";
import listDir from "./server/api/utils/listDir";

export default defineNuxtConfig({
    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },
    css: [
        "~/assets/css/main.css",
        "primevue/resources/themes/aura-dark-green/theme.css"
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    modules: ["nuxt-primevue"],
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1"
        }
    },
    hooks: {
        "nitro:init": () => {
            console.log("Initialization hook triggered.");
            // watchDir("/Users/alikia/Code/CeciliaSync/");
            const directoryPath = "/Users/alikia/Code/CeciliaSync/";
            const filesInDirectory = listDir(directoryPath);
            console.log("Files to be watched:", filesInDirectory);
        }
    }
});
