// Configuração do ESLint para o projeto React
// Local: eslint.config.js (na raiz do projeto)
// ESLint é uma ferramenta de análise estática de código que identifica padrões problemáticos

// Importações dos plugins e configurações necessárias
import js from '@eslint/js'                 // Configurações recomendadas padrão do ESLint para JavaScript
import globals from 'globals'               // Fornece variáveis globais pré-definidas para diferentes ambientes (browser, node, etc.)
import reactHooks from 'eslint-plugin-react-hooks' // Plugin para regras dos React Hooks (useState, useEffect, etc.)
import reactRefresh from 'eslint-plugin-react-refresh' // Plugin para suporte ao React Refresh (Hot Reload)

// Exporta a configuração do ESLint como um array de objetos de configuração
export default [
  // Configuração 1: Define quais arquivos/diretórios devem ser ignorados pelo ESLint
  { 
    ignores: ['dist'] // Ignora o diretório 'dist' (arquivos de build de produção) para evitar análise desnecessária
  },
  
  // Configuração 2: Configurações principais para arquivos JavaScript/JSX
  {
    // Aplica estas regras a todos os arquivos .js e .jsx em qualquer diretório
    files: ['**/*.{js,jsx}'],
    
    // Opções de linguagem para os arquivos especificados
    languageOptions: {
      ecmaVersion: 2020, // Versão do ECMAScript a ser suportada (ES2020)
      globals: globals.browser, // Define as variáveis globais do ambiente navegador (window, document, etc.)
      parserOptions: {
        ecmaVersion: 'latest', // Última versão do ECMAScript para análise sintática
        ecmaFeatures: { jsx: true }, // Habilita a análise de JSX
        sourceType: 'module', // Usa módulos ES6 (import/export) como sistema de módulos
      },
    },
    
    // Plugins adicionais que estendem as funcionalidades do ESLint
    plugins: {
      'react-hooks': reactHooks, // Habilita regras específicas para React Hooks
      'react-refresh': reactRefresh, // Habilita regras para React Refresh (Fast Refresh)
    },
    
    // Regras específicas para o projeto
    rules: {
      // Herda as regras recomendadas do ESLint para JavaScript
      ...js.configs.recommended.rules,
      
      // Herda as regras recomendadas para React Hooks
      ...reactHooks.configs.recommended.rules,
      
      // Regra personalizada: Dispara erro para variáveis não utilizadas
      // varsIgnorePattern permite variáveis que comecem com letra maiúscula ou underscore
      // Isso é útil para componentes React (que começam com letra maiúscula) ou constantes
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      
      // Regra do React Refresh: Avisa se um arquivo exporta algo que não é um componente
      // Isso ajuda a manter a compatibilidade com Fast Refresh do React
      'react-refresh/only-export-components': [
        'warn', // Emite um aviso (warning) em vez de erro para não bloquear o desenvolvimento
        { 
          allowConstantExport: true, // Permite a exportação de constantes (além de componentes)
          // Útil para exportar configurações, constantes de texto, etc.
        },
      ],
    },
  },
]