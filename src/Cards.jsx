import React, { useState } from "react";
import "./Cards.css";

export default function Cards({ image, name, gender, species, status }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="Cards">
      <div className="Cards__style">
        <h2 className="Cards__header">{name}</h2>
        <button onClick={() => setIsActive(!isActive)}>Show more</button>
        {isActive && (
          <ul className="Cards__list">
            <li>{image}</li>
            <li>{gender}</li>
            <li>{species}</li>
            <li>{status}</li>
          </ul>
        )}
      </div>
    </section>
  );
}
