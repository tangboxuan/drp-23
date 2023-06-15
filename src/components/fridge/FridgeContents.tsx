import { ReactNode, useState } from "react";
import IngredientCategoryRow from "./IngredientCategoryRow";
import IngredientRow from "./IngredientRow";
import getStyle from "../../Styles";
import AddIngredient from "./AddIngredient";
import ViewSwitch from "./ViewSwitch";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
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

  return (
    <div className={getStyle(styles, "container")}>
      <div className={getStyle(styles, "addWrapper")}>
        <AddIngredient refresh={refresh} />
      </div>

      <div className={getStyle(styles, "toggleCtn")}>
        <ViewSwitch change={setCategoryView} />
        <DateSwitch change={setDayView} />
      </div>
      <table className={getStyle(styles, "table")}>
        <tbody>{rows}</tbody>
      </table>
      <Link to="/Recipes" state={{ ingredients: checkedIngredients }}>
        <Button variant="contained" color="primary" className="mt-5">
          Find recipes
        </Button>
      </Link>
    </div>
  );
}

const styles = {
  addWrapper: ["flex", "w-full", "justify-center", "items-center"],
  container: [
    "flex",
    "flex-col",
    "h-full",
    "w-full",
    "pt-10",
    "pl-10",
    "pr-10",
    "mt-5",
  ],
  table: ["border-separate", "border-spacing-y-3", "table-auto"],
  text: ["text-sm", "mb-3"],
  toggleCtn: ["flex", "items-center", "mt-10", "justify-around"],
};

export default FridgeContents;
