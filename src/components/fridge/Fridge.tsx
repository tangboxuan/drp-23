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
  body: ["overflow-y-scroll", "max-h-screen", "pb-20"],
  addWrapper: ["flex", "w-full", "justify-center", "items-center"],
};

export default Fridge;
