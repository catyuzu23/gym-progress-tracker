import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (!savedUser) {
      alert('Nu există cont salvat.');
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem('loggedIn', 'true');
      alert('Autentificare reușită!');
      navigate('/');
    } else {
      alert('Date incorecte!');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Autentificare</h2>
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
  );
}
