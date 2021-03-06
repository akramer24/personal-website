import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, FormGroup, NavDropdown, MenuItem } from 'react-bootstrap';
import history from '../history';
import navTo from '../utils/navTo';

export default function NavBar() {
  return (
    <Navbar id="navbar" collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">Ari Kramer</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={2} onClick={() => navTo('/resume')}>Resume</NavItem>
          <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} onClick={() => navTo('/projects')}>All</MenuItem>
            <MenuItem eventKey={3.2} onClick={() => navTo('/projects/mlb-showdown')}>MLB Showdown</MenuItem>
            <MenuItem eventKey={3.3} onClick={() => navTo('/projects/brackapptology')}>Brackapptology</MenuItem>
            <MenuItem eventKey={3.4} onClick={() => navTo('/projects/bickr')}>Bickr</MenuItem>
          </NavDropdown>
          <NavItem eventKey={1} onClick={() => navTo('/blog')}>Blog</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={4} href="https://github.com/akramer24" target="_blank"><img src="github.svg" className="navbar-svg" /></NavItem>
          <NavItem eventKey={5} href="https://www.linkedin.com/in/arikramer/" target="_blank"><img src="linkedin.svg" className="navbar-svg" /></NavItem>
          <NavItem eventKey={6} href="https://twitter.com/Ari_Kramer" target="_blank"><img src="twitter.svg" className="navbar-svg" /></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
