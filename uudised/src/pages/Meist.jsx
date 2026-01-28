import { useState } from "react";

function Meist() {
  const [kontakt, n2itaKontakt] = useState("");
  const [message, määraMessage] = useState("Vali mõni tegevus");
    
   return ( <div>
    <br />
    <img src="https://www.theperfectloaf.com/wp-content/uploads/2020/01/theperfectloaf-a-simple-workweek-sourdough-bread-recipe-2-1080x720.jpg" alt="The Perfect Loaf" className="rounded-image"/>
<br /><br />
<div>
<div>{ message }</div>
<br />
<button onClick={() => määraMessage("Selleks saada meile e-mail jobs@html-css.com")}>Kandideeri tööle</button>
<button onClick={() => määraMessage("Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal")}>Vaata meie töötajaid</button>
<button onClick={() => määraMessage("Ühenduse võtmiseks mine lehele Kontakt")}>Võta meiega ühendust</button>
</div>

<br />
<br />

<div>Meie töötajad:</div>
<br />
<div>Arvo Pärt</div>
<div>Peapagar-kondiiter</div>
<button onClick={() => n2itaKontakt('+3654555555')}>Võta ühendust</button>
<br /><br />

<div>Kelly sildaru</div>
<div>Turundusjuht</div>
<button onClick={() => n2itaKontakt('+36666666666666')}>Võta ühendust</button>
<br /><br />

<div>Maie Jaomaa</div>
<div>Kondiiter</div>
<button onClick={() => n2itaKontakt('+66666666666')}>Võta ühendust</button>
<br /><br />

<div>Epp Sasi</div>
<div>Pagar</div>
<button onClick={() => n2itaKontakt('+34444444444')}>Võta ühendust</button>
<br /><br />
{kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
</div>);
}

export default Meist;