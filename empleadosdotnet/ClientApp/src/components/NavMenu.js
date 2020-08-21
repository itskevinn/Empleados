import React, { Component } from "react";
import { Link } from "react-scroll";
import * as router from "react-router-dom";
import "../css/nav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "./NavMenu.css";
export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <div>
          <Navbar color="light" light expand="sm">
            <div className="nav-brand-separated">
              <NavbarBrand tag={router.Link} to="/">
                Empleados
              </NavbarBrand>
            </div>
            <NavbarToggler onClick={this.toggleNavbar} />
            <Collapse isOpen={this.state.collapsed} navbar>
              <Nav className="mr-auto" navbar>
                <div className="nav-item-separated scroll">
                    <Link
                      to="registro"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Registro
                    </Link>
                </div>
                <div className="nav-item-separated">
                  <NavItem>
                    <NavLink tag={router.Link} to="/Consulta">Consultar Empresas</NavLink>
                  </NavItem>
                </div>
                <div className="nav-item-separated">
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </Nav>
              <NavbarText>Simple Text</NavbarText>
            </Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}
