/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />
import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env.AUTH_DOMAIN': JSON.stringify(env.AUTH_DOMAIN),
      'process.env.PROJECT_ID': JSON.stringify(env.PROJECT_ID),
      'process.env.STORAGE_BUCKET': JSON.stringify(env.STORAGE_BUCKET),
      'process.env.MESSAGING_SENDER_ID': JSON.stringify(
        env.MESSAGING_SENDER_ID,
      ),
      'process.env.APP_ID': JSON.stringify(env.APP_ID),
      'process.env.MEASUREMENT_ID': JSON.stringify(env.MEASUREMENT_ID),
      global: {},
    },
    plugins: [
      remix({
        appDirectory: 'src/app',
      })
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        provider: 'v8',
      },
      setupFiles: ['./src/vitest-setup/test.ts'],
    },
  };
});
