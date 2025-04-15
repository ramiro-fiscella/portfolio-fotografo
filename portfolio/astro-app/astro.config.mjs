// Loading environment variables
import { loadEnv } from 'vite';
import sanity from '@sanity/astro';
// Importá solo el adaptador estático
import vercel from '@astrojs/vercel/static';
// No es necesaria la integración de React si no usás Sanity Studio embebido.

import { defineConfig } from 'astro/config';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  ''
);

const projectId = PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_DATASET;

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [
    sanity({
      projectId,
      dataset,
      useCdn: false,
      apiVersion: '2024-12-08',
    }),
    // Eliminamos react() si no se usa Sanity Studio embebido.
  ],
});
