import React from "react";
import "./styles/Badge.css";
import { SocialIcon } from "react-social-icons";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__section-name">
          <h1 className="Badge__h1">Álvaro Barrera</h1>
        </div>
        <div className="Badge__section-info separation">
          <h2 className="Badge__h2">Software Engineer</h2>
        </div>
        <div className="Badge__footer__container">
          <div className="Badge__footer">
            <div className="d-flex">
              <SocialIcon
                bgColor="white"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-1 ml-1 Badge__icon-social"
                label="Twitter Álvaro Barrera"
                url="https://twitter.com/Alvaro__Barrera"
              />
              <SocialIcon
                bgColor="white"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-1 ml-1 Badge__icon-social"
                label="LinkedIn Álvaro Barrera"
                url="https://www.linkedin.com/in/alvaro-barrera/"
              />
              <SocialIcon
                bgColor="white"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-1 ml-1 Badge__icon-social"
                label="Github"
                url="https://github.com/alvaro-barrera"
              />
              <SocialIcon
                bgColor="white"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-1 ml-1 Badge__icon-social"
                label="Instagram de Álvaro Barrera"
                url="https://www.instagram.com/alvaro__barrera/"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
