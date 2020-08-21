import React, { Component } from "react";
import { NavMenu } from "./NavMenu";
import '../css/estilos.css'
export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <div className="navbar-estatico">
          <NavMenu />
        </div>
        <div className="width-completo">{this.props.children}</div>
      </div>
    );
  }
}
