import React from "react";
import "./styles/Badge.css";
import { SocialIcon } from "react-social-icons";
class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div class="Linkedin-pofile__container">
          <img
            class="round"
            src="https://media.licdn.com/dms/image/D4E03AQFmPh369A8iXQ/profile-displayphoto-shrink_400_400/0/1674703899512?e=1694044800&v=beta&t=AOJRJB7ts3AXt9yQfsXm4YF9RyV0hmJ_5khcCOJ2AQY"
            alt="Álvaro Barrera linkedin"
          />
          <h1>Álvaro Barrera</h1>
          <h6>Semi Senior Software Engineer</h6>
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
