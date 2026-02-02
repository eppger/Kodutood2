import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/tagasiside">
        <button>Tagasiside leht</button>
        <br /><br />
      </Link>
      <Link to="/andjad">
        <button>Vaata, kes on tagasisidet andnud</button>
        <br /><br />
      </Link>

      <Routes>
        <Route path="/" exact element={<div>Tere</div>} />
        <Route path="/tagasiside" exact element={<Tagasiside />} />
        <Route path="/andjad" exact element={<TagasisideAndjad />} />
      </Routes>
    </div>
  )
}

export default App