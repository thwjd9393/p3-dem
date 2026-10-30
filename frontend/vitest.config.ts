import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  root: '..',
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^react\/(.*)$/,
        replacement: `${resolve(import.meta.dirname, 'node_modules/react')}/$1`,
      },
      {
        find: 'react',
        replacement: resolve(import.meta.dirname, 'node_modules/react/index.js'),
      },
      {
        find: /^@testing-library\/(.*)$/,
        replacement: `${resolve(import.meta.dirname, 'node_modules/@testing-library')}/$1`,
      },
    ],
  },
  test: {
    environment: 'jsdom',
    include: [
      'tests/unit/frontend/**/*.test.{ts,tsx}',
      'tests/integration/frontend/**/*.test.{ts,tsx}',
    ],
    setupFiles: ['frontend/src/test/setup.ts'],
  },
})
