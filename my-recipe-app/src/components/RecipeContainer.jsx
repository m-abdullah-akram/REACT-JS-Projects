import { useEffect, useState } from "react";
import styles from "./cssStyles/recipeContainer.module.css";

const YOUR_API_KEY = "YOUR SPOONACULAR API KEY HERE";
export default function RecipeContainer({ foodId }) {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (foodId) {
      async function getRecipe() {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${YOUR_API_KEY}`,
        );
        const recipe = await data.json();
        // console.log("here is your recipe : ", recipe);
        alert(`You clicked on ${foodId}`);
        setRecipe(recipe);
        setIsLoading(false);
      }
      getRecipe();
      console.log("Fetching recipe details for foodId: ", foodId);
    }
  }, [foodId]);
  return (
    <div className={styles.recipeCard}>
      <h2>{recipe.title}</h2>

      <img src={recipe.image} alt={recipe.title} />

      <p>
        <strong>Ready In:</strong> {recipe.readyInMinutes} mins
      </p>
      <p>
        <strong>Servings:</strong> {recipe.servings}
      </p>

      <p>
        <strong>Health Score:</strong> {recipe.healthScore} / 100
      </p>

      {/* <p>
        <strong>Price Per Serving:</strong> ${recipe.pricePerServing.toFixed(2)}
      </p> */}

      {/* Diet Info */}
      <div className="badges">
        {recipe.vegetarian && <span>Vegetarian</span>}
        {recipe.vegan && <span>Vegan</span>}
        {recipe.glutenFree && <span>Gluten Free</span>}
        {recipe.dairyFree && <span>Dairy Free</span>}
      </div>

      {/* Ingredients */}
      <div className="ingredients">
        <h4>Ingredients:</h4>
        <ul>
          {recipe.extendedIngredients?.map((item) => (
            <li key={item.id}>{item.original}</li>
          ))}
        </ul>
      </div>
      <div className="instructions">
        <h4 className="instructions-title">Instructions:</h4>

        {isLoading ? (
          <p>Loading instructions...</p>
        ) : (
          <ol className="instructions-list">
            {recipe.analyzedInstructions[0].steps.map((step, index) => (
              <li key={index} className="instructions-item">
                {step.step}
              </li>
            ))}
          </ol>
        )}
      </div>
      {/* External Link */}
      <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">
        <button>View Full Recipe</button>
      </a>
    </div>
  );
}
