import React from "react";
import "./styles/About.css";
import Training from "../pages/Training";
import SectionTitle from "./SectionTitle";

const CardSection = ({ title, content, button }) => {
  return (
    <div className="separation pb-3">
      <SectionTitle title={title} />
      <div className="jumbotron text-justify border bg-white About__card mt-3">
        {content}
        {button && <div className="lead d-flex mt-3">{button}</div>}
      </div>
    </div>
  );
};

class About extends React.Component {
  handleRefContact = (e) => {
    document.getElementById("button-contact").click();
  };

  render() {
    const aboutContent = (
      <p className="lead">
        Egresado de la carrera de Ingeniería de Sistemas en la Universidad
        Nacional Pedro Ruiz Gallo - Lambayeque - Perú, me desenvuelvo como
        ingeniero de software con tecnologías tales como Ruby on Rails, Laravel,
        Angular y Docker, sin embargo me considero como un apasionado por el
        aprendizaje y las tecnologías, me gusta resolver problemas y afrontar
        nuevos retos{" "}
        <span role="img" aria-label="laptop">
          👨🏽‍💻
        </span>
      </p>
    );

    const skillsContent = (
      <ul>
        <li className="lead About__li">Autodidacta</li>
        <li className="lead About__li">
          Excelente colaboración y trabajo en equipo: capacidad de trabajar de
          manera transversal
        </li>
        <li className="lead About__li">
          Facilidad de aprendizaje de nuevos lenguajes y tecnologías
        </li>
        <li className="lead About__li">Conocimientos en desarrollo ágil</li>
        <li className="lead About__li">
          Experiencia en desarrollo e integración de API’s
        </li>
        <li className="lead About__li">
          Migración de sistemas legacy, trabajo con microservicios y testing
        </li>
        <li className="lead About__li">
          Control de versiones: Git, Github, Gitlab con GitFlow
        </li>
      </ul>
    );
    return (
      <div>
        <CardSection
          title="Sobre mí"
          content={aboutContent}
          button={
            <a
              href="https://www.linkedin.com/in/alvaro-barrera"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-primary btn-lg"
            >
              Ver perfil
            </a>
          }
        />

        <CardSection
          title="Habilidades"
          content={skillsContent}
          button={
            <button
              onClick={this.handleRefContact}
              type="button"
              className="btn btn-primary btn-lg"
            >
              Empieza a trabajar conmigo
            </button>
          }
        />
        <Training />
      </div>
    );
  }
}

export default About;
