import React from "react";
import Navbar from "../components/Navbar";
import BadgesList from "../components/BadgesList";
import "./styles/Badges.css";
import logo from "../images/desarrollo-web.png";
import logoReact from "../images/techs/react.png";
import logoVue from "../images/techs/vue.png";
import logoLaravel from "../images/techs/laravel.png";
import logoPython from "../images/techs/python.png";
import logoPostgresql from "../images/techs/postgresql.png";
import logoMysql from "../images/techs/mysql.png";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Badge from "../components/Badge";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: [],
    };
  }
  componentDidMount() {
    this.setState({
      data: [
        {
          id: 1,
          image: logoReact,
          name: "React.js",
        },
        {
          id: 2,
          image: logoVue,
          name: "Vue.js",
        },
        {
          id: 3,
          image: logoLaravel,
          name: "Laravel",
        },
        {
          id: 4,
          image: logoPython,
          name: "Python",
        },
        {
          id: 4,
          image: logoPostgresql,
          name: "PostgreSQL",
        },
        {
          id: 4,
          image: logoMysql,
          name: "MySQL",
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
        <Badge firstName={firstName} lastName={lastName}></Badge>
        <div className="Badges_list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data}></BadgesList>
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
