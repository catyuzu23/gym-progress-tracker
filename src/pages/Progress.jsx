import { useEffect, useState } from 'react';

export default function Progress() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return;

    const key = `workouts_${currentUser}`;
    const saved = JSON.parse(localStorage.getItem(key) || '[]');
    setWorkouts(saved);
  }, []);

  return (
    <div className="page-wrapper">
      <h1 className="home-title login-title">Progresul Tău</h1>

      {workouts.length === 0 ? (
        <p style={{ color: '#e9c703' }}>Nu ai adăugat încă niciun antrenament.</p>
      ) : (
        <ul style={{ color: '#e9c703', listStyle: 'none', padding: 0 }}>
          {workouts.map((w, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              <strong>{w.exName}</strong> – {w.reps} reps × {w.weight} kg  
              <br />
              <span style={{ fontSize: '0.9rem' }}>Data: {w.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
