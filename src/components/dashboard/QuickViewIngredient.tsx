import getStyle from "../../Styles";
import Broccoli from "../../assets/broccoli.png";
import Kiwi from "../../assets/kiwi.png";
import expiryColourFromDate from "../../util/ExpiryStatusFromDate";
import images from "../../util/Images";

interface Props {
  ingredient: Ingredient;
}

function QuickViewIngredient({ ingredient }: Props) {
  let expiryColor: string;

  const colour = "border-" + expiryColourFromDate(ingredient.expiry);

  return (
    <div className={[getStyle(styles, "container"), colour].join(" ")}>
      <img className={getStyle(styles, "ingredient")} src={images[ingredient.name]} alt="" />
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
