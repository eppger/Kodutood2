import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import {useState} from 'react';
import {useRef} from 'react';
import Menu from './components/Menu'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [sisselogitud, muudaSisselogitud] = useState ("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

const logiSisse = () => {
  //Pikkus on väiksem kui 8
  if (paroolRef.current.value.length < 8){
  toast.error("Liiga lühike");
	return;
  }

  // Kõik väikesteks tähtedeks teisendatuna on identne mis originaal//
  if (paroolRef.current.value.toLowerCase() === paroolRef.current.value){	
  toast.error("Peab sisladama suurt tähte");
   return;
  }

  // Kõik suurteks tähtedeks teisendatuna on identne mis originaal//
  if (paroolRef.current.value.toUpperCase() === paroolRef.current.value){	
  toast.error("Peab sisaladama väikest tähte");
   return;
  }

// Ei sislada protsenti on false
  if (paroolRef.current.value.icludes("%") === false) {	
  toast.error("Peab sisaladama protsenti");
   return;
  }

  if (paroolRef.current.value === "123") {	
    muudaSisselogitud("jah");
    muudaSonum(kasutajaNimiRef.current.value + ", oled sisselogitud");
    toast.success("Sõnum");
   return;
  }

  muudaSonum("Vale parool");
  toast.error("Sõnum");
  return;
}

  const logiValja = () => {
    muudaSisselogitud("ei");
    muudaSonum("");
  }

  return (
    <div className="App">
      <div>{sonum}</div>
      {sisselogitud === "ei" && <div>
      <label>Kasutajanimi</label><br />
      <input ref={kasutajaNimiRef} type="text" /><br />
      <label>Parool</label><br />
      <input ref={paroolRef}  type="password" /><br />
      </div> }

      { sisselogitud === "ei" && <button onClick={logiSisse} >Logi sisse</button>}
      { sisselogitud === "jah" &&<button onClick={logiValja} >Logi välja</button>}
<br /><br />

      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/uudised">
        <button>Uudiste lehele</button>
      </Link>
      <Link to="/meist">
        <button>Info meist</button>
      </Link>
      <Link to="/kontakt">
        <button>Võta meiega ühendust</button>
      </Link>
      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

 <Menu></Menu>
     {/* Routes üles käib MENÜÜ */}
     
     <Routes>
      <Route path='' element={ <Avaleht/>} />
      <Route path='uudised' element={ <Uudised/>} />
      <Route path='meist' element={ <Meist/>} />
      <Route path='kontakt' element={ <Kontakt/>} />
      <Route path='seaded' element={ <Seaded/>} />
     </Routes>

 <ToastContainer
  position="bottom-right"
  autoClose={4000}
  theme="dark"
/>
    </div>
  );
}

export default App;
