import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/add">Adaugă Workout</Link> |
      <Link to="/progress">Progres</Link> |
      <Link to="/settings">Setări</Link>
    </nav>
  );
}
