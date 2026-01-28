import { useState } from 'react';

function Words() {
  const [words, setWords] = useState(['spray', 'elite', 'exuberant', 'destruction', 'present']);

  const tyhjenda = () => {
    setWords([]);
  }

  return (
    <div>
      <h2>Sõnad</h2>
      <div>Sõnade arv: {words.length}</div>
      <button onClick={tyhjenda}>Tühjenda</button>
      
      {words.length === 0 && <div>Sõnu pole</div>}
      
      {words.map((sona, index) => (
        <div key={index}>{sona}</div>
      ))}
    </div>
  );
}

export default Words;