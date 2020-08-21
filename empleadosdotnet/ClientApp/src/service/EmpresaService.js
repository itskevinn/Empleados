import http from "../@base/http-common";
import handleResponse from "../@base/handle-http-response";
const url = "https://localhost:5001/api/Empresa";
const consultar = () => {
  return http.get(url);
};
const buscar = (nit) => {
  return http.get(`/Empresa/${nit}`);
};
const guardar = (empresa) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(empresa),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .catch((e) => console.error("Error: ", e))
    .then((res) => handleResponse.handleResponse(res));
};

const actualizar = (nit, empresa) => {
  return http.put(`/Empresa/${nit}`, empresa);
};
export default {
  consultar,
  buscar,
  guardar,
  actualizar,
};
