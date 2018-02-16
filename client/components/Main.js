import React from 'react';
import { NavBar } from './index';

export default function Main(props) {
  const { children } = props;
  return (
    <div id="main">
      <NavBar />
      {children}
      <div id="footer">
        <p id="footer-text">&copy; Ari Kramer, 2018</p>
      </div>
    </div>
  )
}