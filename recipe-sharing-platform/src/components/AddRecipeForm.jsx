import { useState } from "react";
import recipesData from "../data.json";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || ingredients || !instructions) {
      setError("All fields are required!");
      return;
    }

    if (ingredients.split("\n").filter((line) => line.trim()).length < 2) {
      setError("Need at least 2 ingredients!");
      return;
    }

    const newRecipe = {
      id: recipesData.length + 1,
      title,
      summary: "New recipe added!",
      image: "./Images/image1.jpg",
      ingredients: ingredients
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
      instructions: instructions
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    };
    console.log("New recipe:", newRecipe);
    setError("");
    alert("Recipe added!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Add New Recipe
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="e.g. Chocolate Cake"
              required
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ingredients (one per line)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-vertical"
              placeholder="2 cups flour
1 cup sugar
3 eggs
..."
              required
            />
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instructions (one per line)
            </label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-vertical"
              placeholder="Preheat oven to 350°F
Mix dry ingredients
..."
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 transition-all duration-200 shadow-lg"
          >
            Add Recipe 🍳
          </button>
        </form>
      </div>
    </div>
  );
}
