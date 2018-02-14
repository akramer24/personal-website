import React from 'react';
import { NavBar } from './index';

export default function Main(props) {
  const { children } = props;
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}