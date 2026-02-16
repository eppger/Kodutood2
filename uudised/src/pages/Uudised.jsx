import { Link } from "react-router-dom";

function Uudised() {
  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

  return (
    <div>
      <div>See on uudiste leht, nähtav localhost:3000/uudised aadressil</div>
      {uudised.length === 0 && <div>Ühtegi uudist hetkel pole! Lisame õige pea.</div>}
      {uudised.length > 0 && (
        <div>
          {uudised.map((uudis, index) => (
            <Link key={index} to={"/uudis/" + index}>
              <div>{uudis}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Uudised;