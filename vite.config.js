import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

// Define __dirname para ES modules
const __dirname = fileURLToPath(new URL('.', import.meta.url));

/*
  Arquivo vite.config.js
  -----------------------
  - Configuração do Vite para o projeto React.
  - Usa o plugin react-swc para transformar o JSX.
  - A seção resolve pode ser customizada conforme necessário.
*/
export default defineConfig({
    base: '/', // ou './' se necessário
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: 'src/assets/Imagens/*',   // ATENÇÃO: caminho diferente!
            dest: 'legacy/Imagens'
          },
          {
            src: 'legacy/script.js',
            dest: 'legacy'
          },
          {
            src: 'legacy/style.css',
            dest: 'legacy'
          }
        ]
      })
    ],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          legacy: resolve(__dirname, 'legacy/index.html')
        }
      }
    },  
    resolve: {}
});