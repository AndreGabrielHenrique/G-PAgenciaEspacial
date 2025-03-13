import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/global.css';

/*
  Arquivo index.jsx
  -----------------
  - É o ponto de entrada do aplicativo React.
  - Renderiza o componente App dentro do elemento com id \"root\" na página HTML.
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
