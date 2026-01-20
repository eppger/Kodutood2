import './App.css';
import {Link, Route, Routes} from'react-router-dom'

import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/uudised">
        <button>/Uudiste lehele</button>
      </Link>
      <Link to="/kontakt">
        <button>Võta meiega ühendust</button>
      </Link>
      <Link to="/meist">
        <button>Info meist</button>
      </Link>

     <Routes>
      <Routes path='' element={ <div>See on avaleht, nähtav localhost:3000 aadressil </div>} />
      <Routes path='uudised' element={ <div>See on uudiste leht, nähtav localhost:3000 aadressil </div>} />
      <Routes path='kontakt' element={ <div>See on kontaktide leht, nähtav localhost:3000 aadressil </div>} />
      <Routes path='meist' element={ <div>See on meist leht, nähtav localhost:3000 aadressil </div>} />
     </Routes>
    </div>
  );
}

export default App;
