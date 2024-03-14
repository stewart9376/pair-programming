import { useState } from "react";
import Card from "../Card/Card.js";
import "./Cards.scss";

export default function Cards() {
  const [items, setItems] = useState();

  return (
    <div className="container">
      <Card />
    </div>
  );
}
