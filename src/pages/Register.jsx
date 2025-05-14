import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    // Regex simplu, nu perfect dar bun pentru validare minimă
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Completează toate câmpurile!');
      return;
    }

    if (!isEmailValid(email)) {
      alert('Email invalid!');
      return;
    }

    if (password.length < 4) {
      alert('Parola trebuie să conțină minim 4 caractere!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[email]) {
      alert('Acest email este deja înregistrat.');
      return;
    }

    users[email] = { email, password };
    localStorage.setItem('users', JSON.stringify(users));
    alert('Cont creat cu succes!');
    navigate('/login');
  };

  return (
    <div className="page-wrapper">
      <form onSubmit={handleRegister}>
        <h1 className="home-title login-title">Înregistrare</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Parolă (minim 4 caractere)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
