import recipesData from "../data.json";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-5- to-yellow-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            Recipe Sharing Platform
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover delicious recipes from around the world. Simple, tasty, and
            easy to make!
          </p>
        </div>
        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:translate-y-2 hover:scale-[1,02]"
            >
              <img
                src="{recipe.image}"
                alt={recipe.title}
                className="h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                {recipe.title}
              </h3>
              <p className="text-gray-600 leading-relaxed line-clamp-3 mb-6">
                {recipe.summary}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-orange-600 font-semibold bg-orange-100 px-3 py-1 rounded-full">
                  Recipe #{recipe.id}
                </span>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* No Recipes */}
        {recipes.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl flex items-center justify-center shadow-2xl">
              <span className="text-3xl font-bold text-white">🍳</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              No Recipes Yet
            </h2>
            <p className="text-xl text-gray-600 max-w-md mx-auto">
              Recipes will appear here once loaded.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
