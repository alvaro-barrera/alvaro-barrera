import React from "react";
import confLogo from "../images/badge-header.svg";
import headerLogo from "../images/desarrollo-web.png";
import "./styles/Badge.css";
import { SocialIcon } from "react-social-icons";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge Badge__border">
        {/* <div className="Badge__header">
                 <img src={headerLogo} alt="Logo"/> 
            </div> */}
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://secure.gravatar.com/avatar/d63a77006e35ee16aeda45d9fdf500f9"
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h2>Desarrollador <span className="Badge__domain">back-end</span> & <span className="Badge__domain">front-end</span></h2>
          <div>@Alvaro__Barrera</div>
        </div>
        <div className="Badge__footer mt-4">
          <div className="d-flex">
            <SocialIcon
            target="_blank" rel="noopener noreferrer" 
              className="mr-1 ml-1"
              label="Twitter Álvaro Barrera"
              url="https://twitter.com/Alvaro__Barrera"
            />
            <SocialIcon
            target="_blank" rel="noopener noreferrer" 
              className="mr-1 ml-1"
              label="LinkedIn Álvaro Barrera"
              url="https://www.linkedin.com/in/alvaro-barrera/"
            />
            <SocialIcon
            target="_blank" rel="noopener noreferrer" 
              className="mr-1 ml-1"
              label="WhatsApp"
              url="https://api.whatsapp.com/send/?phone=%2B51944831430&text=Hola+%C3%81lvaro%2C+me+interesa+contactarme+contigo&app_absent=0"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
