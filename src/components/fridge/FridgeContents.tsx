import { ReactNode, useState } from "react";
import IngredientCategoryRow from "./IngredientCategoryRow";
import IngredientRow from "./IngredientRow";
import getStyle from "../../Styles";
import ViewSwitch from "./ViewSwitch";
import { Link } from "react-router-dom";
import DateSwitch from "./DateSwitch";

interface Props {
  ingredients: Ingredient[];
  refresh: () => void;
}

function groupIngredientsByCategory(ingredients: Ingredient[]) {
  const series = Array.from(
    new Set(ingredients.map((ingredient) => ingredient.category))
  );
  const groupedIngredients: { [key: string]: Ingredient[] } = {};

  series.forEach((category) => {
    groupedIngredients[category] = ingredients.filter(
      (ingredient) => ingredient.category === category
    );
  });

  return groupedIngredients;
}

function sortIngredientsByExpiry(ingredients: Ingredient[]) {
  return ingredients.sort((a, b) => {
    return a.expiry - b.expiry;
  });
}

function categoriseView(
  ingredients: Ingredient[],
  refresh: () => void,
  updateCheckbox: (ingredientId: number, checked: boolean) => void,
  dayView: boolean
) {
  const groupedIngredients = groupIngredientsByCategory(ingredients);
  const rows: ReactNode[] = [];
  for (const key in groupedIngredients) {
    const ingredients = groupedIngredients[key];

    rows.push(<IngredientCategoryRow category={key} key={key} />);

    sortIngredientsByExpiry(ingredients);

    ingredients.forEach((element) => {
      rows.push(
        <IngredientRow
          ingredient={element}
          refresh={refresh}
          key={element.id + Math.random()}
          handleOnChange={updateCheckbox}
          dayView={dayView}
        />
      );
    });
  }

  return rows;
}

function sortView(
  ingredients: Ingredient[],
  refresh: () => void,
  updateCheckbox: (ingredientId: number, checked: boolean) => void,
  dayView: boolean
) {
  sortIngredientsByExpiry(ingredients);

  const rows: ReactNode[] = [];
  ingredients.forEach((element) => {
    rows.push(
      <IngredientRow
        ingredient={element}
        refresh={refresh}
        key={element.id}
        handleOnChange={updateCheckbox}
        dayView={dayView}
      />
    );
  });

  return rows;
}

function FridgeContents({ ingredients, refresh }: Props) {
  const [categoryView, setCategoryView] = useState(true);
  const [dayView, setDayView] = useState(true);
  const [checkedValues, setCheckedValues] = useState<{ [id: number]: boolean }>(
    []
  );

  function updateCheckbox(ingredientId: number, checked: boolean) {
    const newValues = { ...checkedValues };
    newValues[ingredientId] = checked;
    setCheckedValues(newValues);
  }

  const rows: ReactNode[] = categoryView
    ? categoriseView(ingredients, refresh, updateCheckbox, dayView)
    : sortView(ingredients, refresh, updateCheckbox, dayView);

  const checkedIngredients = ingredients.filter(
    (ingredient) => checkedValues[ingredient.id]
  );
  const findRecipesButton = (
    <button className={getStyle(styles, "recipeActive")}>
      <Link to="/Recipes" state={{ ingredients: checkedIngredients }}>
        Find Recipes
      </Link>
    </button>
  );

  const disabledButton = (
    <button
      onClick={() => alert("Select ingredients to generate recipes!")}
      className={getStyle(styles, "recipeDefault")}
    >
      Find Recipes
    </button>
  );

  const noIngredientsMessage = (
    <div>
      {disabledButton}
      {/* <p>Select ingredients to generate recipes!</p> */}
    </div>
  );

  return (
    <div>
      <h1 className={getStyle(styles, "title")}>Currently in your pantry:</h1>
      <div className={getStyle(styles, "toggleCtn")}>
        <ViewSwitch change={setCategoryView} />
        <DateSwitch change={setDayView} />
      </div>
      <table className={getStyle(styles, "table")}>
        {ingredients.length === 0 ? (
          <p className="mt-3 text-center">
            Add ingredients for recipe suggestions!
          </p>
        ) : (
          <tbody>{rows}</tbody>
        )}
      </table>

      {checkedIngredients.length === 0
        ? noIngredientsMessage
        : findRecipesButton}
    </div>
  );
}

const styles = {
  table: ["border-separate", "border-spacing-y-3", "table-auto", "mt-4", "w-full"],
  text: ["text-sm", "mb-3"],
  toggleCtn: ["flex", "items-center", "mt-6", "justify-between"],
  title: ["text-[22px]", "font-bold", "tracking-wide", "mt-10"],
  recipeActive: [
    "flex",
    "justify-center",
    "items-center",
    "mt-8",
    "bg-blue-800",
    "rounded-lg",
    "p-3",
    "text-white",
    "w-32",
    "font-medium",
  ],
  recipeDefault: [
    "flex",
    "justify-center",
    "items-center",
    "mt-8",
    "bg-gray-400",
    "rounded-lg",
    "p-3",
    "text-white",
    "w-32",
    "font-medium",
  ],
};

export default FridgeContents;
