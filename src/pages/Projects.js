import React from "react";
import logoSolticrm from "../images/briefcase/solticrm.webp";
import logoSistemalotes from "../images/briefcase/sistemalotes.webp";
import logoClassroom from "../images/briefcase/classroom.webp";
import logoWebbes from "../images/briefcase/web_bes.webp";
import logoBesefactura from "../images/briefcase/bes_efactura.webp";
import logoPersonal from "../images/briefcase/personal.webp";
import logoUlearning from "../images/briefcase/ulearning.webp";
import logoCodecix from "../images/briefcase/codecix.webp";
import logoMultirepuestosJa from "../images/briefcase/multirepuestos_ja.webp";
import logoColegioJuanAbad from "../images/briefcase/colegiojuanabad.webp";
import photoCas from "../images/briefcase/cas.webp";

import logoCentauri from "../images/customers/logo_centauri.webp";
import logoInndatsys from "../images/customers/logo_inndatsys.webp";
import logoJa from "../images/customers/logo_ja.webp";
import logoJuanAbad from "../images/customers/logo_juan_abad.webp";
import logoSolti from "../images/customers/logo_solti.webp";
import logoUss from "../images/customers/logo_uss.webp";
import logoCas from "../images/customers/logo_cas.webp";

import Briefcase from "../components/Briefcase";
import Customer from "../components/Customer";
import Service from "../components/Service";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      projects: [],
      customers: [],
    };
  }
  componentDidMount() {
    this.setState({
      projects: [
        {
          id: 7,
          name: "Plataforma académica - U-Learning",
          image: logoUlearning,
          detailLists: [
            "Laravel, Angular, PostgreSQL, Docker",
            "E-commerce de cursos virtuales y presenciales",
            "Plataforma de aprendizaje para estudiantes",
            "Sistema académico administrativo",
          ],
          techs: ["Laravel", "Angular", "PostgreSQL"],
          footer: "",
          demo: "https://ulearning.com.pe/",
        },
        {
          id: 8,
          name: "Multirepuestos J&A",
          image: logoMultirepuestosJa,
          detailLists: [
            "Laravel, Javascript, PostgreSQL",
            "Venta de repuestos de autos",
          ],
          techs: ["Laravel", "PostgreSQL"],
          footer: "",
          demo: "http://multirepuestos-ja.com/",
        },
        {
          id: 3,
          name: "Sistema Aulas Virtuales",
          image: logoClassroom,
          detailLists: [
            "Laravel 6, Vue.js, MySQL",
            "Single Page Application",
            "Sistema de gestión escolar",
            "Web service para consumo proyecto SPA Vue.js",
          ],
          techs: ["Laravel 6", "Vue.js", "Single Page Application", "API"],
          footer: "Sistema web administrativo para gestión escolar",
        },
        {
          id: 1,
          name: "Solti-CRM",
          image: logoSolticrm,
          detailLists: [
            "Laravel 6, MySQL",
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
            "Laravel 6, Vue.js, MySQL",
            "Gestión de contratos, pagos y facturación electrónica",
            "Suscripciones a correo electrónico",
            "API para consumo e-commerce",
          ],
          techs: ["Laravel 6", "Vue.js", "Bootstrap 4", "Ecommerce", "API"],
          footer:
            "Sistema web administrativo y ecommerce para gestión de proyectos inmobiliarios, gestión de contratos, pago de cuotas y facturación electrónica",
        },
        {
          id: 2,
          name: "Web - Colegio Juan Abad",
          image: logoColegioJuanAbad,
          detailLists: ["Laravel 6, Bootstrap 4"],
          techs: ["Laravel 6", "Bootstrap 4"],
          footer:
            "Página web informativa conectada a un sistema interno de aula virtual",
          demo: "https://colegiojuanabad.com/",
        },
        {
          id: 4,
          name: "Punto de venta + Facturación electrónica",
          image: logoBesefactura,
          detailLists: [
            "API Laravel 6, Vue.js, MySQL",
            "Facturación electrónica UBL 2.1",
            "Web service para consumo proyecto SPA Vue.js",
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
          detailLists: ["Página informativa de servicios"],
          techs: ["Laravel 6", "Javascript", "Bootstrap 4"],
          footer: "Sistema web administrativo para gestión escolar",
        },
        {
          id: 6,
          name: "Portafolio personal",
          image: logoPersonal,
          detailLists: ["React.js", "Web personal y portafolio"],
          techs: ["React.js"],
          footer: "",
        },
        // {
        //   id: 7,
        //   name: "Gestor de tareas",
        //   image: logoTodo,
        //   detailLists: [
        //     "React.js",
        //     "Aplicación para gestionar tareas con almacenamiento local",
        //   ],
        //   techs: ["React.js"],
        //   footer: "",
        //   demo: "https://alvaro-barrera.github.io/react-todo-app/",
        // },

        {
          id: 8,
          name: "Codecix - Servicios profesionales",
          image: logoCodecix,
          detailLists: [
            "Next.js",
            "Servicios profesionales de desarrollos web",
          ],
          techs: ["Next.js"],
          footer: "",
          // demo: "https://codecix.com/",
        },
        {
          id: 9,
          name: "I.E 10796 Carlos Augusto Salaverry",
          image: photoCas,
          detailLists: [
            "HMTL, CSS, JS",
            "Página información para el VI Torneo Regional De Ajedrez",
          ],
          techs: ["HMTL", "CSS", "JS"],
          footer: "",
          demo: "https://colegiosalaverry.com/",
        },
      ],
      customers: [
        {
          logo: logoCentauri,
          text: "Centauri Technologies Corp",
          link: "https://centauritech.com/",
          class: "bg-black",
        },
        {
          logo: logoInndatsys,
          text: "INNDATSYS",
          link: "https://inndatsys.com/",
        },
        {
          logo: logoJa,
          text: "Multirepuestos J&A",
          link: "https://multirepuestos-ja.com/",
        },
        {
          logo: logoJuanAbad,
          text: "Colegio Juan Abad",
          link: "https://colegiojuanabad.com/",
        },
        {
          logo: logoSolti,
          text: "SOLTI PERÚ",
          link: "https://soltiperu.com/",
        },
        {
          logo: logoUss,
          text: "USS",
          link: "https://ulearning.com.pe/",
        },
        {
          logo: logoCas,
          text: "I.E 10796 Carlos Augusto Salaverry",
          link: "https://colegiosalaverry.com/",
        },
      ],
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="Badges_list">
          <Service title="Servicios"></Service>
          <Customer customers={this.state.customers}></Customer>
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
