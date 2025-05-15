import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  const handleLogout = () => {
    localStorage.setItem('loggedIn', 'false');
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/add" className="navbar-item">Adaugă Workout</Link>
          <Link to="/progress" className="navbar-item">Progres</Link>
          <Link to="/settings" className="navbar-item">Setări</Link>
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
