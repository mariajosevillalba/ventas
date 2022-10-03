import React, { useContext } from "react";
import { ModalContext } from "../../contexts/modal/ModalContexts";
import { ClienteContext } from "../../contexts/modal/ClienteContext";

const RowCliente = ({ cliente }) => {
  const { setShowModal, setModalTitle } = useContext(ModalContext);
  const { obtenerCliente, eliminarCliente } = useContext(ClienteContext);

  const modificarCliente = () => {
    obtenerCliente(cliente);
    setModalTitle("Modificar Cliente");
    setShowModal(true);
  };

  return (
    <tr key={cliente.idCliente}>
      <td>
        <button
          className="button is-small is-outlined is-info mr-3"
          title="Modificar"
          onClick={() => modificarCliente()}
        >
          <span className="icon is-small">
            <i className="fas fa-edit"></i>
          </span>
        </button>
        <button
          className="button is-small is-outlined is-danger"
          title="Eliminar"
          onClick={() => eliminarCliente(cliente.idCliente)}
        >
          <span className="icon is-small">
            <i className="fas fa-trash"></i>
          </span>
        </button>
      </td>
      <td>{cliente.nombres}</td>
      <td>{cliente.apellidos}</td>
      <td>{cliente.direccion}</td>
      <td>{cliente.telefono}</td>
      <td>{cliente.email}</td>
    </tr>
  );
};

export default RowCliente;
