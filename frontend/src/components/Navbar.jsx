import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"><h1>Todo-List</h1></Link>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
}

export default Navbar;
