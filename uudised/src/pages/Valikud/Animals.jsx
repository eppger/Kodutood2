import { useState } from 'react';

function Animals() {
  const [animals, setAnimals] = useState(['pigs', 'goats', 'sheep']);

  const tyhjenda = () => {
    setAnimals([]);
  }

  return (
    <div>
      <h2>Loomad</h2>
      <div>Loomade arv: {animals.length}</div>
      <button onClick={tyhjenda}>Tühjenda</button>
      
      {animals.length === 0 && <div>Loomi pole</div>}
      
      {animals.map((loom, index) => (
        <div key={index}>{loom}</div>
      ))}
    </div>
  );
}

export default Animals;