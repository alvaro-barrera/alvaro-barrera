import React from "react";
import logoSolticrm from "../images/briefcase/solticrm.PNG";
import logoSistemalotes from "../images/briefcase/sistemalotes.PNG";
import logoClassroom from "../images/briefcase/classroom.PNG";
import logoWebbes from "../images/briefcase/web_bes.PNG";
import logoBesefactura from "../images/briefcase/bes_efactura.PNG";
import Briefcase from "../components/Briefcase";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      projects: [],
    };
  }
  componentDidMount() {
    this.setState({
      projects: [
        {
          id: 1,
          name: "Solti-CRM",
          image: logoSolticrm,
          detailLists: [
            "Aplicativo web hecho en Laravel 6",
            "Autenticación con redes sociales",
            "Suscripciones a correo electrónico",
            "Servicio web service para consumo móvil",
          ],
          techs: ["Laravel 6", "Javascript", "Bootstrap 4"],
          footer:
            "Aplicativo web y móvil para la Gestión de las Relaciones con Clientes administrando la información de los clientes para administrar cuentas, leads y oportunidades de ventas en un único local",
        },
        {
          id: 2,
          name: "Sistema para lotes y viviendas",
          image: logoSistemalotes,
          detailLists: [
            "Aplicativo web hecho en Laravel 6 y Vue.js",
            "Complemente e-commerce para gestión de pagos e integración con pasarelas de pagos",
            "Suscripciones a correo electrónico",
            "Servicio web service para consumo e-commerce",
          ],
          techs: ["Laravel 6", "Vue.js", "Bootstrap 4", "Ecommerce", "API"],
          footer:
            "Sistema web administrativo y ecommerce para gestión de proyectos inmobiliarios, gestión de contratos, pago de cuotas y facturación electrónica",
        },
        {
          id: 3,
          name: "Sistema Aulas Virtuales",
          image: logoClassroom,
          detailLists: [
            "Aplicativo web hecho en Laravel 6 y Vue.js",
            "Desarrollo Single Page Application",
            "Servicio web service para consumo proyecto Vue.js",
          ],
          techs: ["Laravel 6", "Vue.js", "Single Page Application", "API"],
          footer: "Sistema web administrativo para gestión escolar",
        },
        {
          id: 4,
          name: "Punto de venta + Facturación electrónica",
          image: logoBesefactura,
          detailLists: [
            "Aplicativo web hecho en Laravel 6 y Vue.js",
            "Desarrollo Single Page Application",
            "Servicio web service para consumo proyecto Vue.js",
          ],
          techs: [
            "Laravel 6",
            "Vue.js",
            "Bootstrap 4",
            "API",
            "Facturación Electrónica",
            "UBL 2.1",
          ],
          footer: "Sistema web administrativo para gestión escolar",
        },
        {
          id: 5,
          name: "Web - Desarrollo de Software",
          image: logoWebbes,
          detailLists: [
            "Aplicativo web hecho en Laravel 6 y Vue.js",
            "Desarrollo Single Page Application",
            "Servicio web service para consumo proyecto Vue.js",
          ],
          techs: ["Laravel 6", "Javascript", "Bootstrap 4"],
          footer: "Sistema web administrativo para gestión escolar",
        },
      ],
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="Badges_list">
          <div className="Badges__container"></div>
          <Briefcase
            title={"Proyectos"}
            projects={this.state.projects}
          ></Briefcase>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
