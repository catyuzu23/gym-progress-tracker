import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  const [navItems, setNavItems] = useState([
    { name: 'Home', path: '/' },
    { name: 'Add', path: '/add' },
    { name: 'Progress', path: '/progress' },
    { name: 'Settings', path: '/settings' }
  ]);


  const handleLogout = () => {
    localStorage.setItem('loggedIn', 'false');
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClick = (name) => {
    if (name === 'Settings') {
      const count = parseInt(localStorage.getItem('settingsClicks') || '0') + 1;
      localStorage.setItem('settingsClicks', count);

      if (count >= 3) {
        reorderNav();
      }
    }
  };
  const reorderNav = () => {
    setNavItems((prev) => {
      const reordered = [...prev];
      const settingsIndex = reordered.findIndex(i => i.name === 'Settings');
      const [settingsItem] = reordered.splice(settingsIndex, 1);
      reordered.unshift(settingsItem); // mutăm Settings primul
      return reordered;
    });
  };


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Gym Progress Tracker</Link>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Link-uri navbar */}
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => handleClick(item.name)}
              className="navbar-item"
            >
              {item.name}
            </Link>
          ))}

          {!isLoggedIn ? (
            <>
              <Link to="/login" className="navbar-item">Login</Link>
              <Link to="/register" className="navbar-item">Register</Link>
            </>
          ) : (
            <Link to="/login" onClick={handleLogout} className="navbar-item bordering">Logout</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
