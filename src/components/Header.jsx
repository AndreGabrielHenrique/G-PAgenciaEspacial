import React from 'react';
import '../styles/Header.sass';
// Importa o componente Logo para ser usado no cabeçalho.
import Logo from './Logo';

/*
  Componente Header
  -----------------
  - Renderiza o cabeçalho do site, que inclui a logo, o menu principal e as opções do usuário.
  - Cada link ou botão chama window.alerta() para exibir um alerta informando que a funcionalidade está em construção.
*/
const Header = () => {
  return (
    <header>
      <Logo className='logo' alt="Logotipo G&P Agência Espacial" />
      <nav className="menu">
        <ul>
          <li><a id="preco" onClick={() => window.alerta()}>Preço</a></li>
          <li><a id="solucao" onClick={() => window.alerta()}>Solução</a></li>
          <li><a id="comunidade" onClick={() => window.alerta()}>Comunidade</a></li>
          <li><a id="sobre" onClick={() => window.alerta()}>Sobre nós</a></li>
        </ul>
      </nav>
      <nav className="usuario">
        <ul>
          <li><button type="button" id="login" onClick={() => window.alerta()}>Login</button></li>
          <li><button type="button" id="cadastrar" onClick={() => window.alerta()}>Cadastrar</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
