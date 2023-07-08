import React from "react";
import Education from "../components/Education";

class Training extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      certificates: [],
    };
  }
  componentDidMount() {
    this.setState({
      certificates: [
        {
          id: 13,
          name: "Curso Profesional de Arquitectura de Software",
          entity: "Platzi",
          emission: "abril 2023",
          credential_id: "d196ea91-49f0-4a63-83f1-9ad3ca4c126f",
          credential_storage:
            "https://platzi.com/p/alvaro-barrera300/curso/1248-pro-arquitectura/diploma/detalle/",
        },
        {
          id: 11,
          name: "Ingeniería de Sistemas",
          entity: "Universidad Nacional Pedro Ruiz - Lambayeque - Perú",
          emission: "2016 - 2021",
          credential_id: "",
          credential_storage: "",
        },
        {
          id: 10,
          name: "RUTA DE APRENDIZAJE - DESARROLLO WEB BACKEND CON PHP",
          entity: "Platzi",
          emission: "julio 2021",
          credential_id: "79a60db0-df6d-4f10-bb06-d22e822f8644",
          credential_storage:
            "https://platzi.com/p/alvaro-barrera300/ruta/10-desarrollo-php/diploma/detalle/",
        },
        {
          id: 9,
          name: "CURSO PROFESIONAL DE ANGULAR",
          entity: "Platzi",
          emission: "junio 2021",
          credential_id: "b01dbdf7-5693-4acf-8685-b081accb4c53",
          credential_storage:
            "https://drive.google.com/file/d/1Jr8SlLGrzcLzcyCLKXbKQsEcJJM50595/view?usp=sharing",
        },
        {
          id: 8,
          name: "CURSO PROFESIONAL DE GIT Y GITHUB",
          entity: "Platzi",
          emission: "junio 2021",
          credential_id: "c9ef0eaf-068f-4f8c-938d-267bbf6813b4",
          credential_storage:
            "https://drive.google.com/file/d/1b9kt2Hwo9FJX-K_dteoSlPuk7QVSCPjY/view?usp=sharing",
        },
        {
          id: 7,
          name: "Scrum Foundation Professional Certificate SFPC",
          entity: "CertiProf",
          emission: "abril 2021",
          credential_id: "62143937",
          credential_storage:
            "https://drive.google.com/file/d/1I4eKCTRLrrChshqYgy8xuwkIQ_qoLjyi/view?usp=sharing",
        },
        /*{
          id: 6,
          name: "Fundamentos de la gestión de proyectos",
          entity: "LinkedIn",
          emission: "abril 2021",
          credential_id: "AVMTPsTj5bCFqh4mW3mueTuSLQh7",
          credential_storage:
            "https://drive.google.com/file/d/1BkXzdn1FjN4FcJLu31VWVexTqm6TmUcD/view?usp=sharing",
        },
        {
          id: 5,
          name: "Programación con JavaScript",
          entity:
            "Conecta Empleo. Programa de Formación Digital de Fundación Telefónica",
          emission: "abril 2021",
          credential_id: "41b0ba76-ba19-42ae-9ac3-a4f6822bebab",
          credential_storage:
            "https://drive.google.com/file/d/1BC7wxDbZzgeOKoOz1bjdKB5JSO6TUks_/view?usp=sharing",
        },
        {
          id: 4,
          name: "Certificación en Comercio Electrónico",
          entity: "Google Actívate",
          emission: "marzo 2021",
          credential_id: "835898",
          credential_storage:
            "https://drive.google.com/file/d/104c3NsFTKuIxHA14hTAp4jXyh5vkXzOk/view?usp=sharing",
        },*/
        {
          id: 3,
          name: "Gestión de Proyectos con Metodologías Ágiles y Enfoques en Lean",
          entity:
            "Conecta Empleo. Programa de Formación Digital de Fundación Telefónica",
          emission: "marzo 2021",
          credential_id: "3c948ff4-ada1-4384-8ba5-563122add5c3",
          credential_storage:
            "https://drive.google.com/file/d/12Tt2abcTpnCBA0gcwthTNhG4mnmVGg3i/view?usp=sharing",
        },
        /*{
          id: 2,
          name: "Scrum Fundamentals Certified (SFC)",
          entity: "SCRUMstudy - Accreditation Body for Scrum and Agile",
          emission: "marzo 2021",
          credential_id: "835898",
          credential_storage:
            "https://www.scrumstudy.com/certification/verify?type=SFC&number=835898",
        },*/
      ],
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="Badges_list">
          <div className="Badges__container"></div>
          <div className="pb-3 pt-5">
            <Education certificates={this.state.certificates}></Education>;
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Training;
