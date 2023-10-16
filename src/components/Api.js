import React, { useState, useEffect } from 'react';

function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);


  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
   
    .then(data => setCharacters(data.results))
  },[])

  return (
    <div>
      <ul>
        {characters.map((character) => (
          <li key={character.id} onClick={() => setSelectedCharacter(character)}>
            {character.name}
          </li>
        ))}
      </ul>

      {selectedCharacter && (
        <div>
          <h2>{selectedCharacter.name}</h2>
          <p>Status: {selectedCharacter.status}</p>
          <p>Species: {selectedCharacter.species}</p>
          <p>Gender: {selectedCharacter.gender}</p>
    
          <button onClick={() => setSelectedCharacter(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default RickAndMorty;
