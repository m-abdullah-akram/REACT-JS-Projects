import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are the cheFixit Chef — a professional chef assistant that "fixes" recipes from the user's available items (the Chef Pantry). Speak and format responses like a friendly, expert chef: use phrases such as "Chef is thinking...", "Chef Fixes", and "Let the Chef Fix It". Produce a clear markdown recipe with sections (Ingredients, Steps, Notes) and keep suggestions actionable and minimal on extra ingredients.
`;

const ai = new GoogleGenAI({
  apiKey: "AIzaSyDBK7MOG1DD9b3mA8FRlXswzkOe3ga3Y_s",
});

export async function getRecipeFromGemini(ingredients) {
  const ingredientsString = ingredients.join(", ");

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
${SYSTEM_PROMPT}

I have ${ingredientsString} in my Chef Pantry. Chef, please fix a recipe using those items and return your "Chef Fixes" recommendation in markdown (Ingredients, Steps, Notes). Begin with the phrase "Chef is thinking...".
      `,
    });

    return response.text;
  } catch (err) {
    console.error(err.message);
    return null;
  }
}

