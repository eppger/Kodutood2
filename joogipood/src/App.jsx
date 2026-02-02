import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Avaleht from './pages/Avaleht';
import LisaJook from './pages/LisaJook';
import HaldaJooke from './pages/HaldaJooke';

function App() {
 

  return (
    <>
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/lisa">
        <button>Lisa jook</button>
        <br /><br />
      </Link>
      <Link to="/halda">
        <button>Halda jooke </button>
        <br /><br />
      </Link>

      <Routes>
        <Route path="/" element={<Avaleht/>} />
        <Route path="/lisa" element={<LisaJook/>} />
        <Route path="/halda" element={<HaldaJooke />} />
      </Routes>
  
      </div>
    </>
  )
}

export default App
