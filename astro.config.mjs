import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: vercel(),
  output: 'hybrid',
  site: "https://apps.lasolucionica.com",
  //base: "visionperu"
});