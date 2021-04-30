import React, {useState} from "react";
import "./CategoriesComponent.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {getRandomByCategoryName} from "../services/ApiService";

function CategoriesComponent(props) {
  const [categoryJoke, setCategoryJoke] = useState();

  const categoryOnClick = async (chosenCategory) => {
    const result = await getRandomByCategoryName(chosenCategory);
    result ? setCategoryJoke(result) : setCategoryJoke(null);
  };
  console.log(categoryJoke);
  return (
    <div className="category__container">
      <h3 className="category__title">by Category..</h3>
      <div className="category__body">
        <ButtonGroup
          className="category__buttons"
          orientation="vertical"
          color="primary"
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
          {categoryJoke ? <li>{categoryJoke.value}</li> : null}
        </div>
      </div>
    </div>
  );
}

export default CategoriesComponent;
