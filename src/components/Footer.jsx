import React from 'react';
import '../styles/Footer.sass';
// Importa o componente Logo para ser exibido no rodapé.
import Logo from "./Logo";
import xLogo from '../assets/Imagens/X Logo.png';
import instaLogo from '../assets/Imagens/Logo Instagram.png';
import youtubeLogo from '../assets/Imagens/Logo YouTube.png';
import linkedinLogo from '../assets/Imagens/Logo LinkedIn.png';

/*
  Componente Footer
  -----------------
  - Renderiza o rodapé do site, incluindo a logo e os links das redes sociais.
  - Cada link que não redireciona externamente chama window.alerta() para exibir o alerta global.
*/
const Footer = () => {
  return (
    <footer>
      <Logo className='logo' alt="Logotipo G&P Agência Espacial" />
      <nav className="redessociais">
        <ul>
          <li>
            <a onClick={() => window.alerta()}>
              <img src={xLogo} alt="X" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gepprojetosesistemas" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src={instaLogo} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/GPProjetoseSistemas" target="_blank" rel="noreferrer" aria-label="YouTube">
              <img src={youtubeLogo} alt="YouTube" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/g&p" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
