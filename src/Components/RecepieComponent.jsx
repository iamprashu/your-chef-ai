// RecepieContext.jsx
import React, { useContext } from 'react';
import { ApplicationContext } from '../Contexts/ApplicationContext';

function RecepieComponent() {
  const { recipe,setItemList } = useContext(ApplicationContext);
  console.log(recipe)

  if (!recipe || typeof recipe[0] !== 'string') {
    return <p className="text-gray-300">No recipe available yet.</p>;
  }

  try {
    const parsedData = JSON.parse(recipe[0]);
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
        <ol className="list-decimal pl-6 space-y-2">
          {recipeData.Steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      
    );
    
  } catch (error) {
    console.error('Recipe JSON parse failed:', error);
    return <p className="text-red-500">Invalid recipe format. Please try again.</p>;
  }
}

export default RecepieComponent;
