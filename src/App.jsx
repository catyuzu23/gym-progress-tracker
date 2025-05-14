import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddWorkout from './pages/AddWorkout';
import Progress from './pages/Progress';
import Settings from './pages/Settings';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
//import Footer from './components/Footer.jsx';

function App() {
  return (
      <div >
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddWorkout />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
