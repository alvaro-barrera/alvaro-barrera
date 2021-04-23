import React from "react";
import "./styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__section-info">
          <blockquote class="blockquote mb-0">
            <p>
              © 2021 Diseñado por{" "}
              <a
                className="font-weight-bold text-white"
                href="https://www.linkedin.com/in/alvaro-barrera/"
                target="_blank"
              >Álvaro </a> con 💚 & ⚛️
            </p>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default Footer;
