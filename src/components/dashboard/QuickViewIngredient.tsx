import getStyle from "../../Styles";
import expiryColourFromDate from "../../util/ExpiryStatusFromDate";

interface Props {
  ingredient: Ingredient;
}

function QuickViewIngredient({ ingredient }: Props) {
  const colour: string = "ctn" + expiryColourFromDate(ingredient.expiry);

  return (
    <div className={[getStyle(styles, colour), colour].join(" ")}>
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
  ctnsafeGreen: [
    "border-[5px]",
    "border-safeGreen",
    "bg-white",
    "rounded-full",
    "h-[44px]",
    "w-[44px]",
    "flex",
    "justify-center",
    "items-center",
    "mx-[10px]",
  ],
  ctnwarningOrange: [
    "border-[5px]",
    "border-warningOrange",
    "bg-white",
    "rounded-full",
    "h-[44px]",
    "w-[44px]",
    "flex",
    "justify-center",
    "items-center",
    "mx-[10px]",
  ],
  ctnexpirationRed: [
    "border-[5px]",
    "border-expirationRed",
    "bg-white",
    "rounded-full",
    "h-[44px]",
    "w-[44px]",
    "flex",
    "justify-center",
    "items-center",
    "mx-[10px]",
  ],
  ingredient: ["h-[21px]", "w-[21px]"],
  expiryStatus: [],
};

export default QuickViewIngredient;
