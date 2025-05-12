import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  const handleLogout = () => {
    localStorage.setItem('loggedIn', 'false');
    navigate('/login');
  };

  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Gym Tracker</Link>
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-item">Home</Link></li>
          <li><Link to="/add" className="navbar-item">Add Workout</Link></li>
          <li><Link to="/progress" className="navbar-item">Progress</Link></li>
          <li><Link to="/settings" className="navbar-item">Settings</Link></li>
          <li><Link to="/login" className="navbar-item">Login</Link></li>
          <li><Link to="/register" className="navbar-item">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
}
