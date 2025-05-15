import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Progress() {
  const navigate = useNavigate();
   const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!loggedIn) {
      navigate('/login');
      return;
    }

    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return;

    const key = `workouts_${currentUser}`;
    const saved = JSON.parse(localStorage.getItem(key) || '[]');
    setWorkouts(saved);
  }, [navigate]); 



  return (
    <div className="page-wrapper">
      <div className="centered-layout">
        <h1 className="home-title login-title">Progresul Tău</h1>

        {workouts.length === 0 ? (
          <p style={{ color: '#e9c703' }}>Nu ai adăugat încă niciun antrenament.</p>
        ) : (
          <ul className="progress-list">
            {workouts.map((w, index) => (
              <li key={index} className="progress-item">
                <strong>{w.exName}</strong>
                {w.reps} reps x {w.weight} kg
                <span>Data: {w.date}</span>
              </li>
            ))}
          </ul>

        )}
      </div>
    </div>
  );
}
