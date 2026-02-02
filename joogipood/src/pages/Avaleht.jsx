import { useState, useRef } from "react";
import joogidFailist from "../joogid.json";

function Avaleht() {
  const [joogid, uuendaJoogid] = useState(joogidFailist);
  const jookRef = useRef();

  function lisaUusJook() {
    joogidFailist.push(jookRef.current.value);
    uuendaJoogid(joogidFailist.slice());
    jookRef.current.value = "";
  }

  return (
    <div>
      <h3>Joogid</h3>
      {joogid.map((element, index) => (
        <div key={index}>
          <span>{element}</span>
        </div>
      ))}
      <br />
      <label>Lisa uus jook:</label>
      <input ref={jookRef} type="text" />
      <button onClick={lisaUusJook}>Sisesta</button>
    </div>
  );
}

export default Avaleht;