// src/pages/Contato.jsx
import './Contato.css'

function Contato() {
    return (
      <section className="contato">
        <h1>Entre em Contato</h1>
        <p>Preencha o formulário ou nos envie uma mensagem pelas redes sociais.</p>
        <form>
          <label>Nome:</label>
          <input type="text" placeholder="Seu nome" />
  
          <label>Email:</label>
          <input type="email" placeholder="Seu email" />
  
          <label>Mensagem:</label>
          <textarea placeholder="Digite sua mensagem..."></textarea>
  
          <button type="submit">Enviar</button>
        </form>
      </section>
    );
  }
  
  export default Contato;