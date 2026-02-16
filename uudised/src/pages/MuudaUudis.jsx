import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

function MuudaUudis() {
  const { index } = useParams();
  const navigate = useNavigate();
  const uudisRef = useRef();
  
  const uudisedLS = JSON.parse(localStorage.getItem("uudised")) || [];
  const leitudUudis = uudisedLS[index];

  const muuda = () => {
    const uuendatudUudised = [...uudisedLS]; // Loo uus koopia
    uuendatudUudised[index] = uudisRef.current.value;
    localStorage.setItem("uudised", JSON.stringify(uuendatudUudised));
    navigate("/halda");
  };

  return (
    <div>
      <label>Uudis</label> <br />
      <input ref={uudisRef} defaultValue={leitudUudis} type="text" /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  );
}

export default MuudaUudis;