import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "./RecipeEdit";
// import SearchBox from "./SearchBox";
export const RecipeContext = React.createContext();
const LOCAL_STORGAE_KEY = "cookingWithReact.recipes";
function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORGAE_KEY);
    if (recipeJSON != null) return JSON.parse(recipeJSON);
    else return sampleRecipes;
  });
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  // useEffect(() => {
  //   const recipeJSON = localStorage.getItem(LOCAL_STORGAE_KEY);
  //   if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  // }, []);
  useEffect(() => {
    {
      /*Instead of loading from local disk fetch from API or create my own backend*/
    }
    localStorage.setItem(LOCAL_STORGAE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const handleRecipeSelect = (id) => {
    setSelectedRecipeId(id);
  };
  const handleRecipeChange = (id, recipe) => {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  };
  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  };
  const handleDeleteRecipe = (id) => {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    const filteredRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(filteredRecipes);
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        handleRecipeAdd,
        handleDeleteRecipe,
        handleRecipeSelect,
        handleRecipeChange,
      }}
    >
      {/* <SearchBox /> */}
      <RecipeList
        recipes={recipes}
        //handleRecipeAdd={handleRecipeAdd}
        //handleDeleteRecipe={handleDeleteRecipe}
      />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chiken",
    servings: 3,
    cookTime: "1:45",
    instructions: "1.Put Salt on Chiken\n 2.Put Pork in Oven\n 3.Eat pork\n",
    ingredients: [
      {
        id: 1,
        name: "Chiken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1.Put Paprika on pork\n 2.Put Pork in Oven\n 3.Eat Chiken\n",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounds",
      },
      {
        id: 2,
        name: "Paparika",
        amount: "2 Tbs",
      },
    ],
  },
];
export default App;
