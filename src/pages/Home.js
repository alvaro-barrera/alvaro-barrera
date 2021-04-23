import React from "react";
import BadgesList from "../components/BadgesList";
import "./styles/Badges.css";
import logoHtml5 from "../images/techs/html5.png";
import logoCss from "../images/techs/css.png";
import logoBootstrap from "../images/techs/bootstrap.png";
import logoJavascript from "../images/techs/javascript.png";
import logoReact from "../images/techs/react.png";
import logoVue from "../images/techs/vue.png";
import logoLaravel from "../images/techs/laravel.png";
import logoPhp from "../images/techs/php.svg";
import logoPython from "../images/techs/python.png";
import logoPostgresql from "../images/techs/postgresql.png";
import logoMysql from "../images/techs/mysql.png";
import logoGit from "../images/techs/git.png";
import logoGithub from "../images/techs/github.png";
import logoPostman from "../images/techs/postman.svg";
import logoNotion from "../images/techs/notion.png";
import logoTrello from "../images/techs/trello.png";
import logoPhpstorm from "../images/techs/phpstorm.png";
import logoVscode from "../images/techs/vsc.svg";
import logoSolticrm from "../images/briefcase/solticrm.PNG";
import logoSistemalotes from "../images/briefcase/sistemalotes.PNG";
import logoClassroom from "../images/briefcase/classroom.PNG";
import logoWebbes from "../images/briefcase/web_bes.PNG";
import logoBesefactura from "../images/briefcase/bes_efactura.PNG";
import Badge from "../components/Badge";
import About from "../components/About";
import Briefcase from "../components/Briefcase";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      techs: [],
      tools: [],
      projects: [],
    };
  }

  componentDidMount() {
    this.setState({
      techs: [
        {
          id: 1,
          image: logoHtml5,
          name: "HTML5",
        },
        {
          id: 2,
          image: logoCss,
          name: "CSS",
        },
        {
          id: 3,
          image: logoBootstrap,
          name: "Bootstrap",
        },
        {
          id: 4,
          image: logoJavascript,
          name: "Javascript",
        },
        {
          id: 5,
          image: logoReact,
          name: "React.js",
        },
        {
          id: 6,
          image: logoVue,
          name: "Vue.js",
        },
        {
          id: 7,
          image: logoLaravel,
          name: "Laravel",
        },
        {
          id: 8,
          image: logoPhp,
          name: "Php",
        },
        {
          id: 9,
          image: logoPython,
          name: "Python",
        },
        {
          id: 10,
          image: logoPostgresql,
          name: "PostgreSQL",
        },
        {
          id: 11,
          image: logoMysql,
          name: "MySQL",
        },
        {
          id: 12,
          image: logoGit,
          name: "Git",
        },
      ],
      tools: [
        {
          id: 1,
          image: logoGithub,
          name: "Github",
        },
        {
          id: 2,
          image: logoPostman,
          name: "Postman",
        },
        {
          id: 2,
          image: logoNotion,
          name: "Notion",
        },
        {
          id: 2,
          image: logoTrello,
          name: "Trello",
        },
        {
          id: 2,
          image: logoPhpstorm,
          name: "PhpStorm",
        },
        {
          id: 2,
          image: logoVscode,
          name: "VSCode",
        },
      ],
      projects: [
        {
          id: 1,
          name: "Solti-CRM",
          image: logoSolticrm,
          detailLists: [
            'Aplicativo web hecho en Laravel 6',
            'Autenticación con redes sociales',
            'Suscripciones a correo electrónico',
            'Servicio web service para consumo móvil'
          ],
          techs:[
            'Laravel 6',
            'Javascript',
            'Bootstrap 4',
          ],          
          footer: 'Aplicativo web y móvil para la Gestión de las Relaciones con Clientes administrando la información de los clientes para administrar cuentas, leads y oportunidades de ventas en un único local'
        },
        {
          id: 2,
          name: "Sistema para lotes y viviendas",
          image: logoSistemalotes,
          detailLists: [
            'Aplicativo web hecho en Laravel 6 y Vue.js',
            'Complemente e-commerce para gestión de pagos e integración con pasarelas de pagos',
            'Suscripciones a correo electrónico',
            'Servicio web service para consumo e-commerce'
          ],
          techs:[
            'Laravel 6',
            'Vue.js',
            'Bootstrap 4',
            'Ecommerce',
            'API',
          ], 
          footer: 'Sistema web administrativo y ecommerce para gestión de proyectos inmobiliarios, gestión de contratos, pago de cuotas y facturación electrónica',
        },
        {
          id: 3,
          name: "Sistema Aulas Virtuales",
          image: logoClassroom,
          detailLists: [
            'Aplicativo web hecho en Laravel 6 y Vue.js',
            'Desarrollo Single Page Application',
            'Servicio web service para consumo proyecto Vue.js'
          ],
          techs:[
            'Laravel 6',
            'Vue.js',
            'Single Page Application',
            'API',
          ], 
          footer: 'Sistema web administrativo para gestión escolar',
        },

        
        {
          id: 4,
          name: "Punto de venta + Facturación electrónica",
          image: logoBesefactura,
          detailLists: [
            'Aplicativo web hecho en Laravel 6 y Vue.js',
            'Desarrollo Single Page Application',
            'Servicio web service para consumo proyecto Vue.js'
          ],
          techs:[
            'Laravel 6',
            'Vue.js',
            'Bootstrap 4',
            'API',
            'Facturación Electrónica',
            'UBL 2.1',
          ], 
          footer: 'Sistema web administrativo para gestión escolar',
        },
        {
          id: 4,
          name: "Web - Desarrollo de Software",
          image: logoWebbes,
          detailLists: [
            'Aplicativo web hecho en Laravel 6 y Vue.js',
            'Desarrollo Single Page Application',
            'Servicio web service para consumo proyecto Vue.js'
          ],
          techs:[
            'Laravel 6',
            'Javascript',
            'Bootstrap 4',
          ], 
          footer: 'Sistema web administrativo para gestión escolar',
        },
      ],
    });
  }

  render() {
    const firstName = "Álvaro";
    const lastName = "Barrera";
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <h1 className="Badgeds__title">Bienvenid@ a mi sitio web 💻</h1>
              <Badge firstName={firstName} lastName={lastName}></Badge>
            </div>
          </div>
        </div>
        <div className="Badges_list">
          <div className="Badges__container">
            <About></About>
            <Briefcase 
            title={"Proyectos"}
            projects={this.state.projects}></Briefcase>
            <BadgesList
              title={"Tecnologías"}
              badges={this.state.techs}
            ></BadgesList>
            <BadgesList
              title={"Herramientas"}
              badges={this.state.tools}
            ></BadgesList>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
