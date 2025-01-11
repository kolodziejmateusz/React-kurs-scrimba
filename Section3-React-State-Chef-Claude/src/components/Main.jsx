import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./ingredientsList";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  /**
   * Wyzwanie: Uzyskaj przepis od AI!
   *
   * To będzie trochę trudniejsze wyzwanie, które wymaga od Ciebie
   * krytycznego myślenia i zastosowania umiejętności, które
   * do tej pory ćwiczyłeś(-aś) i poznawałeś(-aś).
   *
   * Używając funkcji `getRecipeFromChefClaude` lub
   * `getRecipeFromMistral`, spraw, aby po kliknięciu przez użytkownika
   * przycisku "Uzyskaj przepis", tekstowa odpowiedź od AI była wyświetlana
   * w komponencie <ClaudeRecipe>.
   *
   * Na razie renderuj surowy markdown, który zwraca AI,
   * nie martw się jeszcze o to, żeby wyglądało to ładnie.
   * (Wkrótce użyjemy pakietu, który zajmie się renderowaniem markdown za nas.)
   */
  const [ingredients, setIngredients] = useState([]);

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prev) => [...prev, newIngredient]);
  }

  const [recipe, setRecipe] = useState(null);

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
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
