import { CurrentPage } from "../../util/CurrentPage";
import Footer from "../shared/Footer";
import FridgeContents from "./FridgeContents";
import getStyle from "../../Styles";
import { useEffect } from "react";
import AddIngredient from "./AddIngredient";

interface Props {
  ingredients: Ingredient[];
  refreshIngredients: () => void;
}

function Fridge({ ingredients, refreshIngredients }: Props) {
  useEffect(() => {
    document.title = "Fridge";
  });
  return (
    <div className={getStyle(styles, "container")}>
      <div className={getStyle(styles, "body")}>
        <h1 className={getStyle(styles, "title")}>Currently in your pantry:</h1>

        <div className={getStyle(styles, "addWrapper")}>
          <AddIngredient refresh={refreshIngredients} />
        </div>
        <FridgeContents
          ingredients={ingredients}
          refresh={refreshIngredients}
        />
      </div>
      <div>
        <Footer currentPage={CurrentPage.Fridge} />
      </div>
    </div>
  );
}

const styles = {
  container: ["flex", "flex-col", "h-full", "w-full", "mt-5"],
  body: ["overflow-y-scroll", "max-h-screen", "pb-24", "px-10"],
  addWrapper: ["flex", "w-full", "justify-center", "items-center", "mt-5"],
  title: ["text-[22px]", "font-bold", "tracking-wide", "mt-9"],
};

export default Fridge;
