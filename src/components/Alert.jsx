import React, { 
  forwardRef, 
  useImperativeHandle, 
  useRef, 
  useState, 
  useEffect 
} from 'react';
import '../css/Alert.css';

/*
  Componente Alert
  ----------------
  - Renderiza um alerta global que cobre toda a tela.
  - Permite exibir e ocultar o alerta via métodos expostos (showAlert, hideAlert) usando a ref.
  - Quando o alerta é exibido, a rolagem vertical é travada (body { overflow: hidden }).
  - Ao fechar, a rolagem é liberada (body { overflow: auto }).
  - O alerta fecha ao clicar no fundo ou no próprio texto.
*/
const Alert = forwardRef((props, ref) => {
  // Estado que armazena a mensagem do alerta; inicia com "Em construção..." como valor padrão.
  const [message, setMessage] = useState("Em construção...");
  // Ref para acessar o elemento DOM que contém o alerta.
  const alertRef = useRef(null);

  // Expondo métodos para o componente pai (por exemplo, App.jsx) usando useImperativeHandle.
  useImperativeHandle(ref, () => ({
    // showAlert: Atualiza a mensagem (usa valor padrão se msg for falsy) e trava o scroll,
    // em seguida adiciona a classe 'ativo' para exibir o alerta.
    showAlert(msg) {
      setMessage(msg ? msg : "Em construção...");
      document.body.style.overflow = 'hidden'; // trava a rolagem vertical
      setTimeout(() => {
        if (alertRef.current) {
          alertRef.current.classList.add('ativo');
        }
      }, 0);
    },
    // hideAlert: Remove a classe 'ativo' para ocultar o alerta e destrava o scroll.
    hideAlert() {
      if (alertRef.current) {
        alertRef.current.classList.remove('ativo');
      }
      document.body.style.overflow = 'auto';
    },
  }));

  // useEffect: Adiciona um listener global que fecha o alerta se o usuário clicar no fundo.
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (alertRef.current && e.target === alertRef.current) {
        alertRef.current.classList.remove('ativo');
        document.body.style.overflow = 'auto';
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Função para fechar o alerta ao clicar no conteúdo (tanto no container quanto no texto)
  const closeAlert = () => {
    if (alertRef.current) {
      alertRef.current.classList.remove('ativo');
    }
    document.body.style.overflow = 'auto';
  };

  // Renderiza o alerta com fundo, conteúdo e mensagem
  return (
    <div ref={alertRef} id="fundoalerta" className="fundoalerta">
      <div className="alerta" onClick={closeAlert}>
        <p className="aviso" onClick={closeAlert}>{message}</p>
      </div>
    </div>
  );
});

export default Alert;
