// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bvlad.com",

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
