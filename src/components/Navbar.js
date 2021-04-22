import React from "react";
import "./styles/Navbar.css";
import logo from "../images/idea.svg";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

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
      formContent:
        "https://api.whatsapp.com/send/?phone=%2B51944831430&text=Hola+%C3%81lvaro%2C+me+interesa+contactarme+contigo&app_absent=0",
      baseURL: "https://api.whatsapp.com/send/?phone=%2B51944831430&text=",
    };
  }
  handleOpenModal = (e) => {
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
        modalIsOpen: false
      });
    } else {
      console.log("0");
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
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="Navbar__brand">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Álvaro</span>
            <span className="font-weight-bold ml-1">Barrera</span>
          </div>
          <span className=" float-right">
            <button className="btn text-white" onClick={this.handleOpenModal}>
              Contáctame 👋
            </button>
          </span>
        </div>
        <Modal
          //   form={this.state.form}
          isOpen={this.state.modalIsOpen}
          onClose={this.handleCloseModal}
        >
          <h2>Solicitud de contacto 👋</h2>
          <hr />
          <form action="">
            <div className="form-group">
              <label htmlFor="name">
                🙍 Nombre completo
              </label>
              <input
                placeholder="Ingresa tu nombre completo"
                type="text"
                name="name"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.form.name}
              />
              <small class="form-text text-muted">Requerido</small>
            </div>
            <div className="form-group">
              <label htmlFor="celphone">
                📲 Celular de contacto
              </label>
              <input
                placeholder="Ingresa un número de contacto"
                type="number"
                name="celphone"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.form.celphone}
              />
              <small class="form-text text-muted">Requerido</small>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                  📧 Email de contacto
                  </label>
              <input
                placeholder="Ingresa tu email"
                type="text"
                name="email"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.form.email}
              />
              <small class="form-text text-muted">Opcional</small>
            </div>
            <div className="form-group">
              <label htmlFor="message">
                ✍ Datos que consideres
                importantes
              </label>
              <textarea
                placeholder="Escribe los datos que consideres de importancia"
                name="message"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.form.message}
              ></textarea>
              <small class="form-text text-muted">Requerido</small>
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
                Este formulario requerirá una aplicación WhatsApp activa 📱
              </small>
            </div>
          </div>

          <a target="_blank" id="ref-wsp" href={this.state.formContent}></a>
        </Modal>
      </div>
    );
  }
}

export default Navbar;
