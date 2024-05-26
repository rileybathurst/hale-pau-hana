import { defineConfig } from 'astro/config';
import db from "@astrojs/db";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      transformer: "lightningcss"
    }
  },
  integrations: [react()]
});