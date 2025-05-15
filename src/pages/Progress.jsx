import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Progress() {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState([]);
  const [workoutCount, setWorkoutCount] = useState(0);


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
    const count = parseInt(localStorage.getItem(`workoutCount_${currentUser}`) || '0');
    setWorkoutCount(count);

  }, [navigate]);



  return (
    <div className="page-wrapper">
      <div className="centered-layout">
        <h1 className="home-title login-title">Progresul Tău</h1>
        <p style={{ color: '#e9c703', marginTop: '-1rem' }}>
  Ai adăugat <strong>{workoutCount}</strong> antrenamente până acum.
</p>

        {workouts.length === 0 ? (
          <p style={{ color: '#e9c703' }}>Nu ai înregistrat niciun antrenament.</p>
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
