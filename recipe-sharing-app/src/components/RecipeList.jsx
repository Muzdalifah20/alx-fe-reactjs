import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.s);

  return (
    <div>
      <SearchBar />
      {searchTerm && (
        <p>
          Showing results for "{searchTerm}"({filteredRecipes.lenght})
        </p>
      )}
      <h2>Recipes</h2>
      {filteredRecipes.lenght === 0 ? (
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
