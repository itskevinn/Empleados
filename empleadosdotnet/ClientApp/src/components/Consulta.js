import React from "react";
import { Button, Table, Spinner } from "reactstrap";
import EmpresaService from "../service/EmpresaService";
import '../css/estilos.css'
export class Consulta extends React.Component {
  state = { empresas: [], cargando: true };
  componentDidMount() {
    EmpresaService.consultar().then((respuesta) =>
      this.setState({ empresas: respuesta.data })
    );
    this.setState({ cargando: false });
  }
  render() {
    const { empresas, cargando } = this.state;
    if (cargando) {
      return (
        <div className="container separar-arriba text-center">
          <Spinner></Spinner>
        </div>
      );
    }
    return (
      <div className="container separar-arriba-sm">
        <section>
          <div className="separar-abajo-sm">
            <Button className="btn-success"> Nueva Empresa</Button>
          </div>
          <Table className=" text-center">
            <thead>
              <tr>
                <th>NIT</th>
                <th>Nombre</th>
                <th>Dirección</th>
                <th>Contacto</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className="text-black-50">
              {empresas.map((empresa) => (
                <tr key={empresa.nit}>
                  <th>{empresa.nit}</th>
                  <th>{empresa.nombre}</th>
                  <th>{empresa.direccion}</th>
                  <th>{empresa.contacto}</th>
                  <th>{empresa.email}</th>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </div>
    );
  }
}
