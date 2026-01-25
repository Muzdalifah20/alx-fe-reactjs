import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()),
      ),
    })),
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),
  getFavoriteRecipes: () => {
    const { recipes, favorites } = get();
    return favorites
      .map((id) => recipes.find((recipe) => recipe.id === id))
      .filter(Boolean);
  },

  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5,
      );
      return {
        recommendations: recommended,
      };
    }),
  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
    get().generateRecommendations();
  },
  toggleFavorite: (recipeId) => {
    const { favorites, addFavorite, removeFavorite } = get();

    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  },
  isFavorite: (recipeId) => get().favorites.includes(recipeId),
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), ...newRecipe }],
    })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    }));
  },
  updateRecipe: (id, updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe,
      ),
    }));
  },
}));

export default useRecipeStore;
