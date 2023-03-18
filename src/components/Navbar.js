import React from "react";
import "./styles/Navbar.css";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      form: {
        name: "",
        celphone: "",
        email: "",
        message: "",
      },
      formError: {
        name: false,
        celphone: false,
        email: false,
        message: false,
        celphoneDigits: false,
        emailFormat: false,
      },
      formContent:
        "https://api.whatsapp.com/send/?phone=%2B51944831430&text=Hola+%C3%81lvaro%2C+me+interesa+contactarme+contigo&app_absent=0",
      baseURL: "https://api.whatsapp.com/send/?phone=%2B51944831430&text=",
    };
  }
  handleOpenModal = (e) => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };
  validateForm = () => {
    if (
      this.state.form.name.trim().length > 0 &&
      this.state.form.celphone.trim().length > 0 &&
      this.state.form.message.trim().length > 0
    ) {
      document.getElementById("ref-wsp").click();
      this.setState({
        form: {
          name: "",
          celphone: "",
          email: "",
          message: "",
        },
        modalIsOpen: false,
      });
    } else {
      let errorName = false;
      let errorCelphone = false;
      let errorEmail = false;
      let errorMessage = false;
      let errorCelphoneDigits = false;
      let errorEmailFormat = false;

      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (this.state.form.name.trim().length === 0) {
        errorName = true;
      }
      if (this.state.form.celphone.trim().length === 0) {
        errorCelphone = true;
      }

      if (this.state.form.message.trim().length === 0) {
        errorMessage = true;
      }

      if (this.state.form.celphone.trim().length !== 9) {
        errorCelphoneDigits = true;
      }
      if (
        this.state.form.email.trim().length !== 0 &&
        !re.test(String(this.state.form.email).toLowerCase())
      ) {
        errorEmailFormat = true;
      }

      this.setState({
        formError: {
          name: errorName,
          celphone: errorCelphone,
          email: errorEmail,
          message: errorMessage,
          celphoneDigits: errorCelphoneDigits,
          emailFormat: errorEmailFormat,
        },
      });
      console.log("0");
    }
  };
  handleKeyPressCelphone = (e) => {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    this.setState({
      formContent: `${this.state.baseURL}Nombre: ${this.state.form.name}. Celular: ${this.state.form.celphone}. Email: ${this.state.form.email}. Mensaje: ${this.state.form.message}`,
    });
  };
  handleSubmitForm = (e) => {
    this.setState({
      formContent: `${this.state.baseURL}Nombre: ${this.state.form.name}. Celular: ${this.state.form.celphone}. Email: ${this.state.form.email}. Mensaje: ${this.state.form.message}`,
    });
    this.validateForm();
  };
  handleToogleNavbar = (e) => {
    e.preventDefault();
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  render() {
    return (
      <div className="Navbar">
        <div className="topnav" id="myTopnav">
          <span className="float-left">
            <a className="text-white font-weight-light" href="#/">
              <img
                className="Navbar__brand-logo"
                src={logo}
                alt="Alvaro Barrera"
              />
              <span className="font-weight-light">Álvaro</span>
              <span className="font-weight-bold ml-1">Barrera</span>
            </a>
          </span>
          <span className="float-right">
            <Link className="text-white font-weight-light" to="/">
              Inicio
            </Link>
            <Link className="text-white font-weight-light" to="/education">
              Educación
            </Link>
            <Link className="text-white font-weight-light" to="/projects">
              Proyectos
            </Link>
            <a
              id="button-contact"
              href="#!"
              className="btn text-white font-weight-light"
              onClick={this.handleOpenModal}
            >
              Contáctame{" "}
              <span role="img" aria-label="waving-hand-sing">
                👋
              </span>
            </a>
            <a href="#!" className="icon" onClick={this.handleToogleNavbar}>
              {/* <GrApps></GrApps> */}
              <p className="Navbar__toggle-text text-white font-weight-light">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>
              </p>
            </a>
          </span>
        </div>

        <Modal
          //   form={this.state.form}
          isOpen={this.state.modalIsOpen}
          onClose={this.handleCloseModal}
        >
          <h2>
            Solicitud de contacto{" "}
            <span role="img" aria-label="waving-hand-sing">
              👋
            </span>
          </h2>
          <hr />
          <form action="">
            <div className="form-group">
              <label htmlFor="name">
                <span role="img" aria-label="man">
                  🙍
                </span>{" "}
                Nombre completo
              </label>
              <input
                placeholder="Ingresa tu nombre completo"
                type="text"
                name="name"
                className="form-control "
                onChange={this.handleChange}
                value={this.state.form.name}
              />
              <small
                className={`form-text ${
                  this.state.formError.name
                    ? "text-danger"
                    : "text-muted d-none"
                }`}
              >
                <span role="img" aria-label="warning">
                  ⚠️
                </span>{" "}
                Requerido
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="celphone">
                <span role="img" aria-label="celphone">
                  📲
                </span>{" "}
                Celular de contacto
              </label>
              <input
                placeholder="Ingresa un número de contacto"
                type="text"
                name="celphone"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.form.celphone}
                onKeyPress={this.handleKeyPressCelphone}
              />
              <small
                className={`form-text ${
                  this.state.formError.celphone
                    ? "text-danger"
                    : "text-muted d-none"
                }`}
              >
                <span role="img" aria-label="warning">
                  ⚠️
                </span>{" "}
                Requerido
              </small>
              <small
                className={`form-text ${
                  this.state.formError.celphoneDigits
                    ? "text-danger"
                    : "text-muted d-none"
                }`}
              >
                <span role="img" aria-label="incorrect">
                  ❌
                </span>{" "}
                9 dígitos requeridos
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <span role="img" aria-label="mailing">
                  📧
                </span>{" "}
                Email de contacto{" "}
                <small className="text-muted">(Opcional)</small>
              </label>
              <input
                placeholder="Ingresa tu email"
                type="text"
                name="email"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.form.email}
              />
              <small
                className={`form-text ${
                  this.state.formError.emailFormat
                    ? "text-danger"
                    : "text-muted d-none"
                }`}
              >
                <span role="img" aria-label="incorrect">
                  ❌
                </span>{" "}
                Formato no válido
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <span role="img" aria-label="writing-hand">
                  ✍
                </span>{" "}
                Datos que consideres importantes
              </label>
              <textarea
                placeholder="Escribe los datos que consideres de importancia"
                name="message"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.form.message}
              ></textarea>
              <small
                className={`form-text ${
                  this.state.formError.message
                    ? "text-danger"
                    : "text-muted d-none"
                }`}
              >
                <span role="img" aria-label="warning">
                  ⚠️
                </span>{" "}
                Requerido
              </small>
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary float-right btn-block"
                onClick={this.handleSubmitForm}
              >
                Enviar
              </button>
            </div>
          </form>
          <div className="mt-1">
            <div className="form-group text-center">
              <small className="text-primary">
                Este formulario requerirá una aplicación WhatsApp activa{" "}
                <span role="img" aria-label="celphone">
                  📱
                </span>
              </small>
            </div>
          </div>

          <a
            rel="noopener noreferrer"
            target="_blank"
            id="ref-wsp"
            href={this.state.formContent}
          ></a>
        </Modal>
      </div>
    );
  }
}

export default Navbar;
