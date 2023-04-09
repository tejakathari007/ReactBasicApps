import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function randomAnimal() {
  const animal = ["bird", "horse", "cat", "cow", "dog", "gator", "horse"];
  return animal[Math.floor(Math.random() * animal.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, randomAnimal()]);
  };

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
}

export default App;
