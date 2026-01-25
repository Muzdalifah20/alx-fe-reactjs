import useRecipeStore from "./recipeStore";

export default function DeleteRecipeButton({ recipeId }) {
  const DeleteRecipe = useRecipeStore((state) => state.DeleteRecipe);

  const handleDelete = () => {
    if (window.confirm("Delete this recipe?")) {
      DeleteRecipe(recipeId);
    }
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
}
