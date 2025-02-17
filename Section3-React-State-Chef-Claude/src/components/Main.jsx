import { useState, useRef } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./ingredientsList";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "makaron",
    "zioła",
    "kurczak",
    "papryka",
  ]);

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prev) => [...prev, newIngredient]);
  }

  const [recipe, setRecipe] = useState(null);
  const recipeSection = useRef(null);
  console.log(recipeSection);

  async function getRecipe() {
    const generatedRecipe = await getRecipeFromMistral(ingredients);

    setRecipe(generatedRecipe);
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

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          ref={recipeSection}
        />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
