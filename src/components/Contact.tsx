import React from 'react';
import '../../public/Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-content">
        <h1>Contact</h1>
        <div className="contact-info">
          <div className="contact-form">
            <h2>Connect with me</h2>
            <p>
            Se quiser saber mais sobre mim ou meu trabalho, ou se quiser apenas dar um oi, me mande uma mensagem. Eu adoraria ouvir de você.
            </p>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
              <label>Message</label>
              <textarea placeholder="Enter your message"></textarea>
              <button type="submit">Submit</button>
            </form>
            <a href="mailto:leu-profissional@hotmail.com" className="email-direct-link">
              Send me email directly
            </a>
          </div>
          <div className="contact-details">
            <div>
              <h3>Email</h3>
              <p>
                <a href="mailto:leu-profissional@hotmail.com">LEU-PROFISSIONAL@HOTMAIL.COM</a>
              </p>
            </div>
            <div>
              <h3>Address</h3>
              <p>RIO DE JANEIRO, RJ</p>
              <p>BRASIL</p>
            </div>
            <div>
              <h3>Social</h3>
              <div className="social-icons">
                <a href="#"><i className="fab fa-stack-overflow"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;