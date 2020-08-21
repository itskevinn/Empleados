const handleResponse = (res) => {
  let status = res.status;
  let messages = res.errors;
  if (status >= 400 && status < 600) {
    return leerError(messages, status);
  } else {
    // eslint-disable-next-line no-unused-vars
    let res = { status: 0, mensaje: "" };
    return (res = {
      status: 200,
      mensaje: "¡Empresa registrada con éxito!",
    });
  }
};
const leerError = (messages, _status) => {
  let mensajeValidaciones = {
    status: _status,
    mensaje: "",
  };
  for (const prop in messages) {
    // eslint-disable-next-line no-loop-func
    messages[prop].forEach((element) => {
      mensajeValidaciones.mensaje += `${element}\n`;
    });
    mensajeValidaciones.mensaje += ",";
  }
  return mensajeValidaciones;
};

export default {
  handleResponse,
};
