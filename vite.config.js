import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url';
// import { createUnplugin } from 'unplugin';
// import ElementPlus from 'unplugin-element-plus/vite';
import {viteCommonjs} from '@originjs/vite-plugin-commonjs'

import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import eslintPlugin from 'vite-plugin-eslint';
const resolve = (p) => fileURLToPath(new URL(p, import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCommonjs(),
    // createUnplugin(ElementPlus),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      'tinymce': '/public/tinymce', // 或者你存放TinyMCE资源的实际路径
    },
  },
})
