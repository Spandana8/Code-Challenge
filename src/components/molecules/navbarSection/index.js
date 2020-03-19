import React from 'react';
import { Navbar } from 'react-bootstrap';
import './styles.scss';
import { Link } from 'react-router-dom';

/**
 * Generates a navbar
 *
 * @returns {navbar view}
 */

export const NavbarSection = () => {
  return (
    <Navbar expand="lg" variant="light">
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>
    </Navbar>
  );
};
