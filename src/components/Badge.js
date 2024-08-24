import React from "react";
import "./styles/Badge.css";
import { SocialIcon } from "react-social-icons";

class Badge extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Badge">
          <div class="Linkedin-pofile__container">
            <div class="Linkedin-pofile__column">
              <h1>Álvaro Barrera</h1>
              <h6>Software Engineer</h6>

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
              <br />
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
        </div>
      </React.Fragment>
    );
  }
}

export default Badge;
