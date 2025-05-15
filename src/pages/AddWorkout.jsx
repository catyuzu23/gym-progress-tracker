import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';




export default function AddWorkout() {


  const [exName, setExName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!loggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const validate = () => {
    const errs = {};
    if (!exName.trim()) errs.exName = 'Completează numele exercițiului';
    if (!reps || Number(reps) <= 0) errs.reps = 'Număr de repetări valid (>0)';
    if (!weight || Number(weight) <= 0) errs.weight = 'Greutate validă (>0)';
    if (!date) errs.date = 'Selectează o dată';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      alert('Nu ești autentificat.');
      return;
    }

    const key = `workouts_${currentUser}`;
    const workouts = JSON.parse(localStorage.getItem(key) || '[]');
    workouts.push({ exName, reps: Number(reps), weight: Number(weight), date });
    localStorage.setItem(key, JSON.stringify(workouts));

    const countKey = `workoutCount_${currentUser}`;
    const oldCount = parseInt(localStorage.getItem(countKey) || '0');
    localStorage.setItem(countKey, oldCount + 1);

    alert('Antrenament salvat!');
    navigate('/progress');
  };

  return (
    <div className="page-wrapper">
      <form onSubmit={handleSubmit}>
        <h1 className="home-title login-title">Adaugă Workout</h1>

        <input
          type="text"
          placeholder="Exercițiu"
          value={exName}
          onChange={(e) => setExName(e.target.value)}
        />
        {errors.exName && <p className="error-text">{errors.exName}</p>}

        <input
          type="number"
          placeholder="Repetări"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        {errors.reps && <p className="error-text">{errors.reps}</p>}

        <input
          type="number"
          placeholder="Greutate (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        {errors.weight && <p className="error-text">{errors.weight}</p>}

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors.date && <p className="error-text">{errors.date}</p>}

        <button type="submit">Salvează</button>
      </form>
    </div>
  );
}
