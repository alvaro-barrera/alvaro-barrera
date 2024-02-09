import React from "react";
import "./styles/Badge.css";
import { SocialIcon } from "react-social-icons";
class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div class="Linkedin-pofile__container">
          <h1>Álvaro Barrera</h1>
          <h6>Software Engineer</h6>
          <div class="Profile-link__container">
            <a
              href="https://www.linkedin.com/in/alvaro-barrera"
              rel="noopener noreferrer"
              target="_blank"
              className="View-profile__button"
            >
              Ver perfil
            </a>
          </div>
          <div className="Badge__footer__container">
            <div className="Badge__footer">
              <div className="d-flex">
                <SocialIcon
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-1 ml-1 Badge__icon-social"
                  label="Twitter Álvaro Barrera"
                  url="https://twitter.com/Alvaro__Barrera"
                />
                <SocialIcon
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-1 ml-1 Badge__icon-social"
                  label="LinkedIn Álvaro Barrera"
                  url="https://www.linkedin.com/in/alvaro-barrera/"
                />
                <SocialIcon
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-1 ml-1 Badge__icon-social"
                  label="Github"
                  url="https://github.com/alvaro-barrera"
                />
              </div>
            </div>
          </div>
          <div class="Skills__container">
            <ul>
              <li>Laravel</li>
              <li>Angular</li>
              <li>Ruby on Rails</li>
              <li>Docker</li>
              <li>PostgeSQL</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
