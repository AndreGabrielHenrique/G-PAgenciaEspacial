import React from 'react';
import useSendNewsletter from '../hooks/useSendNewsletter';
import '../css/Newsletter.css';

/*
  Componente Newsletter
  ----------------------
  - Renderiza um formulário para cadastro de e-mail para a newsletter.\n
  - Utiliza o hook useSendNewsletter para gerenciar a validação e envio do formulário.\n
  - Ao submeter, o hook chama window.construcao() com a mensagem apropriada para exibir o alerta global.
*/
const Newsletter = () => {
  const { newsletterRef, handleSubmit } = useSendNewsletter();

  return (
    <section className="newsletter">
      <h2>Receba as novidades sobre G&P Agência Espacial</h2>
      <form
        ref={newsletterRef}
        name="newsletter"
        id="newsletter"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="email@exemplo.com"
          className="email"
          name="email"
          id="email"
        />
        <button type="submit" id="enviar">Enviar</button>
      </form>
    </section>
  );
};

export default Newsletter;
