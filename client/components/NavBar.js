import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, FormGroup, NavDropdown, MenuItem } from 'react-bootstrap';
import history from '../history';

export default class NavBar extends Component {
  constructor() {
    super();
    this.navTo = this.navTo.bind(this);
  }

  navTo(url) {
    history.push(url)
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">Ari Kramer</NavLink>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} onClick={() => this.navTo('/about')}>About Me</NavItem>
          <NavItem eventKey={2} onClick={() => this.navTo('/resume')}>Resume</NavItem>
          <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} onClick={() => this.navTo('/projects')}>All</MenuItem>
            <MenuItem eventKey={3.2}>Brackapptology</MenuItem>
            <MenuItem eventKey={3.3}>Bickr</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}
