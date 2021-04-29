import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {getJokeByQueryWord} from "../services/ApiService";

function QueryComponent() {
  const [text, setText] = useState();
  const [jokes, setJokes] = useState();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleJokesFetch = async () => {
    const result = await getJokeByQueryWord(text);
    console.log(result);
    setJokes(result);
  };
  return (
    <div>
      <h2>Random Jokes by Word</h2>
      <form noValidate autoComplete="on">
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={handleChange}
        />
        <Button color="primary" variant="contained" onClick={handleJokesFetch}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default QueryComponent;
