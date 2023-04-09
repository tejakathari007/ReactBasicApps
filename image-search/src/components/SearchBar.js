import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(term);
    onSubmit(term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>What you want to see today, Enter below!!</label>
        <input value={term} onChange={handleChange} placeholder="cars" />
      </form>
    </div>
  );
}

export default SearchBar;
