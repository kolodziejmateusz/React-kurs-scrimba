export default function IngredientsList({ ingredients, getRecipe }) {
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      {ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
            <p>After clicking, please wait a few seconds for the recipe to be generated</p>
          </div>
          <button onClick={() => getRecipe()}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
