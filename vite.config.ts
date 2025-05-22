// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // ReactコンポーネントをDOM環境でテストするために必要
    globals: true,        // `describe`, `it`, `expect`などをグローバルで使えるようにする
    setupFiles: './src/setupTests.ts', // テストの初期設定ファイル (任意)
    css: false,           // CSSファイルのインポートをテストで無視する
    // coverage: {        // コードカバレッジを測定する場合
    //   provider: 'v8',
    //   reporter: ['text', 'json', 'html'],
    //   exclude: ['node_modules/', 'src/main.tsx'],
    // },
  },
});