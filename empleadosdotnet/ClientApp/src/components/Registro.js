import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import "../css/estilos.css";
import EmpresaService from "../service/EmpresaService";
export class RegistroEmpresas extends React.Component {
  /*crearPersona() {
		let persona = {
			nombre: this.refs.nombre,
			apellido: this.refs.apellido,
			sexo: this.refs.sexo,
			edad: this.refs.edad,
			id: this.refs.id,
		};
		return persona;
	}*/

  state = {
    guardado: false,
    form: {
      nit: "",
      nombre: "",
      direccion: "",
      contacto: "",
      email: "",
    },
    alerta: false,
    respuesta: null,
    mensaje: "",
    colorAlerta: "",
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  guardar = () => {
    var empresa = { ...this.state.form };
    EmpresaService.guardar(empresa);
  };
  obtenerRespuesta = (res) => {
    /* if (res.status >= 400 && res.status < 600) {
      let mensajeValidaciones = "";
      var _res;
      this.setState((state) => {
        return { respuesta: res };
      });
      console.log(this.state.respuesta);
      _res = this.state.respuesta;
      for (const prop in _res.errors) {
        // eslint-disable-next-line no-loop-func
        _res.errors[prop].forEach((element) => {
          mensajeValidaciones += `${element}\n`;
        });
        mensajeValidaciones += ",";
        this.setState({ colorAlerta: "danger" });
      }
      this.mostrarAlerta(mensajeValidaciones);
    } else {
      this.setState({ colorAlerta: "success" });
      this.mostrarAlerta("Empresa registrada con éxito!");
    }*/
  };

  scrollFuncion() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
    }
  }

  render() {
    const guardado = this.state.alerta;
    let alerta;
    if (guardado) {
      alerta = (
        <Alert color={this.state.colorAlerta}>{this.state.mensaje}</Alert>
      );
    }
    return (
      <div className="container">
        <div>
          <div className="text-center titulo">¡REGISTRA TU EMPRESA AHORA!</div>
          <div className="container">
            <Form className="formulario-registro separar-abajo">
              <FormGroup>
                <Label>NIT</Label>
                <Input
                  type="text"
                  name="nit"
                  onChange={this.handleChange}
                ></Input>
              </FormGroup>
              <div className="row">
                <div className="col-6">
                  <FormGroup>
                    <Label>Nombre de la empresa</Label>
                    <Input
                      type="text"
                      name="nombre"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Dirección</Label>
                    <Input
                      type="text"
                      name="direccion"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="col-6">
                  <FormGroup>
                    <Label>Número de Contacto</Label>
                    <Input
                      type="text"
                      name="contacto"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={this.handleChange}
                    ></Input>
                  </FormGroup>
                </div>
              </div>
              <div className="text-center separar-arriba-sm">
                <Button
                  onClick={this.guardar}
                  className="px-5 btn btn-light btn-block"
                >
                  Registrar
                </Button>
                <br></br>
                {alerta}
              </div>
            </Form>
          </div>
        </div>

        {/*<Form>
					<FormGroup>
						<Label>Id</Label>
						<Input type="text" ref="id" placeholder="Ingrese su id"></Input>
					</FormGroup>
					<div className="row">
						<div className="col-6">
							<FormGroup >
								<Label>Nombre</Label>
								<Input type="text" ref="nombre" placeholder="Ingrese su nombre" />
							</FormGroup>
							<FormGroup>
								<Label>Apellido</Label>
								<Input type="text" ref="apellido" placeholder="Ingrese su apellido" />
							</FormGroup>
						</div>
						<div className="col-6">
							<FormGroup>
								<Label>Edad</Label>
								<Input type="text" ref="edad" placeholder="Ingrese su edad" />
							</FormGroup>
							<FormGroup>
								<Label>Sexo</Label>
								<Input type="select" className="form-control" ref="sexo" name="sexo" onChange={this.handleInputChange}>
									<option defaultValue>Seleccione su sexo</option>
									<option>Masculino</option>
									<option>Femenino</option>
								</Input>
							</FormGroup>
						</div>
					</div>
					<div className="text-center">
						<Button onClick={this.guardar} className="px-5 btn btn-block">Registrar</Button>
						<br></br>
						<p>{this.state.message}</p>
					</div>
				</Form>*/}
      </div>
    );
  }
}

export default withRouter(RegistroEmpresas);
