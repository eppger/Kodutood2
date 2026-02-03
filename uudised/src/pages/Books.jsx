import { useState } from "react";

function Books() {
  const originaalRaamatud = [
    "The Great Gatsby",
    "War and Peace",
    "Hamlet",
    "Moby Dick",
    "Nukitsamees",
    "Bullerby lapsed",
    "Kevade"
  ];

  const [raamatud, setRaamatud] = useState(originaalRaamatud);

  // SORTEERIMISED
  const sorteeriEsimeseTahe = () => {
    const sorteeritud = [...raamatud].sort((a, b) => a.localeCompare(b));
    setRaamatud(sorteeritud);
  };

  const sorteeriVastupidi = () => {
    const sorteeritud = [...raamatud].sort((a, b) => b.localeCompare(a));
    setRaamatud(sorteeritud);
  };

  const sorteeriPikkuse = () => {
    const sorteeritud = [...raamatud].sort((a, b) => a.length - b.length);
    setRaamatud(sorteeritud);
  };

  const sorteeriTeiseTahe = () => {
    const sorteeritud = [...raamatud].sort((a, b) => {
      const aTeineTabt = a[1] || "";
      const bTeineTabt = b[1] || "";
      return aTeineTabt.localeCompare(bTeineTabt);
    });
    setRaamatud(sorteeritud);
  };

  const sorteeriSonadeArv = () => {
    const sorteeritud = [...raamatud].sort((a, b) => {
      const aSonadeArv = a.split(" ").length;
      const bSonadeArv = b.split(" ").length;
      return aSonadeArv - bSonadeArv;
    });
    setRaamatud(sorteeritud);
  };

  const sorteeriEelvimaseTahe = () => {
    const sorteeritud = [...raamatud].sort((a, b) => {
      const aEelvimaneTaht = a[a.length - 2] || "";
      const bEelvimaneTaht = b[b.length - 2] || "";
      return aEelvimaneTaht.localeCompare(bEelvimaneTaht);
    });
    setRaamatud(sorteeritud);
  };

  // FILTREERIMISED
  const filtreeriThe = () => {
    const filtreeritud = originaalRaamatud.filter(raamat => 
      raamat.startsWith("The")
    );
    setRaamatud(filtreeritud);
  };

  const filtreeriAnd = () => {
    const filtreeritud = originaalRaamatud.filter(raamat => 
      raamat.includes("and")
    );
    setRaamatud(filtreeritud);
  };

  const filtreeriRohkemKui10 = () => {
    const filtreeritud = originaalRaamatud.filter(raamat => 
      raamat.length > 10
    );
    setRaamatud(filtreeritud);
  };

  const filtreeriVahemKui7 = () => {
    const filtreeritud = originaalRaamatud.filter(raamat => 
      raamat.length < 7
    );
    setRaamatud(filtreeritud);
  };

  const filtreeriKolmVoiRohkemSona = () => {
    const filtreeritud = originaalRaamatud.filter(raamat => 
      raamat.split(" ").length >= 3
    );
    setRaamatud(filtreeritud);
  };

  const filtreeriEelvimaneTahtC = () => {
    const filtreeritud = originaalRaamatud.filter(raamat => 
      raamat[raamat.length - 2] === "c"
    );
    setRaamatud(filtreeritud);
  };

  const taastaOriginaal = () => {
    setRaamatud(originaalRaamatud);
  };

  return (
    <div>
      <h2>Raamatud</h2>
      
      <div>
        <br />
        <button onClick={sorteeriEsimeseTahe}>Esimese tähe järgi</button>
        <button onClick={sorteeriVastupidi}>Vastupidises järjekorras</button>
        <button onClick={sorteeriPikkuse}>Sõnapikkuse järgi</button>
        <button onClick={sorteeriTeiseTahe}>Teise tähe järgi</button>
        <button onClick={sorteeriSonadeArv}>Sõnade arvu järgi</button>
        <button onClick={sorteeriEelvimaseTahe}>Eelviimase tähe järgi</button>
      </div>

      <div>
        <br />
        <button onClick={filtreeriThe}>"The"'ga algavad</button>
        <button onClick={filtreeriAnd}>Keskel "and"</button>
        <button onClick={filtreeriRohkemKui10}>Rohkem kui 10 tähemärki</button>
        <button onClick={filtreeriVahemKui7}>Vähem kui 7 tähemärki</button>
        <button onClick={filtreeriKolmVoiRohkemSona}>3+ sõna</button>
        <button onClick={filtreeriEelvimaneTahtC}>Eelviimane täht "c"</button>
      <br /><br />
      </div>

      <button onClick={taastaOriginaal}>
        Taasta originaal nimekiri
      </button> 
      <br /><br />

      <div>
        {raamatud.map((raamat, index) => (
          <div key={index}>
            {raamat}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;