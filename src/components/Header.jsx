import React from 'react';
import '../css/Header.css';
// Importa o componente Logo para ser usado no cabeçalho.
import Logo from './Logo';

/*
  Componente Header
  -----------------
  - Renderiza o cabeçalho do site, que inclui a logo, o menu principal e as opções do usuário.\n
  - Cada link ou botão chama window.construcao() para exibir um alerta informando que a funcionalidade está em construção.
*/
const Header = () => {
  return (
    <header>
      <Logo className='logo' alt="Logotipo G&P Agência Espacial" />
      <nav className="menu">
        <ul>
          <li><a id="preco" onClick={() => window.construcao()}>Preço</a></li>
          <li><a id="solucao" onClick={() => window.construcao()}>Solução</a></li>
          <li><a id="comunidade" onClick={() => window.construcao()}>Comunidade</a></li>
          <li><a id="sobre" onClick={() => window.construcao()}>Sobre nós</a></li>
        </ul>
      </nav>
      <nav className="usuario">
        <ul>
          <li><button type="button" id="login" onClick={() => window.construcao()}>Login</button></li>
          <li><button type="button" id="cadastrar" onClick={() => window.construcao()}>Cadastrar</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
