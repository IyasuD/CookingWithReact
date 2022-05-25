import React, { useContext, useEffect } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "./App";

export default function Recipe(props) {
  const { id, name, cookTime, servings, instructions, ingredients } = props;
  const { handleDeleteRecipe, handleRecipeSelect } = useContext(RecipeContext);
  useEffect(() => {
    console.log("Render");
    return () => {
      console.log("Unmount");
    };
  }, []);
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button
            onClick={() => {
              handleRecipeSelect(id);
            }}
            className="btn btn--primary mr-1"
          >
            Edit
          </button>
          <button
            className="btn btn--danger"
            onClick={() => handleDeleteRecipe(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Serving:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions</span>
        <div className="recipe__value  recipe__instructions recipe__value--indented">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients={ingredients} />
        </div>
        <div>{/* {Add person(chef) component who created the recipe} */}</div>
      </div>
    </div>
  );
}
