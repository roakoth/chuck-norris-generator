import logo from "./logo.svg";
import React from "react";
import "./App.css";
import JokeCategories from "./JokeCategory";
import Joke from "./Joke";

function App() {
  const [selectedCategory, setSelectedCategory] = React.useState();
  return (
    <div className="App">
      <h1> Chuck Norris Jokes App</h1>
      <JokeCategories setCategory={setSelectedCategory} />
      <Joke category={selectedCategory} />
    </div>
  );
}

export default App;
