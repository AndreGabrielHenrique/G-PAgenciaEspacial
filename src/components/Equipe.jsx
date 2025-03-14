import React from 'react';
import '../css/Equipe.css';
import equipeImg from '../assets/Imagens/Imagem.png';

/*
  Componente Equipe
  ------------------
  - Renderiza a seção que apresenta informações sobre a equipe.
  - Possui um bloco de texto (com título e parágrafo) e um bloco com uma imagem ilustrativa.
  - O layout utiliza Flexbox para distribuir o texto e a imagem.
*/
const Equipe = () => {
  return (
    <section className="equipe">
      {/* Bloco de texto sobre a equipe */}
      <div className="texto">
        <h3>Nossa Equipe</h3>
        <p>
          Nossa equipe é composta por profissionais dedicados e apaixonados pelo que fazem. Cada membro traz uma combinação única de habilidades e experiências que
          se complementam, formando um time forte e coeso. Valorizamos a colaboração, a inovação e o compromisso com a excelência em tudo o que fazemos. Juntos, enfrentamos
          desafios com criatividade e perseverança, sempre focados em alcançar os melhores resultados para nossos clientes e parceiros. Acreditamos que o sucesso é construído
          a partir de um trabalho em equipe sólido, onde cada voz é ouvida e cada ideia é valorizada. Estamos aqui para crescer juntos e fazer a diferença!
        </p>
      </div>
      
      {/* Bloco com a imagem ilustrativa da equipe */}
      <aside>
        <img src={equipeImg} alt="Foto ilustrativa" />
      </aside>
    </section>
  );
};

export default Equipe;
