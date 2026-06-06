export default function Ingredients({ingredients, getRecipe}) {
    return (
        <section>
        <div>
          <h2>Chef Pantry — Items you added :</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          {ingredients.length === 0 && <p>No items in your Chef Pantry yet.</p>}
        </div>
        {ingredients.length > 0 && (
          <div className="get-recipe-container">
            <div>
              <h3>Ready for the Chef?</h3>
              <p>Let the Chef Fix It — craft a recommendation from your Chef Pantry.</p>
            </div>
            <button
              className={ingredients.length < 4 ? "tooltip-disabled" : ""}
              data-tooltip="Add at least 4 items for best Chef Fixes"
              disabled={ingredients.length < 4}
              onClick = {()=>{getRecipe()}}
            >
              Let the Chef Fix It
            </button>
          </div>
        )}
      </section>
    )
}