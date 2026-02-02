import { useState } from "react";
import joogidFailist from "../joogid.json";

function HaldaJooke() {
    const [joogid, uuendaJoogid] = useState(joogidFailist);

  function kustuta(index) {
    joogidFailist.splice(index, 1);
    uuendaJoogid(joogidFailist.slice());
  }



  return (
    <div>
      <h3>Joogid:</h3>
      {joogid.map((element, index) =>
        <div>
          <span>{element}</span>
          <button onClick={() => kustuta(index)}>X</button>
        </div>
      )}
    </div>
  );
}

export default HaldaJooke;