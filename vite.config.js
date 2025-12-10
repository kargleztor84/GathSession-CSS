import { defineConfig } from "vite";

export default defineConfig ({
    server: {
        hmr: {
            overlay: false,
        }
    },

    base: './',

    base: 'https://kargleztor84.github.io',
})