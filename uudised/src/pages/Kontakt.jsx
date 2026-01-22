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

    <div onClick={() => muudaN2itaTelKristiine (!n2itaTelKristiine)}>Kristiine keskus</div>
    {n2itaTelKristiine && <div>+3548888888</div>}
    <div>Endla 45</div>
    <br />

    <div onClick={() => muudaN2itaTelYlemiste (!n2itaTelYlemiste)}>Ülemiste keskus</div>
    {n2itaTelYlemiste && <div>+3568465455</div> }
    <div>Suur-Sõjamäe 4</div>
    <br />

    <div onClick={() => muudaN2itaTelTasku (!n2itaTelTasku)}>Taske keskus</div>
    {n2itaTelTasku && <div>+3954555555</div>}
    <div>Turu 2</div>

</div>);
}

export default Kontakt;