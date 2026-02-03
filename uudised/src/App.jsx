import './App.css';
import {Link, Route, Routes} from 'react-router-dom'

import Menu from './components/Menu'
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';

import Valikud from './pages/Valikud/Valik';
import Months from './pages/Valikud/Months';
import Animals from './pages/Valikud/Animals';
import Words from './pages/Valikud/Words';


import {useState} from 'react';
import {useRef} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import Logimine from './pages/Logimine';



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
  if (paroolRef.current.value.includes("%") === false) {	
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
  
      <div className="content">
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


      <Menu></Menu>
        <Routes>
          <Route path='' element={ <Avaleht/>} />
          <Route path='uudised' element={ <Uudised/>} />
          <Route path='meist' element={ <Meist/>} />
          <Route path='kontakt' element={ <Kontakt/>} />
          <Route path='seaded' element={ <Seaded/>} />
          <Route path='logimine' element={ <Logimine/>} />
          <Route path='valikud' element={ <Valikud/>} />
          <Route path='months' element={ <Months/>} />
          <Route path='animals' element={ <Animals/>} />
          <Route path='words' element={ <Words/>} />

        </Routes>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"/>
    </div>
  );
}

export default App;