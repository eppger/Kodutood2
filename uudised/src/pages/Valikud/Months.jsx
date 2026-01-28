import { useState } from 'react';

function Months() {
  const [months, setMonths] = useState(['March', 'Jan', 'Feb', 'Dec']);

  const tyhjenda = () => {
    setMonths([]);
  }

  return (
    <div>
      <h2>Kuud</h2>
      <div>Kuude arv: {months.length}</div>
      <button onClick={tyhjenda}>Tühjenda</button>
      
      {months.length === 0 && <div>Kuid pole</div>}
      
      {months.map((kuu, index) => (
        <div key={index}>{kuu}</div>
      ))}
    </div>
  );
}

export default Months;