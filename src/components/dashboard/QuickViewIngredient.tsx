import getStyle from "../../Styles";
import expiryColourFromDate from "../../util/ExpiryStatusFromDate";
import * as misc from "../../util/Miscellaneous";

interface Props {
  ingredient: Ingredient;
}

function QuickViewIngredient({ ingredient }: Props) {
  const colour: string = "ctn" + expiryColourFromDate(ingredient.expiry);

  return (
    <div className={getStyle(styles, colour)}>
      <img
        className={getStyle(styles, "ingredient")}
        src={
          "http://spoonacular.com/cdn/ingredients_100x100/" + ingredient.image
        }
        alt=""
      />
    </div>
  );
}

const styles = {
  ctnsafeGreen: misc.ctnsafeGreen,
  ctnwarningOrange: misc.ctnwarningOrange,
  ctnexpirationRed: misc.ctnexpirationRed,
  ingredient: ["h-[25px]", "w-[25px]", "rounded-full"],
  expiryStatus: [],
};

export default QuickViewIngredient;
