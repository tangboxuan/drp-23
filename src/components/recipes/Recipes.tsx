import { CurrentPage } from "../../util/CurrentPage";
import Footer from "../shared/Footer";
import { useLocation } from "react-router-dom";
import fridgeApi from "../../api"
// import recipesApi from "./RecipesApi"

import { useState } from "react";
import { recipeDetails, recipeSummaries } from "./SampleRecipes";
import RecipeCard from "./RecipeCard";
import getStyle from "../../Styles";

function Recipes() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const location = useLocation();
    console.log(location);
    console.log(location.state);
    if (location.state !== null) {
        setIngredients(location.state?.ingredients)
    } else if (ingredients.length === 0) {
        // get all ingredients from the fridge that the user has
        fridgeApi.get("/get-fridge").then((response) => {
            setIngredients(response.data);
        });
    }

    console.log(ingredients);
    const names = new Set<string>(ingredients.map((ingredient) => ingredient.name))

    // api.get("/recipes/findByIngredients", {
    //     params: {
    //         apiKey: "597b14fc59f64d6bbd923959a4282868",
    //         ingredients: Array.from(names).join(","),
    //         number: 5,
    //         ranking: 2,
    //         ignorePantry: true
    //     },
    //     // headers: { "x-api-key": "597b14fc59f64d6bbd923959a4282868" }
    // }).then((response) => {
    //     console.log(response.data);
    // });

    const recipeSummariesTest: RecipeSummary[] = recipeSummaries;

    const recipeDetailsTest: RecipeDetails[] = recipeDetails;

    const fridgeOnly = recipeSummariesTest
        .filter((recipe) => recipe.missedIngredientCount === 0)
        .map(function (recipe, i) {
            return <RecipeCard recipeSummary={recipe} recipeDetails={recipeDetailsTest[i]} key={recipe.id} />
        });

    const ingredientsNeededRecipes = recipeSummariesTest
        .filter((recipe) => recipe.missedIngredientCount > 0)
        .map(function (recipe, i) {
            return <RecipeCard recipeSummary={recipe} recipeDetails={recipeDetailsTest[i]} key={recipe.id} />
        });


    return (
        <>
            <div className={getStyle(styles, "container")}>
                <h1 className={getStyle(styles, "title")}>Recipes</h1>
                <p>Ingredients in use: {names}</p>
                <table className={getStyle(styles, "table")}>
                    <tbody>
                        <tr className={getStyle(styles, "row")}>
                            <th colSpan={4}>
                                Recipes you can make
                            </th>
                        </tr >
                        {(fridgeOnly.length > 0) ? fridgeOnly : <tr><td colSpan={4}>No recipes found</td></tr>}
                        {/* <tr className={getStyle(styles, "row")}>
                            <th colSpan={4}>
                                Recipes you can make with additional ingredients
                            </th>
                        </tr > */}
                        <tr>
                            <th colSpan={2}>Recipes you can make with additional ingredients</th>
                            <th>Time (mins)</th>
                            <th>$ per serving</th>
                        </tr>
                        {ingredientsNeededRecipes}
                    </tbody>
                </table>
            </div >
            <Footer currentPage={CurrentPage.Recipes} />
        </>
    );
}

const styles = {
    container: ["overflow-y-scroll", "max-h-screen", "pb-20", "flex", "flex-col", "h-full", "w-full", "p-10", "mt-5"],
    table: ["border-separate", "border-spacing-y-3", "table-auto"],
    row: ["text-xl"],
    title: ["text-2xl", "font-bold", "mt-8", "tracking-wide"],
}

export default Recipes;