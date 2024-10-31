const newsletter = document.getElementById('newsletter')
const fundoalerta = document.getElementById("fundoalerta")
const enviar = document.getElementById("enviar")
const aviso = document.querySelector(".aviso")
const fechar = document.getElementsByClassName("fechar")[0]

enviar.onclick=()=>
{
    fundoalerta.style.display = "block"
}

fechar.onclick=()=>
{
    fundoalerta.style.display = "none"
}

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
    enviaremail()
})

enviaremail=()=>
{
    const email = document.getElementById('email')

    if (email.value === "")
    {
        aviso.innerHTML = 'E-mail vazio, preencha.'
    }
    else if (!emailvalido(email.value))
    {
        aviso.innerHTML = 'E-mail incorreto, corrija.'
    }
    else
    {
        aviso.innerHTML = 'E-mail cadastrado!'
        document.getElementById("email").value = ""
    }
}

emailvalido=(email)=>
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}