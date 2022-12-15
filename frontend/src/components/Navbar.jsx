import { Link } from 'react-router-dom';
import React from 'react';

import useUserContext from '../hooks/useUserContext';
import useLogout from '../hooks/useLogout';

function Navbar() {
  const { user } = useUserContext();
  const { logout } = useLogout();

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className="navbar">
      <Link to="/"><h1>Todo-List</h1></Link>
      <nav>
        {(!user)
        && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
        )}
        {(user)
        && (
        <>
          <div>{user.email}</div>
          <button type="submit" onClick={handleClick}>Logout</button>
        </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
