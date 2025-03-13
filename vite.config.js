import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

/*
  Arquivo vite.config.js
  -----------------------
  - Configuração do Vite para o projeto React.\n
  - Usa o plugin react-swc para transformar o JSX.\n
  - A seção resolve pode ser customizada conforme necessário.
*/
export default defineConfig({
  base: '/', // ou './' se necessário
  plugins: [react()],
  resolve: {}
});
