import React from "react";
import "./styles/About.css";

class About extends React.Component {
  handleRefContact = (e) => {
    document.getElementById("button-contact").click();
  };
  render() {
    return (
      <div>
        <div className="jumbotron text-justify border bg-white">
          <h2 className="About__h2">Sobre mí</h2>

          <p className="lead">
            Egresado de la carrera de Ingeniería de Sistemas en la Universidad
            Nacional Pedro Ruiz Gallo - Lambayeque - Perú, me desenvuelvo como
            ingeniero de software con técnologías tales como Ruby on Rails,
            Laravel, Angular y Docker, sin embargo me considero como un
            apasionado por el aprendizaje y las tecnologías, me gusta resolver
            problemas y afrontar nuevos retos
            <span role="img" aria-label="laptop">
              {" "}
              👨🏽‍💻
            </span>
          </p>

          <br />
          <p className="lead">
            <a
              href="https://www.linkedin.com/in/alvaro-barrera"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-primary btn-lg"
            >
              Ver perfil
            </a>
          </p>
        </div>

        <div className="jumbotron text-justify border bg-white">
          <h2 className="About__h2">Habilidades</h2>
          <ul>
            <li className="lead About__li">Autodidacta</li>
            <li className="lead About__li">
              Excelente colaboración y trabajo en equipo: capacidad de trabajar
              de manera transversal
            </li>
            <li className="lead About__li">
              Facilidad de aprendizaje de nuevos lenguajes y tecnologías
            </li>
            <li className="lead About__li">Conocimientos en desarrollo ágil</li>
            <li className="lead About__li">
              Experiencia en desarrollo e integración de API’s
            </li>
            <li className="lead About__li">
              Trabajo con microservicios y migración de sistemas legacy
            </li>
            <li className="lead About__li">
              Control de versiones: Git, Github, Gitlab con GitFlow
            </li>
          </ul>
          <br />
          <p className="lead">
            <button
              onClick={this.handleRefContact}
              type="button"
              className="btn btn-primary btn-lg"
            >
              Empieza a trabajar conmigo
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
