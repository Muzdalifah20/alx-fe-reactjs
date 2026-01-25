import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean),
  );

  return (
    <div>
      <h2>My Favorites ({favorites.length})</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet. Add some recipes!</p>
      ) : (
        <ul>
          {favorites.map((recipe) => (
            <li key={recipe.id} className="recipe-item">
              <Link to={`/recipe/${recipe.id}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
