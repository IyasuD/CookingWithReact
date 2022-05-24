import React, { useState } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
function App() {
  return <RecipeList recipes={sampleRecipes} />;
}
const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chiken",
    serving: 3,
    cookTime: "1:45",
    instructions: "Put Salt on Chiken\n 2.Put Pork in Oven\n 3.Eat pork\n",
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
    serving: 5,
    cookTime: "0:45",
    instructions: "Put Paprika on pork\n 2.Put Pork in Oven\n 3.Eat Chiken\n",
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
