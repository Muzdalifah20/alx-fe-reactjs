// src/components/RecipeDetails.jsx - SIMPLER SOLUTION
import { Link, useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipeIdNum = recipeId ? parseInt(recipeId) : null;
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeIdNum),
  );

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div>
      <Link to="/">← Back to Recipes</Link>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <div>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;
