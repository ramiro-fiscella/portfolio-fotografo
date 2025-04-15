// Loading environment variables
import { loadEnv } from 'vite';
import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';

// Carga de variables de entorno
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  ''
);

// Usar solo los valores necesarios para el portfolio
const projectId = PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_DATASET;

// Usar el adaptador estático para sitios completamente estáticos
import vercel from '@astrojs/vercel/static';

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
    // Eliminamos react(), ya que no se requiere para un portfolio simple.
  ],
});
