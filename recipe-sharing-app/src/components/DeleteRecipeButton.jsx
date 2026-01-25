import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

export default function DeleteRecipeButton({ recipeId }) {
  const DeleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      DeleteRecipe(recipeId);
      navigate("/");
    }
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
}
