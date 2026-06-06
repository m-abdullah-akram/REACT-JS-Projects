import { useState } from "react";
import FullRecipe from "./FullRcipe";
import Ingredients from "./Ingredients";
import { getRecipeFromGemini } from "../../ai";
export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(null);

  // when onSubmit is used than this function called \|/
  // function addIngredient(event) {
  //   event.preventDefault();
  //   console.log("Here are the ingredients", ingredients);
  //   console.log("clicked");
  //   const formData = new FormData(event.currentTarget);
  //   const newIngredient = formData.get("ingredient");
  //   console.log(newIngredient);
  //   if (newIngredient) {
  //     setIngredients([...ingredients, newIngredient]);
  //     event.currentTarget.reset();
  //   }
  // }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient) {
      setIngredients([...ingredients, newIngredient]);
    }
  }
  async function getRecipe() {
    const recipe = await getRecipeFromGemini(ingredients);
    setRecipe(recipe);
  }
  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add to Chef Pantry"
          name="ingredient"
        />
        <button>Add to Chef Pantry</button>
      </form>
      <Ingredients ingredients={ingredients} getRecipe={getRecipe} />
      {recipe && <FullRecipe recipe={recipe} />}
    </main>
  );
}
