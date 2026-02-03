import { useRef, useState } from "react";

function Numbrid() {
  const originaalNumbrid = [4, 23, 7, 39, 19, 0, 9, 14, 135, 8, 99];

  const [numbrid, setNumbrid] = useState(originaalNumbrid);
  const numbrRef = useRef();

  // numbri lisamise võimalus panna
  const lisaNumber = () => {
    const uusNumber = Number(numbrRef.current.value);
    if (numbrRef.current.value !== "" && !isNaN(uusNumber)) {
      setNumbrid([...numbrid, uusNumber]);
      numbrRef.current.value = "";
    }
  };

  // sorteeri
  const sorteeriKasvavalt = () => {
    const sorteeritud = [...numbrid].sort((a, b) => a - b);
    setNumbrid(sorteeritud);
  };

  const sorteeriKahanevalt = () => {
    const sorteeritud = [...numbrid].sort((a, b) => b - a);
    setNumbrid(sorteeritud);
  };

  const sorteeriEsimeseNumbritahestiku = () => {
    const sorteeritud = [...numbrid].sort((a, b) => {
      const aEsimene = a.toString()[0];
      const bEsimene = b.toString()[0];
      return aEsimene.localeCompare(bEsimene);
    });
    setNumbrid(sorteeritud);
  };

  const sorteeriEsimeseNumriVastupidi = () => {
    const sorteeritud = [...numbrid].sort((a, b) => {
      const aEsimene = a.toString()[0];
      const bEsimene = b.toString()[0];
      return bEsimene.localeCompare(aEsimene);
    });
    setNumbrid(sorteeritud);
  };

  // filtreeri
  const filtreeriSuuremadKui8 = () => {
    const filtreeritud = numbrid.filter(number => number > 8);
    setNumbrid(filtreeritud);
  };

  const filtreeriVaiksemadKui10 = () => {
    const filtreeritud = numbrid.filter(number => number < 10);
    setNumbrid(filtreeritud);
  };

  const filtreeriPaarisarvud = () => {
    const filtreeritud = numbrid.filter(number => number % 2 === 0);
    setNumbrid(filtreeritud);
  };

  const filtreeriPaaritudArvud = () => {
    const filtreeritud = numbrid.filter(number => number % 2 !== 0);
    setNumbrid(filtreeritud);
  };

  const filtreeriAlgavad1 = () => {
    const filtreeritud = numbrid.filter(number => 
      number.toString()[0] === "1"
    );
    setNumbrid(filtreeritud);
  };

  const filtreeriSisaldavad3 = () => {
    const filtreeritud = numbrid.filter(number => 
      number.toString().includes("3")
    );
    setNumbrid(filtreeritud);
  };

  const taastaOriginaal = () => {
    setNumbrid(originaalNumbrid);
  };

  return (
    <div>
      <div>
        <h3>Lisa uus number</h3>
        <input ref={numbrRef} type="number" placeholder="Sisesta number" />
        <button onClick={lisaNumber}>Lisa</button>
      </div>
<br />
      <div>
        <button onClick={sorteeriKasvavalt}>Kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Kahanevalt</button>
        <button onClick={sorteeriEsimeseNumbritahestiku}>Esimese numbri järgi</button>
        <button onClick={sorteeriEsimeseNumriVastupidi}>Esimese numbri vastupidi</button>
      </div>
<br />
      <div>
        <button onClick={filtreeriSuuremadKui8}>Suuremad kui 8</button>
        <button onClick={filtreeriVaiksemadKui10}>Väiksemad kui 10</button>
        <button onClick={filtreeriPaarisarvud}>Paarisarvud</button>
        <button onClick={filtreeriPaaritudArvud}>Paaritud arvud</button>
        <button onClick={filtreeriAlgavad1}>Algavad 1-ga</button>
        <button onClick={filtreeriSisaldavad3}>Sisaldavad 3-e</button>
      </div>
<br />
      <button onClick={taastaOriginaal}>
        Taasta originaal numbrid
      </button>

      <div>
        <h3>Numbrid</h3>
        {numbrid.map((number, index) => (
          <div key={index}>
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Numbrid;