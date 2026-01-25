import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  // ✅ Split into SIMPLE selectors (stable references)
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm); // ✅ Fixed typo
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);
  const isFavorite = useRecipeStore((state) => state.isFavorite);

  return (
    <div>
      <SearchBar />
      {searchTerm && (
        <p>
          Showing results for "{searchTerm}" ({filteredRecipes.length})
        </p> // ✅ Fixed length
      )}
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? ( // ✅ Fixed length
        <p>
          {searchTerm
            ? "No matching recipes found."
            : "No recipes yet. Add one!"}
        </p>
      ) : (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id} className="recipe-item">
              <Link to={`/recipe/${recipe.id}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </Link>
              <button onClick={() => toggleFavorite(recipe.id)}>
                {isFavorite(recipe.id) ? "❤️" : "♡"} Favorite
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
