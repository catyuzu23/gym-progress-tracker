import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Settings() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState('');

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // 📥 Ia userul din state (preferat) sau fallback din localStorage
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (!isLoggedIn) {
      setCurrentUser(null);
      navigate('/login');
    } else {
      const user = location.state?.user || localStorage.getItem('currentUser');
      setCurrentUser(user);
    }
  }, [location.state, navigate]);

  // 🎨 Aplică tema
  useEffect(() => {
    document.body.className = '';
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = '';
    if (newTheme === 'light') {
      document.body.classList.add('light-mode');
    }
  };

  const handleDeleteWorkouts = () => {
    localStorage.removeItem(`workouts_${currentUser}`);
    alert('Antrenamentele au fost șterse.');
  };

  const handleDeleteAccount = () => {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    delete users[currentUser];
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.removeItem(`workouts_${currentUser}`);
    localStorage.removeItem('currentUser');
    localStorage.setItem('loggedIn', 'false');
    navigate('/login');
  };

  return (
    <div className="page-wrapper">
      <div className="settings-layout">
        <h1 className="home-title login-title">Setări</h1>
        <p style={{ color: '#e9c703', marginBottom: '1rem' }}>
          Contul tău: <strong>{currentUser || 'Niciun utilizator logat'}</strong>
        </p>

        <button onClick={toggleTheme}>
          Schimbă tema ({theme === 'dark' ? 'Mod deschis' : 'Mod întunecat'})
        </button>

        <button onClick={handleDeleteWorkouts}>
          Șterge toate antrenamentele
        </button>

        <button onClick={handleDeleteAccount} style={{ backgroundColor: '#b00020' }}>
          Șterge contul complet
        </button>
      </div>
    </div>
  );
}
