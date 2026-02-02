import { useRef, useState } from 'react';

function Tagasiside() {
    const [tagasisided, määraTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);
    const tagasisidedRef =useRef();

    function kustuta(index) {
        tagasisided.splice(index, 1);
        määraTagasisided(tagasisided.slice());
    }

    function lisaUusTagasiside() {
        tagasisided.push(tagasisidedRef.current.value);
        määraTagasisided (tagasisided.slice());

    }

    return (
        <div>
            <br />
            Tagasisided:
            <br /><br />
            {tagasisided.map((element, index) => 
            <div>
            <span>{element}</span>
            <button onClick={() => kustuta(index)}>x</button>
            </div>)}
            <br />
            <label>Lisa uus tagasiside:</label>
            <input ref={tagasisidedRef} type="text"/>
            <button onClick={() => lisaUusTagasiside()}>Sisesta</button>
        </div>
    )
}

export default Tagasiside;