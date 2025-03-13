import React from 'react';
import '../css/Logo.css';

/*
  Componente Logo
  ---------------
  - Renderiza o logotipo utilizando apenas elementos de texto e CSS, sem usar imagens.\n
  - O elemento com classe 'gp' exibe o texto \"G&P\" com destaque; a 'tagline' exibe o subtítulo \"Agência Espacial\".\n
  - Esse componente pode ser usado em Header, Footer ou em outras seções onde o logo seja necessário.
*/
const Logo = () => {
  return (
    <div className="logo">
      <div className="gp">
        G&amp;P
      </div>
      <div className="tagline">Agência Espacial</div>
    </div>
  );
};

export default Logo;
