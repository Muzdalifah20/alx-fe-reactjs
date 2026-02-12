import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className=" max-x-2xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 font-medium"
        >
          ← Back to Home
        </Link>
        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
        />

        {/* Recipe Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {recipe.title}
        </h1>

        {/* Recipe Summary */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {recipe.summary}
        </p>
        {/* Ingredients & Instructions */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Ingredients */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Ingredients
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• 200g spaghetti</li>
              <li>• 100g pancetta</li>
              <li>• 2 eggs</li>
              <li>• 50g pecorino cheese</li>
              <li>• Black pepper</li>
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Instructions
            </h2>
            <ol className="space-y-2 text-gray-700">
              <li>Boil spaghetti in salted water</li>
              <li>Cook pancetta until crispy</li>
              <li>Mix eggs and cheese</li>
              <li>Combine everything off heat</li>
              <li>Serve with pepper</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
