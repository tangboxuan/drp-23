import getStyle from "../../Styles";
import { Ingredient } from "../../util/Ingredients";
import IngredientEntry from "./IngredientEntry";

interface Props {
  ingredients: Ingredient[];
}

function IngredientList({ ingredients }: Props) {
  ingredients.sort((a, b) => a.category.localeCompare(b.category));

  let previousCategory = "";

  return (
    <div className={getStyle(styles, "container")}>
      {ingredients.map((ingredient) => {
        if (previousCategory !== ingredient.category) {
          previousCategory = ingredient.category;
          return (
            <h1 className={getStyle(styles, "catName")}>
              {ingredient.category}
            </h1>
          );
        }

        return <IngredientEntry ingredient={ingredient} />;
      })}
    </div>
  );
}

const styles = {
  container: ["flex", "flex-col", "overflow-y-auto", "mt-8"],
  catName: ["text-lg", "font-semibold", "mt-4", "tracking-wide"],
};

export default IngredientList;
