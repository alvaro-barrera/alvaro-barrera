import React from "react";
import Navbar from "../components/Navbar";
import BadgesList from "../components/BadgesList";
import "./styles/Badges.css";
import logo from "../images/desarrollo-web.png";
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
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Badge from "../components/Badge";
import BadgeNew from "./BadgeNew";
import About from "../components/About";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      techs: [],
      tools: [],
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
    });
    this.setState({
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
              {/* <img className="Badges_conf-logo" src={logo} alt="Logo" /> */}
              <h1 className="Badgeds__title">Bienvenid@ a mi sitio web 💻</h1>
              <Badge firstName={firstName} lastName={lastName}></Badge>
            </div>
          </div>
        </div>
        {/* <div className="Badge_contain">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Nuevo
            </Link>
          </div>
        </div> */}
        <div className="Badges_list">
          <div className="Badges__container">
            <About></About>
            <BadgesList
              title={"Tecnologías"}
              badges={this.state.techs}
            ></BadgesList>
            <BadgesList
              title={"Herramientas"}
              badges={this.state.tools}
            ></BadgesList>
            {/* {this.state.loading && <Skeleton></Skeleton>}

            {!this.state.loading && (
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => this.fetchCharacters()}
              >
                Ver más
              </button>
            )} */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
