import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contato</h2>
      <form>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Enviar</button>
      </form>
      <div className="social-media">
        <a href="https://linkedin.com/in/seu-usuario">LinkedIn</a>
        <a href="https://github.com/seu-usuario">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;
