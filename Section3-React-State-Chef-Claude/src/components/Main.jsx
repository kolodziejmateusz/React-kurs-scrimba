import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prev) => [...prev, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredients} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </main>
  );
}
