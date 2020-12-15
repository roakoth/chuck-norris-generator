import React from "react";
import "./App.css";

const JokeCategories = (props) => {
  const [categories, setCategories] = React.useState();

  React.useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((categories) => setCategories(categories));
  });

  if (!categories) {
    return <p> Loading...</p>;
  }

  return (
    <div>
      <label> Select a category </label>
      <select
        className="styling"
        onChange={(e) => props.setCategory(e.target.value)}
      >
        {[categories.map((category) => <option>{category}</option>)]}
      </select>
    </div>
  );
};

export default JokeCategories;
