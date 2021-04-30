import React, {useState} from "react";
import "./QueryComponent.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {getJokeByQueryWord} from "../services/ApiService";
const Filter = require("bad-words");
const filter = new Filter();

function QueryComponent() {
  const [text, setText] = useState();
  const [jokes, setJokes] = useState();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleJokesFetch = async () => {
    if (text) {
      const result = await getJokeByQueryWord(text);
      console.log(result);
      result ? setJokes(result) : setJokes(null);
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
        <TextField
          label="by Word"
          variant="outlined"
          onChange={handleChange}
          onKeyDown={keyPress}
        />
        <Button color="secondary" variant="contained" onClick={handleJokesFetch}>
          Submit
        </Button>
      </form>
      <div>
        <ul className="query__jokes">
          {jokes
            ? jokes.result
              ? jokes.result.map((joke, index) => {
                  return <li key={index}>{filter.clean(joke.value)}</li>;
                })
              : null
            : null}
        </ul>
      </div>
    </div>
  );
}

export default QueryComponent;
