import React from "react";
import useNoticiasCarousel from "../hooks/useNoticiasCarousel";
import "../css/Noticias.css";
import fogueteImg from "../assets/Imagens/Image.png";
import mecanicoImg from "../assets/Imagens/Image-1.png";
import agenciaImg from "../assets/Imagens/Image-2.png";
import fisicaImg from "../assets/Imagens/Image-3.png";
import espacoImg from "../assets/Imagens/Image-4.png";

/*
  Componente Noticias
  --------------------
  - Renderiza um carrossel de notícias composto por várias figuras.\n
  - Cada figura contém uma imagem, um título e uma breve descrição.\n
  - O hook useNoticiasCarousel gerencia a navegação, centralização e loop automático do carrossel.\n
  - Os botões de navegação e os indicadores (pontos) permitem o controle manual do carrossel.\n
  - Links (como \"Sobre mais...\") chamam window.construcao() para exibir um alerta informando que a funcionalidade está em construção.
*/
const Noticias = () => {
  useNoticiasCarousel();

  return (
    <section className="noticias">
      <h3 className="noticiastitulo">Notícias</h3>
      <div className="paineldenoticias">
        <div className="roldenoticias">
          <div className="girarnoticias">
            <figure className="noticia ativa">
              <img src={fogueteImg} alt="Foguete" />
              <figcaption>
                <h3>Foguetes</h3>
                Um dos nossos foguetes conseguiu entrar em órbita sob a Terra.
              </figcaption>
            </figure>
            <figure className="noticia">
              <img src={mecanicoImg} alt="Mecânico" />
              <figcaption>
                <h3>Nossos mecânicos</h3>
                Nossos mecânicos fazem o melhor para manter os motores funcionando durante os testes.
              </figcaption>
            </figure>
            <figure className="noticia">
              <img src={agenciaImg} alt="G&P Agência Espacial" />
              <figcaption>
                <h3>Agência Espacial</h3>
                Junte-se conosco nesta viagem ao infinito e além.
              </figcaption>
            </figure>
            <figure className="noticia">
              <img src={fisicaImg} alt="Física" />
              <figcaption>
                <h3>História da Física</h3>
                Isaac Newton (1642-1727) foi um físico e matemático britânico, conhecido por formular as leis do movimento e da gravitação universal.
                <a id="fisica" onClick={() => window.construcao()}>Sobre mais...</a>
              </figcaption>
            </figure>
            <figure className="noticia">
              <img src={espacoImg} alt="Espaço" />
              <figcaption>
                <h3>O Espaço</h3>
                O Espaço, como tudo nesse mundo é perfeito...
                <a id="espaco" onClick={() => window.construcao()}>Sobre mais...</a>
              </figcaption>
            </figure>
          </div>
        </div>
        <button className="anterior">&#10094;</button>
        <button className="proxima">&#10095;</button>
        <div className="noticiasindicadores">
          <span className="apontarnoticia ativa" data-index="0"></span>
          <span className="apontarnoticia" data-index="1"></span>
          <span className="apontarnoticia" data-index="2"></span>
          <span className="apontarnoticia" data-index="3"></span>
          <span className="apontarnoticia" data-index="4"></span>
        </div>
      </div>
    </section>
  );
};

export default Noticias;
