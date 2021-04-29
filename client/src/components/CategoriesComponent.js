import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function CategoriesComponent(props) {
  const [selectedCategory, setSelectedCategory] = useState();

  const categoryOnClick = (chosenCategory) => {
    setSelectedCategory(chosenCategory);
  };

  return (
    <div>
      <h2>Random Joke by Category</h2>
      <ButtonGroup
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
    </div>
  );
}

export default CategoriesComponent;
