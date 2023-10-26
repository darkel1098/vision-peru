import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: nodejs({
    mode: 'middleware' // or 'standalone'
  }),
  output: 'hybrid',
  site: "https://apps.lasolucionica.com",
  base: "visionperu",
});