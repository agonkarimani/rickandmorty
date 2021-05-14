import React, { useState, useEffect } from "react";
import "App.css";
import Cards from "Cards.jsx";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const url = "https://rickandmortyapi.com/api/character/?page=1";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resBody) => setCharacters(resBody.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      {characters.map((character) => {
        const { id, name, gender, species, status } = character;
        return (
          <Cards
            key={id}
            name={name}
            gender={gender}
            species={species}
            status={status}
          />
        );
      })}
    </div>
  );
}
