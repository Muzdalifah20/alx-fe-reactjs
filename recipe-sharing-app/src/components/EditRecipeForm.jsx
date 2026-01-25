import { useState } from "react";
import useRecipeStore from "./recipeStore";

export default function EditRecipeForm({ recipe }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updatedRecipe = useRecipeStore((state) => state.updatedRecipe);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatedRecipe(recipe.id, { title, description });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <button type="button" onClick={() => setIsEditing(false)}>
            cancle
          </button>
        </form>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit Recipe</button>
      )}
    </div>
  );
}
