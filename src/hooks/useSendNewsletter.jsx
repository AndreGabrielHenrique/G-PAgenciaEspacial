import { useRef } from 'react';

/*
  Hook useSendNewsletter
  -----------------------
  - Cria uma referência para o formulário da newsletter.
  - Define funções para validar o e-mail e para processar o envio.
  - Usa uma expressão regular corrigida para validar o e-mail.
  - Dependendo do resultado da validação, chama window.alerta() com a mensagem apropriada para exibir o alerta global.
  - A função handleSubmit previne o comportamento padrão do formulário e chama a função de envio.
*/
function useSendNewsletter() {
  const newsletterRef = useRef(null);

  // Função de validação de e-mail com expressão regular corrigida.
  const emailvalido = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(([a-zA-Z0-9\\-]+\.)+[a-zA-Z]{2,}))$/.test(email);
  };

  // Função que processa o envio do e-mail e chama window.alerta com a mensagem apropriada.
  const enviaremail = () => {
    const inseriremail = newsletterRef.current?.querySelector('#email');
    if (!inseriremail) return;
    const email = inseriremail.value.trim();

    if (email === "") {
      window.alerta && window.alerta("E-mail vazio, preencha.");
    } else if (!emailvalido(email)) {
      window.alerta && window.alerta("E-mail incorreto, corrija.");
    } else {
      window.alerta && window.alerta("E-mail cadastrado!");
      inseriremail.value = "";
    }
  };

  // Função de submit do formulário: previne o comportamento padrão e chama enviaremail.
  const handleSubmit = (event) => {
    event.preventDefault();
    enviaremail();
  };

  return { newsletterRef, handleSubmit };
}

export default useSendNewsletter;
