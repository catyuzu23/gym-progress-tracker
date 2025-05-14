import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const user = users[email];

    if (!user) {
      alert('Acest cont nu există.');
      return;
    }

    if (user.password === password) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('currentUser', email);
      alert('Autentificare reușită!');
      navigate('/');
    } else {
      alert('Parolă greșită.');
    }
  };

  return (
    <div className="page-wrapper">
      <form onSubmit={handleLogin}>
        <h1 className="home-title" >Autentificare</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Parolă"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Autentifică-te</button>
      </form>
    </div>
  );
}
