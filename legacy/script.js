// script.js - Script JavaScript para funcionalidades do site (versão legada)
// Local: /legacy/script.js

// ================================================================
// SEÇÃO 1: DEFINIÇÃO DE VARIÁVEIS E CONSTANTES GLOBAIS
// ================================================================

// Referências aos elementos DOM principais
const newsletter = document.getElementById('newsletter') // Formulário de newsletter
const fundoalerta = document.getElementById("fundoalerta") // Overlay/modal de alerta
const aviso = document.querySelector(".aviso") // Elemento para exibir mensagens

// ================================================================
// SEÇÃO 2: FUNCIONALIDADE DO MODAL/ALERTA
// ================================================================

// Fecha o modal quando o usuário clica fora dele (no fundo escuro)
window.onclick = (event) => {
    if (event.target == fundoalerta) {
        fundoalerta.style.display = "none" // Oculta o modal
    }
}

// ================================================================
// SEÇÃO 3: FUNÇÕES GLOBAIS (ACESSÍVEIS VIA HTML onclick)
// ================================================================

// SOLUÇÃO DEFINITIVA: Função global acessível via onclick no HTML
// eslint-disable-next-line no-unused-vars
function construcao() {
    fundoalerta.style.display = "block" // Exibe o modal
    aviso.innerHTML = 'Em construção...' // Mensagem de funcionalidade não implementada
}

// Event listener para envio do formulário de newsletter
newsletter.addEventListener("submit", (event) => {
    event.preventDefault() // Previne recarregamento da página
    fundoalerta.style.display = "block" // Exibe o modal
    enviaremail() // Chama função de validação e processamento
})

// Função de validação de email (escopo local, não precisa ser global)
const enviaremail = () => {
    const inseriremail = document.getElementById('email') // Campo de input do email
    const email = inseriremail.value.trim() // Valor do campo sem espaços extras

    // Validação do email
    if (email === "") {
        aviso.innerHTML = 'E-mail vazio, preencha.' // Mensagem de erro para campo vazio
    } else if (!emailvalido(email)) {
        aviso.innerHTML = 'E-mail incorreto, corrija.' // Mensagem de erro para formato inválido
    } else {
        aviso.innerHTML = 'E-mail cadastrado!' // Mensagem de sucesso
        inseriremail.value = "" // Limpa o campo após envio bem-sucedido
    }
}

// Função de validação de formato de email (escopo local)
const emailvalido = (email) => {
    // Regex para validação de email - versão simplificada e mais legível
    // Removidos escapes desnecessários: \[ e \] dentro de character classes
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

// ================================================================
// SEÇÃO 4: CARROSSEL/ROTADOR DE NOTÍCIAS (executa após DOM carregado)
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos do carrossel
    const roldenoticias = document.querySelector('.roldenoticias') // Container principal
    const girarnoticias = document.querySelector('.girarnoticias') // Elemento que gira/transiciona
    const noticia = document.querySelectorAll('.noticia') // Array de itens de notícia
    const proxima = document.querySelector('.proxima') // Botão "próxima notícia"
    const anterior = document.querySelector('.anterior') // Botão "notícia anterior"
    const apontarnoticias = document.querySelectorAll('.apontarnoticia') // Indicadores/pontos de navegação
    let noticiaatual = 0 // Índice da notícia atualmente visível
    const noticias = noticia.length // Total de notícias disponíveis

    // Função para atualizar a exibição do carrossel
    const trocarnoticia = () => {
        const noticiaativa = noticia[noticiaatual] // Notícia atualmente ativa
        const largurarol = roldenoticias.offsetWidth // Largura do container
        const larguranoticia = noticiaativa.offsetWidth // Largura da notícia ativa
        const noticiaesquerda = noticiaativa.offsetLeft // Posição esquerda da notícia
        const offsetrol = largurarol / 2 - (noticiaesquerda + larguranoticia / 2) // Cálculo do deslocamento para centralizar

        // Aplica transformação CSS para mover o carrossel
        girarnoticias.style.transform = `translateX(${offsetrol}px)`

        // Atualiza classes CSS para indicar notícia ativa
        noticia.forEach((noticia, listanoticias) => {
            noticia.classList.toggle('ativa', listanoticias === noticiaatual)
        })
        
        // Atualiza indicadores de navegação
        apontarnoticias.forEach((apontarnoticia, listanoticias) => {
            apontarnoticia.classList.toggle('ativa', listanoticias === noticiaatual)
        })
    }

    // Event listeners para navegação manual
    anterior.addEventListener('click', () => {
        noticiaatual = (noticiaatual - 1 + noticias) % noticias // Navega circular para trás
        trocarnoticia() // Atualiza exibição
    })

    proxima.addEventListener('click', () => {
        noticiaatual = (noticiaatual + 1) % noticias // Navega circular para frente
        trocarnoticia() // Atualiza exibição
    })

    // Event listeners para indicadores/pontos de navegação
    apontarnoticias.forEach(apontarnoticia => {
        apontarnoticia.addEventListener('click', () => {
            // Obtém índice do data-attribute e converte para número
            noticiaatual = parseInt(apontarnoticia.getAttribute('data-index'))
            trocarnoticia() // Atualiza exibição
        })
    })

    // Redimensiona/ajusta carrossel quando janela é redimensionada
    window.addEventListener('resize', trocarnoticia)

    // Rotação automática do carrossel (10 segundos por slide)
    setInterval(() => {
        noticiaatual = (noticiaatual + 1) % noticias // Avança para próxima notícia
        trocarnoticia() // Atualiza exibição
    }, 10000) // 10000ms = 10 segundos
})