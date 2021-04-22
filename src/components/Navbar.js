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
    };
  }
  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
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
          <span className=" float-right"><button className="btn text-white" onClick={this.handleOpenModal}>Contáctame 👋 </button></span>
        </div>
        <Modal isOpen={this.state.modalIsOpen} onClose={this.handleCloseModal}></Modal>
      </div>
    );
  }
}

export default Navbar;
