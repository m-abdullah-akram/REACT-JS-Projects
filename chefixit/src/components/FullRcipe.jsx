import ReactMarkdown from "react-markdown";

export default function FullRecipe({ recipe }) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Fixes</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}
