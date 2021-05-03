import React, {useState, useRef} from "react";
import "./QueryComponent.css";
import Button from "@material-ui/core/Button";
import {getJokeByQueryWord} from "../services/ApiService";
const Filter = require("bad-words");
const filter = new Filter();

function QueryComponent() {
  const [jokes, setJokes] = useState();
  const [inputWord, setInputWord] = useState("Enter your word to see results");
  const inputRef = useRef(null);

  const handleJokesFetch = async () => {
    if (inputRef.current.value) {
      setInputWord("Searched: " + inputRef.current.value);
      const result = await getJokeByQueryWord(inputRef.current.value);
      if (result) {
        setJokes(result);
      }
    }
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleJokesFetch();
    }
  };

  return (
    <div className="query__container">
      <h2 className="query_title">Random Jokes</h2>
      <h3 className="query_title">by Word..</h3>
      <form noValidate autoComplete="on" className="query__form">
        <input data-testid="queryInput" type="text" onKeyDown={keyPress} ref={inputRef} />
        <Button
          data-testid="queryButton"
          color="secondary"
          variant="contained"
          onClick={handleJokesFetch}
        >
          Submit
        </Button>
        <p data-testid="inputWord">{inputWord}</p>
      </form>
      <div>
        <ul className="query__jokes">
          {jokes && jokes.result
            ? jokes.result.map((joke, index) => {
                return <li key={index}>{filter.clean(joke.value)}</li>;
              })
            : null}
        </ul>
      </div>
    </div>
  );
}

export default QueryComponent;
