import { CurrentPage } from "../../util/CurrentPage";
import Footer from "../shared/Footer";
import { useLocation } from "react-router-dom";
import fridgeApi from "../../api";
import recipesApi from "./RecipesApi";
import { currentApiKey } from "./RecipesApi";

import { useEffect, useState } from "react";

import RecipeCard from "./RecipeCard";
import getStyle from "../../Styles";
import OnlyAvailableRecipesSwitch from "./OnlyAvailableRecipesSwitch";

interface RecipeInfo {
  ingredients: Ingredient[];
  recipeSummaries: RecipeSummary[];
  recipeDetails: RecipeDetails[];
}

function Recipes() {
  const [onlyAvailableRecipes, setOnlyAvailableRecipes] =
    useState<boolean>(true);
  const [recipeInfo, setRecipeInfo] = useState<RecipeInfo>({
    ingredients: [],
    recipeSummaries: [],
    recipeDetails: [],
  });
  const location = useLocation();

  function getRecipeInformation(ingredients: Ingredient[]) {
    console.log("Ingredients");
    console.log(ingredients);

    const names = Array.from(
      new Set<string>(ingredients.map((ingredient) => ingredient.name)).values()
    );
    let recipeSummaries: RecipeSummary[] = [];
    let recipeDetails: RecipeDetails[] = [];

    // console.log("getting recipes");
    // console.log(names.join(","))

    recipesApi
      .get("/recipes/findByIngredients", {
        params: {
          apiKey: currentApiKey,
          ingredients: names.join(","),
          number: 5,
          ranking: 2,
          ignorePantry: true,
        },
      })
      .then((response) => {
        console.log("recipe summaries");
        console.log(response.data);
        const summaries: RecipeSummary[] = response.data;
        recipeSummaries = summaries;
        recipesApi
          .get("/recipes/informationBulk", {
            params: {
              apiKey: currentApiKey,
              ids: summaries.map((recipe) => recipe.id).join(","),
            },
          })
          .then((response) => {
            console.log("recipe details");
            console.log(response.data);
            const details: RecipeDetails[] = response.data;
            recipeDetails = details;
            console.log("setting recipe info");
            console.log(ingredients);
            console.log(recipeSummaries);
            console.log(recipeDetails);

            setRecipeInfo({
              ingredients: ingredients,
              recipeSummaries: recipeSummaries,
              recipeDetails: recipeDetails,
            });
          })
          .catch((error) => {
            console.log(error);
            setRecipeInfo({
              ingredients: ingredients,
              recipeSummaries: recipeSummaries,
              recipeDetails: [],
            });
          });
      })
      .catch((error) => {
        console.log(error);
        setRecipeInfo({
          ingredients: ingredients,
          recipeSummaries: [],
          recipeDetails: [],
        });
      });
  }

  useEffect(() => {
    let ingredients: Ingredient[] = [];

    document.title = "Recipes";
    if (location.state !== null) {
      console.log("getting ingredients from location");
      console.log(location.state?.ingredients);
      ingredients = location.state?.ingredients;
      getRecipeInformation(ingredients);
    } else if (ingredients.length === 0) {
      // get all ingredients from the fridge that the user has
      console.log("getting ingredients from fridge");
      fridgeApi.get("/get-fridge").then((response) => {
        ingredients = response.data;
        getRecipeInformation(ingredients);
      });
    }
  }, []);

  const fridgeOnly = recipeInfo.recipeSummaries
    .filter((recipe) => recipe.missedIngredientCount === 0)
    .map(function (recipe, i) {
      return (
        <RecipeCard
          recipeSummary={recipe}
          recipeDetails={recipeInfo.recipeDetails[i]}
          key={recipe.id}
        />
      );
    });

  // console.log("recipe summaries")
  // console.log(recipeInfo.recipeSummaries)
  // console.log("fridge only")
  // console.log(fridgeOnly)

  const ingredientsNeededRecipes = recipeInfo.recipeSummaries
    .filter((recipe) => recipe.missedIngredientCount > 0)
    .map(function (recipe, i) {
      return (
        <RecipeCard
          recipeSummary={recipe}
          recipeDetails={recipeInfo.recipeDetails[i]}
          key={recipe.id}
        />
      );
    });

  const recipes = onlyAvailableRecipes ? fridgeOnly : ingredientsNeededRecipes;
  const names = Array.from(
    new Set<string>(
      recipeInfo.ingredients.map((ingredient) => ingredient.name)
    ).values()
  );
  return (
    <>
      <div className={getStyle(styles, "container")}>
        <h1 className={getStyle(styles, "title")}>Recipes</h1>
        <p className={getStyle(styles, "subtitle")}>
          Ingredients in use: {names.join(", ")}
        </p>
        <OnlyAvailableRecipesSwitch change={setOnlyAvailableRecipes} />
        <table className={getStyle(styles, "table")}>
          <tbody>
            <tr>
              <th colSpan={2}>Recipe</th>
              <th>Time (mins)</th>
              <th>$ per serving</th>
            </tr>
            {recipes.length > 0 ? (
              recipes
            ) : (
              <tr>
                <td colSpan={4}>No recipes found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer currentPage={CurrentPage.Recipes} />
    </>
  );
}

const styles = {
  container: [
    "overflow-y-scroll",
    "max-h-screen",
    "pb-20",
    "flex",
    "flex-col",
    "h-full",
    "w-full",
    "p-10",
    "mt-5",
  ],
  table: ["border-separate", "border-spacing-y-3", "table-auto", "mt-4"],
  row: ["text-xl"],
  title: ["text-2xl", "font-bold", "mt-2", "tracking-wide"],
  subtitle: ["text-xl", "font-bold", "mt-8", "tracking-wide"],
};

export default Recipes;
