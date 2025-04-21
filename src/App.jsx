import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Newsletter from './components/Newsletter';
import Equipe from './components/Equipe';
import Noticias from './components/Noticias';
import Footer from './components/Footer';
import Alert from './components/Alert';
import Propulsores from './components/Propulsores';
import './styles/global.sass';

/*
  Componente App
  -------------
  - É o componente principal que reúne todos os demais componentes do projeto.
  - Define globalmente a função window.alerta, que chama o método showAlert do componente Alert (via ref), permitindo exibir alertas de forma global.
  - Renderiza os componentes Header, Propulsores, Newsletter, Equipe, Noticias e Footer, além do componente Alert que fica disponível globalmente.
*/
function App() {
  const alertRef = useRef();

  useEffect(() => {
    // Define a função global window.alerta para exibir alertas com a mensagem passada;
    // se nenhuma mensagem for passada, usa "Em construção..."
    window.alerta = (msg) => {
      const mensagem = msg ? msg : "Em construção...";
      console.log("Chamando alerta com mensagem:", mensagem);
      alertRef.current?.showAlert(mensagem);
    };
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Propulsores />
        <Newsletter />
        <Equipe />
        <Noticias />
      </main>
      <Footer />
      {/* Componente global de alerta, controlado via ref (alertRef) */}  
      <Alert ref={alertRef} />
    </div>
  );
}

export default App;
