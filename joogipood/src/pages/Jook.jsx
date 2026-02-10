import { useParams } from "react-router-dom";
import joogid from "../joogid.json";

function Jook() {
  const { number } = useParams();
  const leitudJook = joogid[number];

  if (leitudJook === undefined) {
    return <div>Jooki ei leitud!</div>;
  }

  return (
    <div>
      <div>{leitudJook}</div>
    </div>
  );
}

export default Jook;