import { defineConfig } from 'vite';

export default defineConfig({
    clearScreen: false,
    server: {
        port: 1403,
        strictPort: true,
    },
    envPrefix: ['VITE_', 'TAURI_'],
    build: {
        target: 'chrome105',
        minify: 'esbuild',
        sourcemap: false,
        outDir: 'dist',
        emptyOutDir: true,
    },
});
