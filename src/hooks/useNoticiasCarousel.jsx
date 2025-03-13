import { useEffect } from "react";

/*
  Hook useNoticiasCarousel
  -------------------------
  - Gerencia a lógica do carrossel de notícias.
  - Seleciona elementos do DOM (contêiner, slides, botões, indicadores) e calcula o offset para centralizar o slide ativo.
  - Configura eventos para os botões de navegação e os indicadores (cliques) e ajusta o carrossel ao redimensionar a janela.\n
  - Inicia um loop automático que avança o slide a cada 10 segundos.\n
  - Adiciona eventos para pausar o loop ao passar o mouse sobre o contêiner e retomá-lo quando o mouse sair.\n
  - Retorna uma função de cleanup para remover os event listeners e limpar o intervalo.
*/
const useNoticiasCarousel = () => {
  useEffect(() => {
    // Seleciona os elementos do carrossel a partir do DOM
    const paineldenoticias = document.querySelector(".paineldenoticias");
    const roldenoticias = document.querySelector(".roldenoticias");
    const girarnoticias = document.querySelector(".girarnoticias");
    const noticiaElements = document.querySelectorAll(".noticia");
    const proxima = document.querySelector(".proxima");
    const anterior = document.querySelector(".anterior");
    const apontarnoticias = document.querySelectorAll(".apontarnoticia");

    let noticiaatual = 0;
    const totalNoticias = noticiaElements.length;
    let intervalId;

    // Função para centralizar o slide ativo
    const trocarnoticia = () => {
      if (!roldenoticias || !girarnoticias || noticiaElements.length === 0) return;
      const noticiaativa = noticiaElements[noticiaatual];
      const largurarol = roldenoticias.offsetWidth;
      const larguranoticia = noticiaativa.offsetWidth;
      const noticiaesquerda = noticiaativa.offsetLeft;
      const offsetrol = largurarol / 2 - (noticiaesquerda + larguranoticia / 2);
      girarnoticias.style.transform = `translateX(${offsetrol}px)`;

      // Atualiza a classe 'ativa' em cada slide para destacar o slide atual
      noticiaElements.forEach((el, index) => {
        el.classList.toggle("ativa", index === noticiaatual);
      });
      // Atualiza os indicadores (pontos) para refletir o slide ativo
      apontarnoticias.forEach((dot, index) => {
        dot.classList.toggle("ativa", index === noticiaatual);
      });
    };

    // Função que inicia o loop automático do carrossel
    const iniciarIntervalo = () => {
      intervalId = setInterval(() => {
        noticiaatual = (noticiaatual + 1) % totalNoticias;
        trocarnoticia();
      }, 10000);
    };

    // Função para parar o loop automático
    const pararIntervalo = () => {
      clearInterval(intervalId);
    };

    // Configura os eventos dos botões de navegação
    anterior?.addEventListener("click", () => {
      noticiaatual = (noticiaatual - 1 + totalNoticias) % totalNoticias;
      trocarnoticia();
    });

    proxima?.addEventListener("click", () => {
      noticiaatual = (noticiaatual + 1) % totalNoticias;
      trocarnoticia();
    });

    // Configura o clique nos indicadores (pontos) para navegar manualmente
    apontarnoticias.forEach((dot) => {
      dot.addEventListener("click", () => {
        noticiaatual = parseInt(dot.getAttribute("data-index"));
        trocarnoticia();
      });
    });

    // Recalcula a centralização ao redimensionar a janela
    window.addEventListener("resize", trocarnoticia);

    // Pausa o loop automático quando o mouse estiver sobre o contêiner e retoma quando sair
    paineldenoticias?.addEventListener("mouseover", pararIntervalo);
    paineldenoticias?.addEventListener("mouseout", iniciarIntervalo);

    // Ajusta a centralização inicial após um pequeno atraso para garantir que o layout esteja renderizado
    setTimeout(trocarnoticia, 100);
    iniciarIntervalo();

    // Cleanup: remove os event listeners e limpa o intervalo quando o componente for desmontado
    return () => {
      pararIntervalo();
      window.removeEventListener("resize", trocarnoticia);
      paineldenoticias?.removeEventListener("mouseover", pararIntervalo);
      paineldenoticias?.removeEventListener("mouseout", iniciarIntervalo);
    };
  }, []);
};

export default useNoticiasCarousel;
