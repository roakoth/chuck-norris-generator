import React from "react";

const Joke = (props) => {
  const [joke, setJoke] = React.useState();

  React.useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${props.category}`)
      .then((response) => response.json())
      .then((jokeResponse) => setJoke(jokeResponse.value));
  }, [props.category]);

  if (!joke) {
    <p> Please select a category</p>;
  }
  return <p> {joke} </p>;
};

export default Joke;
