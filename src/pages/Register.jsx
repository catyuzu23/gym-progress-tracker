import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Completează toate câmpurile!');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Cont creat cu succes!');
    navigate('/login');
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Înregistrare</h2>
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
      <button type="submit">Înregistrează-te</button>
    </form>
  );
}
