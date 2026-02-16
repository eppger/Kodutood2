import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaArvuti from './pages/LisaArvuti';
import VaataArvuteid from './pages/VaataArvuteid';
import Ostukorv from './pages/Ostukorv';
import './App.css';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/all">
        <button>Vaata sülearvuteid</button>
      </Link>
      <Link to="/add">
        <button>Lisa sülearvuti</button>
      </Link>
      <Link to="/cart">
        <button>Ostukorv</button>
      </Link>

      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/all" element={<VaataArvuteid />} />
        <Route path="/add" element={<LisaArvuti />} />
        <Route path="/cart" element={<Ostukorv />} />
      </Routes>
    </div>
  );
}

export default App;