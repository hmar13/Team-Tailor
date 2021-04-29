import React, {useState, useEffect} from "react";
import CategoriesComponent from "./CategoriesComponent";
import QueryComponent from "./QueryComponent";
import {
  getCategories,
  // getRandomByCategoryName,
  // getJokeByQueryWord,
} from "../services/ApiService";

function BodyComponent() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function fetchCategories() {
      const allCategories = await getCategories();
      setCategories(allCategories);
    }
    fetchCategories();
  }, []);

  return (
    <div>
      <QueryComponent />
      <div>{categories ? <CategoriesComponent props={categories} /> : null}</div>
    </div>
  );
}

export default BodyComponent;
