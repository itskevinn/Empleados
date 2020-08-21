import React from "react";

export class ModalOk extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mensaje: this.props.mensaje };
  }
  render() {
    const mensaje = this.state.mensaje;
    return (
      <div
        class="modal fade"
        id="exampleModal3"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog bg-success" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="contenido-centrado">
                <i class="fas fa-check-circle"></i>
                <div className="separar-arriba-sm"> {mensaje} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
