import { CurrentPage } from "../../util/CurrentPage";
import Footer from "../shared/Footer";
import FridgeContents from "./FridgeContents";
import getStyle from "../../Styles";

interface Props {
  ingredients: Ingredient[];
  refreshIngredients: () => void;
}

function Fridge({ingredients, refreshIngredients} : Props) {

  return (
    <>
      <div className={getStyle(styles, "body")}>
        <FridgeContents ingredients={ingredients} refresh={refreshIngredients}/>
      </div>
      <div>
        <Footer currentPage={CurrentPage.Fridge} />
      </div>
    </>
  );
}

const styles = {
  body: ["overflow-y-scroll", "max-h-screen", "pb-20"]
}

export default Fridge;
