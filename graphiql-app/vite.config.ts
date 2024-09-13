import { defineConfig, loadEnv } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev';

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
    },
    plugins: mode === 'test' ? [] : [remix({ appDirectory: 'src/app' })],
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        reportsDirectory: 'coverage',
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['node_modules/', 'dist/', 'src/**/*.{test.ts,test.tsx}', 'src/types/**' , 'src/scss-modules.d.ts'],
      },
      setupFiles: ['./src/vitest-setup/test.ts'],
    },
  };
});
