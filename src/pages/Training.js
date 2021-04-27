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
          id: 7,
          name: "Scrum Foundation Professional Certificate SFPC",
          entity: "CertiProf",
          emission: "abril 2021",
          credential_id: "62143937",
          credential_storage:
            "https://drive.google.com/file/d/1I4eKCTRLrrChshqYgy8xuwkIQ_qoLjyi/view?usp=sharing",
        },
        {
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
        },
        {
          id: 3,
          name:
            "Gestión de Proyectos con Metodologías Ágiles y Enfoques en Lean",
          entity:
            "Conecta Empleo. Programa de Formación Digital de Fundación Telefónica",
          emission: "marzo 2021",
          credential_id: "3c948ff4-ada1-4384-8ba5-563122add5c3",
          credential_storage:
            "https://drive.google.com/file/d/12Tt2abcTpnCBA0gcwthTNhG4mnmVGg3i/view?usp=sharing",
        },
        {
          id: 2,
          name: "Scrum Fundamentals Certified (SFC)",
          entity: "SCRUMstudy - Accreditation Body for Scrum and Agile",
          emission: "marzo 2021",
          credential_id: "835898",
          credential_storage:
            "https://www.scrumstudy.com/certification/verify?type=SFC&number=835898",
        },
        {
          id: 1,
          name: "Ingerniería de Sistemas",
          entity: "Universidad Nacional Pedro Ruiz - Lambayeque - Perú",
          emission: "marzo 2016",
          credential_id: "",
          credential_storage: "",
        },
      ],
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="Badges_list">
          <div className="Badges__container"></div>
          <Education certificates={this.state.certificates}></Education>;
        </div>
      </React.Fragment>
    );
  }
}

export default Training;
