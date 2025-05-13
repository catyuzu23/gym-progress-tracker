import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddWorkout() {
  const [exName, setExName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
    // TODO: Salvează antrenamentul (ex: localStorage sau context)
    // Exemplu simplu:
    const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    workouts.push({ exName, reps: Number(reps), weight: Number(weight), date });
    localStorage.setItem('workouts', JSON.stringify(workouts));

    alert('Antrenament adăugat!');
    navigate('/progress');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-primary text-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-accent mb-4">Adaugă Workout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Exercițiu</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-[#333] border border-[#444] focus:border-accent"
            value={exName}
            onChange={(e) => setExName(e.target.value)}
          />
          {errors.exName && <p className="text-accent text-sm mt-1">{errors.exName}</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Repetări</label>
          <input
            type="number"
            className="w-full p-2 rounded bg-[#333] border border-[#444] focus:border-accent"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
          {errors.reps && <p className="text-accent text-sm mt-1">{errors.reps}</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Greutate (kg)</label>
          <input
            type="number"
            className="w-full p-2 rounded bg-[#333] border border-[#444] focus:border-accent"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          {errors.weight && <p className="text-accent text-sm mt-1">{errors.weight}</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Data</label>
          <input
            type="date"
            className="w-full p-2 rounded bg-[#333] border border-[#444] focus:border-accent"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {errors.date && <p className="text-accent text-sm mt-1">{errors.date}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-primary font-semibold py-2 rounded hover:bg-yellow-500 transition"
        >
          Salvează
        </button>
      </form>
    </div>
  );
}
