/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />
import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    remix({
      appDirectory: 'src/app',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
    },
    setupFiles: ['./src/vitest-setup/test.ts'],
  },
});
