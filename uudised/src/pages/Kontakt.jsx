import { useState } from "react";

function Kontakt() {
  const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState (false);
  const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState (false);
  const [n2itaTelTasku, muudaN2itaTelTasku] = useState (false);
 
  return ( <div>
      <br />
    <div>See on kontaktide leht, nähtav localhost:3000 aadressil</div>
    <br />
    <img src="https://www.theperfectloaf.com/wp-content/uploads/2020/01/theperfectloaf-spelt-rye-whole-wheat-sourdough-bread-1-2-1080x720.jpg" alt="The Perfect Loaf"/>
    <br />
    <br />
    <div>Võta meiega ühendust!</div>
    <br />

    <div>Meie esindused:</div>
    <br />

    <div className={n2itaTelKristiine === true ? "valitud" : undefined} onClick={() => muudaN2itaTelKristiine (!n2itaTelKristiine)}>Kristiine keskus</div>
    {n2itaTelKristiine && <div className= "valitud">+3548888888</div>}
    <div className={n2itaTelKristiine === true ? "valitud" : undefined}>Endla 45</div>
    <br />

    <div className={n2itaTelYlemiste === true ? "valitud" : undefined} onClick={() => muudaN2itaTelYlemiste (!n2itaTelYlemiste)}>Ülemiste keskus</div>
    {n2itaTelYlemiste && <div className= "valitud">+3568465455</div> }
    <div className={n2itaTelYlemiste === true ? "valitud" : undefined} >Suur-Sõjamäe 4</div>
    <br />

    <div className={n2itaTelTasku === true ? "valitud" : undefined} onClick={() => muudaN2itaTelTasku (!n2itaTelTasku)}>Taske keskus</div>
    {n2itaTelTasku && <div className= "valitud">+3954555555</div>}
    <div className={n2itaTelTasku === true ? "valitud" : undefined} >Turu 2</div>

</div>);
}

export default Kontakt;