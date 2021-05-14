import { useState } from "react";
import "./Card.css";

export default function Card({ name, gender, species, status }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="Card">
      <h2>{name}</h2>
      <button onClick={() => setIsActive(!isActive)}>Show</button>
      {isActive && (
        <>
          <ul>
            <li>{gender}</li>
            <li>{species}</li>
            <li>{status}</li>
          </ul>
        </>
      )}
    </section>
  );
}
