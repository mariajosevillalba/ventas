import React from "react";
import Layout from "../components/commons/Layout";
import TableCliente from "../components/clientes/TableCliente";
import ToolbarCliente from "../components/clientes/ToolbarCliente";
import Modal from "../components/commons/Modal";
import FormClientes from "../components/clientes/FormClientes";
import { ClienteContextProvider } from "../contexts/modal/ClienteContext";

const Clientes = () => {
  return (
    <Layout>
      <ClienteContextProvider>
        <div className="panle">
          <div className="panel-heading has-background-info-light">
            Clientes
          </div>
          <div className="box">
            <ToolbarCliente />
            <TableCliente />
          </div>
        </div>
        <Modal>
          <FormClientes />
        </Modal>
      </ClienteContextProvider>
    </Layout>
  );
};
export default Clientes;
