import React, { useState, useEffect } from "react";
import "./App.css";
import "./Cards.jsx";
import Cards from "./Cards.jsx";

export default function App() {
  const url = "https://rickandmortyapi.com/api/character/?page=1";
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resBody) => setCharacters(resBody.results));
  }, [url]);

  return (
    <div className="App">
      <h1 className="App">Rick & Morty Characters</h1>
      {characters.map((character) => {
        const { image, name, gender, species, status } = character;

        return (
          <Cards
            image={image}
            name={name}
            gender={gender}
            species={species}
            status={status}
          />
        );
      })}
      <h1 className="App">Rick & Morty Characters</h1>
    </div>
  );
}
