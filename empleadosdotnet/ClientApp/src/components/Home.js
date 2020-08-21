import React from 'react';
import { Link } from 'react-scroll';
import busqueda from '../assets/img/032-job-search-480x480.png'
import dialogo from '../assets/img/036-dialog-1-140x140.png'
import personas from '../assets/img/048-group-480x480.png'
import stonks from '../assets/img/022-career-140x140.png'
import cambio from '../assets/img/004-employees-2-140x140.png'
import '../css/home.css'
import Registro from './Registro';
export class Home extends React.Component {

  constructor(props) {
    super();
    this.state = {
      message: ''
    }
  }

  submit() {
    console.warn(this.state)
  }
  render() {
    return (
      <div >
        <section id="consulta">
          <div className="tarjeta">
            <div className="text-center parrafo">
              <img src={personas} className="imagen-responsiva" alt="personas"></img>
              <p>Enim minim anim dolore ex tempor reprehenderit dolore nulla non. Excepteur quis eu aliqua veniam cupidatat cupidatat. Do ea occaecat occaecat sint qui ipsum ut culpa dolore sit excepteur sint mollit. Commodo esse fugiat nulla eu tempor do velit velit et fugiat magna ipsum.</p>
              <Link
                activeClass="active"
                to="registro"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="parrafo link"
              >Registro</Link>
            </div>
          </div>
        </section>
        <section id="busqueda">
          <div className="tarjeta">
            <div className="text-center parrafo">
              <img src={busqueda} alt="busqueda" className="imagen-responsiva separar-arriba separar-abajo"></img>
              <p>Enim minim anim dolore ex tempor reprehenderit dolore nulla non. Excepteur quis eu aliqua veniam cupidatat cupidatat. Do ea occaecat occaecat sint qui ipsum ut culpa dolore sit excepteur sint mollit. Commodo esse fugiat nulla eu tempor do velit velit et fugiat magna ipsum.</p>
            </div>
            <br></br>
          </div>
        </section>
        <section id="situaciones">
          <div className="contenedor-tarjetas">
            <div className="tarjeta-bordeada">
              <div className="text-center parrafo">
                <div className="imagen-tarjeta">
                  <img src={dialogo} className="separar-abajo-sm imagen-responsiva" alt="dialogos"></img>
                </div>
                <div className="cuerpo-tarjeta">
                  <p>Dolor nostrud nulla ea irure consequat magna tempor et nulla non et labore.</p>
                </div>
              </div>
            </div>
            <div className="tarjeta-bordeada">
              <div className="text-center parrafo">
                <div className="imagen-tarjeta">
                  <img src={cambio} className="separar-abajo-sm imagen-responsiva" alt="cambio"></img>
                </div>
                <div className="cuerpo-tarjeta">
                  <p>Dolor nostrud nulla ea irure consequat magna tempor et nulla non et labore.</p>
                  <Link to="/Consulta"> Consultar Personas</Link>
                </div>
              </div>
            </div>
            <div className="tarjeta-bordeada">
              <div className="text-center parrafo">
                <div className="imagen-tarjeta">
                  <img src={stonks} className="separar-abajo-sm imagen-responsiva" alt="stonks"></img>
                </div>
                <div className="cuerpo-tarjeta">
                  <p>Dolor nostrud nulla ea irure consequat magna tempor et nulla non et labore.</p>
                  <Link to="/Consulta"> Consultar Personas</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="registro">
          <br></br>
          <Registro></Registro>
        </section>
      </div>
    );
  }
}
