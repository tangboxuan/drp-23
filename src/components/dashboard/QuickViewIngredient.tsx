import getStyle from "../../Styles";

interface Props {
  ingredient: string; // String for now, but will be changed to Ingredient type
  expiryStatus: string; // String for now, but will be changed to ExpiryStatus type
}

function QuickViewIngredient({ ingredient, expiryStatus }: Props) {
  return (
    <div className={getStyle(styles, "container")}>
      <p className={getStyle(styles, "ingredient")}>{ingredient}</p>
      <p className={getStyle(styles, "expiryStatus")}>{expiryStatus}</p>
    </div>
  );
}

const styles = {
  container: [
    "border-2",
    "border-bg-expirationRed",
    "rounded-full",
    "h-[44px]",
    "w-[44px]",
  ],
  ingredient: [],
  expiryStatus: [],
};

export default QuickViewIngredient;
