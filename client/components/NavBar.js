import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, FormGroup, NavDropdown, MenuItem } from 'react-bootstrap';
import history from '../history';
import navTo from '../utils/navTo';

export default function NavBar() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">Ari Kramer</NavLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} onClick={() => navTo('/about')}>About Me</NavItem>
        <NavItem eventKey={2} onClick={() => navTo('/resume')}>Resume</NavItem>
        <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} onClick={() => navTo('/projects')}>All</MenuItem>
          <MenuItem eventKey={3.2} onClick={() => navTo('/projects/brackapptology')}>Brackapptology</MenuItem>
          <MenuItem eventKey={3.3} onClick={() => navTo('/projects/bickr')}>Bickr</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}
