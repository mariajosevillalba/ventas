import React, { createContext, useReducer } from "react";
import {
  OBTENER_CLIENTES,
  REGISTRAR_CLIENTES,
  OBTENER_CLIENTE,
  MODIFICAR_CLIENTE,
  ELIMINAR_CLIENTE,
} from "../../const/ActionTypes";
import ClienteReducer from "../../reducer/ClienteReducer";
import { v4 as uuidv4 } from "uuid";
import Axios, { AxiosError } from 'axios';
import Swal from "sweetalert2";

export const ClienteContext = createContext();

export const ClienteContextProvider = (props) => {
  const initialState = {
    clienteList: [],
    clienteActual: null,
  };

  const [state, dispatch] = useReducer(ClienteReducer, initialState);

  const obtenerClientes = async () => {
    try {
      const resultado = await Axios.get( `/clientes`);
      dispatch({
        type: OBTENER_CLIENTES,
        payload: resultado.data,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo obtener los clientes',
        toast: true
      })
      console.log(error);
    }
  };

  const registrarCliente = async(cliente) => {
    try {
      const resultado = await Axios.post("/clientes", cliente)
      dispatch({
        type: REGISTRAR_CLIENTES,
        payload: resultado.data,
      });
      Swal.fire({
        icon: 'success',
        title: 'Correcto',
        text: 'Cliente registrado correctamente',
        toast: true
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo obtener los clientes',
        toast: true
      })
      console.log(error)
    }
  };

  const obtenerCliente = async (cliente) => {
    try {
      let clienteEncontrado = null;

      if (cliente !== null) {
        const resultado = await Axios.get(`/clientes/${cliente.idCliente}`);
        clienteEncontrado = resultado.data;
      } else {
        clienteEncontrado = cliente;
      }
      dispatch({
        type: OBTENER_CLIENTE,
        payload: clienteEncontrado,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo obtener el cliente",
        toast: true,
      });
      console.log(error);
    }
  };

  const actualizarCliente = async(cliente) => {
   try{
    const resultado  =await Axios.put("/clientes", cliente)
   
    dispatch({
      type: MODIFICAR_CLIENTE,
      payload: resultado.data,
    });
    Swal.fire({
      icon: 'success',
      title: 'Correcto',
      text: 'Cliente actualizado correctamente',
      toast: true
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo actualizar los clientes',
      toast: true
    })
    console.log(error)
  }
  };

  const eliminarCliente = async(idCliente) => {
    try{
      await Axios.delete( `/clientes/${idCliente}`)
    dispatch({
      type: ELIMINAR_CLIENTE,
      payload: idCliente,
    });
    Swal.fire({
      icon: 'success',
      title: 'Correcto',
      text: 'Cliente eliminado correctamente',
      toast: true
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo eliminar el cliente',
      toast: true
    })
    console.log(error)
  }
  };

  return (
    <ClienteContext.Provider
      value={{
        clienteList: state.clienteList,
        clienteActual: state.clienteActual,
        obtenerClientes,
        registrarCliente,
        obtenerCliente,
        actualizarCliente,
        eliminarCliente,
      }}
    >
      {props.children}
    </ClienteContext.Provider>
  );
};