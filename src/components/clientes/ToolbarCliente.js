import React, {useContext} from "react";
import { ModalContext } from "../../contexts/modal/ModalContexts";
import { ClienteContext } from "../../contexts/modal/ClienteContext";

const ToolbarCliente = () => {
  const {setShowModal, setModalTitle } = useContext(ModalContext);

  const {obtenerCliente} = useContext(ClienteContext);

  const abrirModalCrear = () => {
    setModalTitle("Registrar nuevo Cliente");
    setShowModal(true);
    obtenerCliente(null);
  };
  return (
    <div className="container">
      <button
        className="button is-small is-warning"
        onClick={() => abrirModalCrear()}
      >
        <span className="icon is-small">
          <i className="fas fa-plus"> </i>
        </span>
        <span>Registrar Nuevo</span>
      </button>
    </div>
  );
};

export default ToolbarCliente;
