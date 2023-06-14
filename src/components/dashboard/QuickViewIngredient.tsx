import getStyle from "../../Styles";
import expiryColourFromDate from "../../util/ExpiryStatusFromDate";

interface Props {
  ingredient: Ingredient;
}

function QuickViewIngredient({ ingredient }: Props) {
  const colour = "border-" + expiryColourFromDate(ingredient.expiry);

  return (
    <div className={[getStyle(styles, "container"), colour].join(" ")}>
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
  container: [
    "border-[5px]",
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
