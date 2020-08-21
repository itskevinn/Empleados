import { ModalOk } from "../components/ModalOk";
import React from "react";

const handleResponse = (res) => {
  let status = res.status;
  let messages = res.errors;
  if (status >= 400 && status < 600) {
    leerError(messages);
  } else {
    console.log("Empresa registrada con éxito!");
  }
};
const leerError = (messages) => {
  let mensajeValidaciones;
  for (const prop in messages) {
    // eslint-disable-next-line no-loop-func
    messages[prop].forEach((element) => {
      mensajeValidaciones += `${element}\n`;
    });
    mensajeValidaciones += ",";
  }
  mostrarModal(mensajeValidaciones);
};
const mostrarModal = (mensaje) => {
  return <ModalOk mensaje={mensaje} />;
};
export default {
  handleResponse,
};
