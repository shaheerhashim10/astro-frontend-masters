import { defineConfig } from 'astro/config';

import react@3.6.0 from "@astrojs/react";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [react@3.6.0(), solidJs()]
});