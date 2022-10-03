import React, { useContext, useEffect, useState } from "react";
import { ClienteContext } from "../../contexts/modal/ClienteContext";
import RowCliente from "./RowCliente";

const TableCliente = () => {
  const { clienteList, obtenerClientes } = useContext(ClienteContext);

  useEffect(() => {
    obtenerClientes();
    //eslint-disable-next-line
  }, []);

  if (clienteList.length == 0)
    return (
      <center>
        <p>No existen clientes</p>
      </center>
    );

  return (
    <div className="table-container">
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth has-text-info-dark">
        <thead className="has-background-link-light">
          <tr>
            <th>Acciones</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clienteList.map((cliente) => (
            <RowCliente cliente={cliente} key={cliente.idCliente} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCliente;
