import { useState } from "react";
import recipesData from "../data.json";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // ✅ Added errors object
  const [error, setError] = useState("");

  // ✅ Added validate function
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

    // ✅ Use validate function
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

    setErrors({}); // ✅ Clear errors
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  // ✅ Clear error when user types
  const handleChange = (field, value) => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
    if (field === "title") setTitle(value);
    if (field === "ingredients") setIngredients(value);
    if (field === "steps") setSteps(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Add New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recipe Title
            </label>
            <textarea
              value={title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="e.g. Chocolate Cake"
            />
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
              rows="6"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 resize-vertical ${
                errors.ingredients ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="2 cups flour
1 cup sugar"
            />
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
              rows="6"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 resize-vertical ${
                errors.steps ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="1. Preheat oven
2. Mix ingredients"
            />
            {errors.steps && (
              <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={Object.keys(errors).length > 0}
            className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-orange-600 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Recipe 🍳
          </button>
        </form>
      </div>
    </div>
  );
}
