import { useRef, useState } from "react"
import andjateFail from "../data/nimed.json"

function TagasisideAndjad() {
    const [andjad, uuendaAndjad] = useState(andjateFail);

    const filtreeriM = () => {
        const vastus = andjad.filter(element => element.startsWith("M"));
        uuendaAndjad(vastus);
    }
    const filterSixLetters = () => {
        const vastus = andjad.filter(element => element.length === 6);
        uuendaAndjad(vastus);
    }
    const filterEndingY = () => {
        const vastus = andjad.filter(element => element.endWith("y"));
        uuendaAndjad(vastus);
    }
    const sortZA = () => {
        andjad.sort();
        andjad.reverse();
        uuendaAndjad(andjad.slice());
    }

    const insertEST = () => {
        const vastus = andjad.map(element => "EST-" + element);
        uuendaAndjad(vastus);
    }
    const kustuta = (index) => {
        andjad.splice(index,1);
        uuendaAndjad(andjad.slice());
    }
    
    const andjaRef = useRef();

    const lisa = () => {
        andjad.push(andjaRef.current.value);
        uuendaAndjad(andjad.slice());
    }
  return (<div>
    <div>Kui palju nimesid on: {andjad.length} tk</div><br />
    <button onClick={filtreeriM}>M tähega algavad nimed</button>
    <button onClick={filterSixLetters}>Täpselt 6 kohalised nimed</button>
    <button onClick={filterEndingY}>Kõik y tähega lõppevad nimed</button>
    <button onClick={sortZA}>Sorteeri Z-A</button>
    <button onClick={insertEST}>Iga nime ette "EST-"</button><br /><br />
    {andjad.map((element, index) => 
    <div key={element}>
        {element}<button onClick={() => kustuta(index)}>Kustuta</button>
        </div>)}
    <label>Lisa uus nimi</label><br />
    <input ref={andjaRef} type="text" /> <br />
    <button onClick={lisa}>Lisa</button>

</div> 
)
}

export default TagasisideAndjad