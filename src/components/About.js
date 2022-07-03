import React from "react";
import "./styles/About.css";

class About extends React.Component {
  handleRefContact = (e) => {
    document.getElementById("button-contact").click();
  };
  render() {
    return (
      <div>
        <div className="jumbotron text-justify">
          <h2 className="">Sobre mí</h2>
          <p className="lead">
            Egresado de la carrera de Ingeniería de Sistemas
            en la Universidad Nacional Pedro Ruiz Gallo - Lambayeque - Perú, me
            desenvuelvo como desarrollador web con técnologías tales como
            Laravel, Angular JS y React.js, sin embargo me considero
            como un apasionado por el aprendizaje y las tecnologías, me gusta resolver
            problemas y afrontar nuevos retos.
            <span role="img" aria-label="laptop">
              {" "}
              👨🏽‍💻
            </span>
          </p>

          <br />
          <h2 className="">Habilidades</h2>
          <ul>
            <li className="lead About__li">Autodidacta</li>
            <li className="lead About__li">
              Excelente colaboración y trabajo en equipo: capacidad de trabajar
              de manera transversal
            </li>
            <li className="lead About__li">
              Facilidad de aprendizaje de nuevos lenguajes y tecnologías
            </li>
            <li className="lead About__li">
              Conocimientos en desarrollo ágil - SCRUM
            </li>
            <li className="lead About__li">
              Experiencia en desarrollo de API’s en Laravel
            </li>
            <li className="lead About__li">
              Control de versiones: Git, Github
            </li>
          </ul>
          <p className="lead">
            <button
              onClick={this.handleRefContact}
              type="button"
              className="btn btn-primary btn-lg ButtonContact__animation"
            >
              ¿Tienes algún proyecto?
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
