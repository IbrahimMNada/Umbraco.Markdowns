import { defineConfig } from "vite";

export default defineConfig({
    build: {
        minify: true,
        lib: {
            entry: "./src/index.ts", // your web component source file
            formats: ["es"],
            fileName: 'accessors-block-list'
        },
        outDir: "../../App_Plugins/Umbraco.Markdowns.BlockList.DyanmicLabels",
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco/],
            output: {
                manualChunks: undefined,
                inlineDynamicImports: true,
                chunkFileNames: `[name]-[hash].js`,
            }
        },
    },
    mode: 'production'
});
