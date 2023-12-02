import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <nav className={`navbar ${themeClass}`}>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/favs">Destacados</Link>
      </div>

      <div className="theme-toggle">
        <img
          src={state.theme === 'dark' ? '/images/brightness.png' : '/images/dark-mode (1).png'}
          alt={state.theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          className="theme-icon"
          onClick={toggleTheme}
          style={{ width: '30px', height: '30px' }}
        />
      </div>
    </nav>
  );
};

export default Navbar;

