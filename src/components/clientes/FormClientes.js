import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../contexts/modal/ModalContexts";
import { ClienteContext } from "../../contexts/modal/ClienteContext";

const FormClientes = () => {
  const { setShowModal } = useContext(ModalContext);

  const { registrarCliente, actualizarCliente, clienteActual, obtenerCliente } =
    useContext(ClienteContext);

  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    if (clienteActual !== null) {
      setCliente({
        ...clienteActual,
        direccion: clienteActual.direccion ? clienteActual.direccion : "",
        telefono: clienteActual.telefono ? clienteActual.telefono : "",
      });
    } else {
      setCliente(clienteDefault);
    }
    // eslint-next-line
  }, [clienteActual]);

  const clienteDefault = {
    nombres: "",
    apellidos: "",
    direccion: "",
    telefono: "",
    email: "",
  };

  const [cliente, setCliente] = useState(clienteDefault);

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const cleanForm = () => {
    setMensaje(null);
    setCliente(clienteDefault);
  };

  const closeModal = () => {
    cleanForm();
    setShowModal(false);
    obtenerCliente(null);
  };

  const getClientInfo = () => {
    let clienteTemp = { ...cliente };
    if (cliente.direccion == "") delete clienteTemp.direccion;
    if (cliente.telefono == "") delete clienteTemp.telefono;
    return clienteTemp;
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    //Validar
    if (
      cliente.nombres.trim() == "" &&
      cliente.apellidos.trim() == "" &&
      cliente.email.trim() == ""
    ) {
      setMensaje("Los nombres, apellidos y email son obligatorios !!");
      return;
    }
    //Obtener Objeto a enviar
    if (clienteActual !== null) {
      actualizarCliente(getClientInfo());
    } else {
      registrarCliente(getClientInfo());
    }

    //Cerrar y limpiar el modal
    closeModal();
  };

  return (
    <form onSubmit={handleSumbit}>
      {mensaje ? <div className="notification is-danger">{mensaje}</div> : null}

      <div class="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Nombre Completo</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded has-icon-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Nombre"
                name="nombres"
                value={cliente.nombres}
                onChange={handleChange}
              />
            </p>
          </div>
          <div className="field">
            <p className="control is-expanded">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Apellido"
                name="apellidos"
                value={cliente.apellidos}
                onChange={handleChange}
              />
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Direccion</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                class="input "
                type="text"
                placeholder="Direccion"
                name="direccion"
                value={cliente.direccion}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Telefono</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                class="input "
                type="text"
                placeholder="Telefono"
                name="telefono"
                value={cliente.telefono}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Email</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                class="input "
                type="text"
                placeholder="Email"
                name="email"
                value={cliente.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary mr-1">
                Guardar
              </button>
              <button
                type="button"
                className="button"
                onClick={() => closeModal()}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    );
};

export default FormClientes;
