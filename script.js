const newsletter = document.getElementById('newsletter')
const fundoalerta = document.getElementById("fundoalerta")
const aviso = document.querySelector(".aviso")

window.onclick=(event)=>
{
    if (event.target == fundoalerta)
    {
        fundoalerta.style.display = "none"
    }
}

construcao=()=>
{
    fundoalerta.style.display = "block"
    aviso.innerHTML = 'Em construção...'
}
  
newsletter.addEventListener("submit", (event) =>
{
    event.preventDefault()
    fundoalerta.style.display = "block"
    enviaremail()
})

enviaremail=()=>
{
    const inseriremail = document.getElementById('email')
    const email = inseriremail.value.trim()

    if (email === "")
    {
        aviso.innerHTML = 'E-mail vazio, preencha.'
    }
    else if (!emailvalido(email))
    {
        aviso.innerHTML = 'E-mail incorreto, corrija.'
    }
    else
    {
        aviso.innerHTML = 'E-mail cadastrado!'
        inseriremail.value = ""
    }
}

emailvalido=(email)=>
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

document.addEventListener('DOMContentLoaded', ()=>
{
    const roldenoticias = document.querySelector('.roldenoticias')
    const girarnoticias = document.querySelector('.girarnoticias')
    const noticia = document.querySelectorAll('.noticia')
    const proxima = document.querySelector('.proxima')
    const anterior = document.querySelector('.anterior')
    const apontarnoticias = document.querySelectorAll('.apontarnoticia')
    let noticiaatual = 0
    const noticias = noticia.length

    const trocarnoticia=()=>
    {
        const noticiaativa = noticia[noticiaatual]
        const largurarol = roldenoticias.offsetWidth
        const larguranoticia = noticiaativa.offsetWidth
        const noticiaesquerda = noticiaativa.offsetLeft
        const offsetrol = largurarol / 2 - (noticiaesquerda + larguranoticia / 2)
        girarnoticias.style.transform = `translateX(${offsetrol}px)`

        noticia.forEach((noticia, listanoticias)=>
        {
            noticia.classList.toggle('ativa', listanoticias === noticiaatual)
        })
        apontarnoticias.forEach((apontarnoticia, listanoticias)=>
        {
            apontarnoticia.classList.toggle('ativa', listanoticias === noticiaatual)
        })
    }

    anterior.addEventListener('click', ()=>
    {
        noticiaatual = (noticiaatual - 1 + noticias) % noticias
        trocarnoticia()
    })

    proxima.addEventListener('click', ()=>
    {
        noticiaatual = (noticiaatual + 1) % noticias
        trocarnoticia()
    })

    apontarnoticias.forEach(apontarnoticia =>
    {
        apontarnoticia.addEventListener('click', ()=>
        {
            noticiaatual = parseInt(apontarnoticia.getAttribute('data-index'))
            trocarnoticia()
        })
    })

    window.addEventListener('resize', trocarnoticia)

    setInterval(()=>
    {
        noticiaatual = (noticiaatual + 1) % noticias
        trocarnoticia()
    }, 10000)
})