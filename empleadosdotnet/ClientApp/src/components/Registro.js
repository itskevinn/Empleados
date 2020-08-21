import React from "react";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    modal: false,
    respuesta: null,
    mensaje: "",
    colorAlerta: "",
    status: 0,
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
    EmpresaService.guardar(empresa).then((res) => this.mostrarModal(res));
  };
  mostrarModal = (res) => {
    this.setState({ modal: true, mensaje: res.mensaje, status: res.status });
  };

  scrollFuncion() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
    }
  }

  render() {
    const modal = this.state.modal;
    const toggle = () => this.setState({ modal: !this.state.modal });
    let alerta;
    if (modal) {
      if (this.state.status >= 400) {
        alerta = (
          <div>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalBody className="bg-danger text-center">
                <FontAwesomeIcon icon={faTimesCircle} size="3x" color="white" />
                <div className="separar-arriba-sm text-white">
                  {" "}
                  <b>{this.state.mensaje}</b>{" "}
                </div>
              </ModalBody>
            </Modal>
          </div>
        );
      } else {
        alerta = (
          <div>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalBody className="bg-success text-center">
                <FontAwesomeIcon icon={faCheckCircle} size="3x" color="white" />
                <div className="separar-arriba-sm text-white">
                  {" "}
                  <b>{this.state.mensaje}</b>{" "}
                </div>
              </ModalBody>
            </Modal>
          </div>
        );
      }
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
