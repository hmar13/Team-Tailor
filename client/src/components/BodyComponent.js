import React, {useState, useEffect} from "react";
import "./BodyComponent.css";
import CategoriesComponent from "./CategoriesComponent";
import QueryComponent from "./QueryComponent";
import {getCategories} from "../services/ApiService";

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
    <div className="body__container">
      <QueryComponent />
      <div>{categories ? <CategoriesComponent props={categories} /> : null}</div>
    </div>
  );
}

export default BodyComponent;
