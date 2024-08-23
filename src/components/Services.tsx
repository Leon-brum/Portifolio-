import React from "react";
import '../../public/Services.css';

const Services = () => {
  return (
    <div id="services" className="services-container">
      <h1>Serviços</h1>
      <h2>O que eu ofereço</h2>
      <div className="services">
        <div className="service">
          <img src="" alt="icone frontend" />
          <h3>Frontend Development</h3>
          <p>aqui fica tudo sobre os serviços</p>
        </div>
        <div className="service">
          <img src="" alt="icone backend" />
          <h3>Backend Development</h3>
          <p>aqui fica tudo sobre os serviços</p>
        </div>
      </div>
    </div>
  )
}

export default Services;