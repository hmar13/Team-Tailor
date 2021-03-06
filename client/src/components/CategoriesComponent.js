import React, {useState} from "react";
import "./CategoriesComponent.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {getRandomByCategoryName} from "../services/ApiService";
const Filter = require("bad-words");
const filter = new Filter();

function CategoriesComponent(props) {
  const [categoryJoke, setCategoryJoke] = useState();

  const categoryOnClick = async (chosenCategory) => {
    const result = await getRandomByCategoryName(chosenCategory);
    result ? setCategoryJoke(result) : setCategoryJoke(null);
  };

  return (
    <div className="category__container">
      <h3 className="category__title">by Category..</h3>
      <div className="category__body">
        <ButtonGroup
          data-testid="buttonGroup"
          className="category__buttons"
          orientation="vertical"
          color="secondary"
          aria-label="vertical contained primary button group"
          variant="contained"
        >
          {props.props
            ? props.props.map((category, index) => {
                return (
                  <Button key={index} onClick={() => categoryOnClick(category)}>
                    {category}
                  </Button>
                );
              })
            : null}
        </ButtonGroup>
        <div className="category__joke">
          {categoryJoke ? <li>{filter.clean(categoryJoke.value)}</li> : null}
        </div>
      </div>
    </div>
  );
}

export default CategoriesComponent;
