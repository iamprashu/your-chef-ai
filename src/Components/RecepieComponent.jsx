// RecepieComponent.jsx
import React, { useContext } from 'react';
import { ApplicationContext } from '../Contexts/ApplicationContext';

function RecepieComponent() {
  const { recipe } = useContext(ApplicationContext);

  if (!recipe || recipe.length === 0) {
    return <p className="text-gray-300">No recipe available yet.</p>;
  }

  let parsedData;

  try {
    const raw = recipe[0];

    const cleaned = typeof raw === 'string'
      ? raw.replace(/```json|```/g, '').trim()
      : raw;

    parsedData = typeof cleaned === 'string' ? JSON.parse(cleaned) : cleaned;

    const recipeKey = Object.keys(parsedData)[0];
    const recipeData = parsedData[recipeKey];

    return (
      <div className="p-4 bg-gray-700 text-white rounded-xl shadow-lg max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">{recipeData.Title}</h2>

        <h3 className="text-xl font-semibold mb-2">🧂 Ingredients:</h3>
        <ul className="list-disc pl-6 space-y-1">
          {recipeData.Ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">👨‍🍳 Steps:</h3>
        <ol className="pl-6 space-y-2 list-decimal">
          {recipeData.Steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    );

  } catch (error) {
    console.error('Recipe JSON parse failed:', error);
    return (
      <p className="text-red-500">
        ⚠️ Error occurred while parsing the recipe. Please try again.
      </p>
    );
  }
}

export default RecepieComponent;
