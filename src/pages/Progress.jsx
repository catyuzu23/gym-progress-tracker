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

  const handleDelete = (index) => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return;

    const key = `workouts_${currentUser}`;
    const updated = workouts.filter((_, i) => i !== index);
    setWorkouts(updated);
    localStorage.setItem(key, JSON.stringify(updated));
    setWorkoutCount(updated.length);
  };

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
                                {/* <div>
                  <strong>{w.exName}</strong> - {w.reps} reps x {w.weight} kg
                  <div className="text-sm text-gray-400">Data: {new Date(w.date).toLocaleDateString('ro-RO')}</div>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded"
                >
                  Șterge
                </button> */}
                <strong>{w.exName}</strong>
                {w.reps} reps x {w.weight} kg
                <span>Data: {w.date}</span>
                <button
                  onClick={() => handleDelete(index)}
                  className="mt-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-0.5 px-1 rounded mt-[3px] text-xs"
                >
                  Șterge
                </button>
              </li>
            ))}
          </ul>

        )}
      </div>
    </div>
  );
}
