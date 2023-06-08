import getStyle from "../../Styles";
import { Ingredient } from "../../util/Ingredients";
import IngredientEntry from "./IngredientEntry";

interface Props {
  ingredients: Ingredient[];
}

function IngredientList({ ingredients }: Props) {
  ingredients.sort((a, b) => a.category.localeCompare(b.category));

  //   let currentCategory = "";

  return (
    <div className={getStyle(styles, "container")}>
      <IngredientEntry ingredient={ingredients[0]} />
    </div>
  );
}

const styles = {
  container: ["flex", "flex-col", "overflow-y-auto"],
};

export default IngredientList;
