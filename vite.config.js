import { defineConfig } from 'vite'

export default defineConfig({
    // Base path for GitHub Pages
    // Replace 'repo-name' with your actual repository name
    // base: '/repo-name/',
    base: './', // Relative path works for simple deployments usually
    build: {
        outDir: 'dist',
    }
})
