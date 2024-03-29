import React from "react";

export default function RecipeIngredientEdit({
  ingredinet,
  handleIngredientChange,
  handleIngredientDelete,
}) {
  const handleChange = (changes) => {
    handleIngredientChange(ingredinet.id, { ...ingredinet, ...changes });
  };
  return (
    <>
      <input
        className="recipe-edit__input"
        value={ingredinet.name}
        onInput={(e) => handleChange({ name: e.target.value })}
        type="text"
      />
      <input
        className="recipe-edit__input"
        value={ingredinet.amount}
        onInput={(e) => handleChange({ amount: e.target.value })}
        type="text"
      />
      <button
        className="btn btn--danger"
        onClick={() => handleIngredientDelete(ingredinet.id)}
      >
        &times;
      </button>
    </>
  );
}
