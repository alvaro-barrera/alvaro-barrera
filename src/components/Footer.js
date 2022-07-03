import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "./styles/Footer.css";
import { GrReactjs } from "react-icons/gr";
import { BsFillHeartFill } from "react-icons/bs";


class Footer extends React.Component {
  handleRefContact = (e) => {
    document.getElementById("button-contact").click();
  };
  render() {
    return (
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <div className="text-center">
                <SocialIcon
                  bgColor="white"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-1 ml-1"
                  label="Twitter Álvaro Barrera"
                  url="https://twitter.com/Alvaro__Barrera"
                />
                <SocialIcon
                  bgColor="white"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-1 ml-1"
                  label="LinkedIn Álvaro Barrera"
                  url="https://www.linkedin.com/in/alvaro-barrera/"
                />
                <SocialIcon
                  bgColor="white"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-1 ml-1"
                  label="Gitbub"
                  url="https://github.com/alvaro-barrera"
                />
                <SocialIcon
                  bgColor="white"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-1 ml-1"
                  label="Instagram de Álvaro Barrera"
                  url="https://www.instagram.com/alvaro__barrera/"
                />
              </div>
            </div>

            <div className="col-md-3">
              <ul className="list-unstyled text-center mt-4 mb-sm-0">
                <li>
                  <Link to="/" className="Footer__link h5">
                    Sobre mí
                  </Link>
                </li>
                <li>
                  <Link to="/education" className="Footer__link h5">
                    Educación
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="Footer__link h5">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <a
                  href="#!"
                    type="button"
                    className="Footer__link h5"
                    onClick={this.handleRefContact}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022. Diseñada por
          <a
            className="font-weight-bold text-white"
            href="https://www.linkedin.com/in/alvaro-barrera/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            Álvaro Barrera
          </a>{" "}
          con{" "}
          <span role="img" aria-label="green-heart">
            <BsFillHeartFill></BsFillHeartFill>
          </span> & <span role="img" aria-label="react">
            <GrReactjs></GrReactjs>
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
