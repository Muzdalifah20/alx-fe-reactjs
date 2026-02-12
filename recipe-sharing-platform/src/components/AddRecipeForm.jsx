import { useState } from "react";
import recipesData from "../data.json";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients required";
    else if (ingredients.split("\n").filter((line) => line.trim()).length < 2) {
      newErrors.ingredients = "Need at least 2 ingredients";
    }
    if (!steps.trim()) newErrors.steps = "Steps required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    const newRecipe = {
      id: recipesData.length + 1,
      title,
      summary: "New recipe added!",
      image: "./Images/image1.jpg",
      ingredients: ingredients
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
      steps: steps
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    };

    console.log("New recipe:", newRecipe);
    alert("Recipe added!");
    setErrors({});
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  const handleChange = (field, value) => {
    if (errors[field]) setErrors({ ...errors, [field]: "" });
    if (field === "title") setTitle(value);
    if (field === "ingredients") setIngredients(value);
    if (field === "steps") setSteps(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12 px-4 md:px-8">
      {/* ✅ md:px-8 */}
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
        {/* ✅ md:p-8 */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
          {/* ✅ md:text-3xl */}
          Add New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* ✅ md:space-y-6 */}

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 text-base md:text-lg"
              placeholder="e.g. Chocolate Cake"
            />
            {/* ✅ md:px-4 md:py-3 md:text-lg */}
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ingredients (one per line)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => handleChange("ingredients", e.target.value)}
              rows="5 md:rows-6"
              className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 resize-vertical text-sm md:text-base"
              placeholder="2 cups flour
1 cup sugar"
            />
            {/* ✅ md:px-4 md:py-3 md:text-base md:rows-6 */}
            {errors.ingredients && (
              <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Steps (one per line)
            </label>
            <textarea
              value={steps}
              onChange={(e) => handleChange("steps", e.target.value)}
              rows="5 md:rows-6"
              className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 resize-vertical text-sm md:text-base"
              placeholder="1. Preheat oven
2. Mix ingredients"
            />
            {/* ✅ md:px-4 md:py-3 md:text-base md:rows-6 */}
            {errors.steps && (
              <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={Object.keys(errors).length > 0}
            className="w-full bg-orange-500 text-white py-3 md:py-4 px-6 md:px-8 rounded-lg font-semibold text-base md:text-lg hover:bg-orange-600 shadow-lg disabled:opacity-50"
          >
            {/* ✅ md:py-4 md:px-8 md:text-lg */}
            Add Recipe 🍳
          </button>
        </form>
      </div>
    </div>
  );
}
