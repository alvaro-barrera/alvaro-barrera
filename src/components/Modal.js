import React from "react";
import ReactDOM from "react-dom";

import "./styles/Modal.css";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>

        <h2>Solicitud de contacto 👋</h2>
        <hr />
        <form action="">
          <div className="form-group">
            <label htmlFor="name">Nombre completo</label>
            <input placeholder="Ingresa tu nombre completo" type="text" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="celphone">Celular de contacto</label>
            <input placeholder="Ingresa un número de contacto" type="text" name="celphone" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email de contacto</label>
            <input placeholder="Ingresa tu email" type="text" name="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Datos que consideres importantes</label>
            <textarea placeholder="Escribe los datos que consideres de importancia" name="message" className="form-control" ></textarea>
          </div>
        </form>
        <button className="btn btn-primary float-right">Enviar</button>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
