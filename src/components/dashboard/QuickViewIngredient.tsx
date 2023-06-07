import getStyle from "../../Styles";
import Broccoli from "../../assets/broccoli.png";
import Kiwi from "../../assets/kiwi.png";

interface Props {
  ingredient: string; // String for now, but will be changed to Ingredient type
  expiryStatus: string; // String for now, but will be changed to ExpiryStatus type
}

function QuickViewIngredient({ ingredient, expiryStatus }: Props) {
  var expiryColor: string;

  if (expiryStatus === "green") {
    expiryColor = "containerGreen";
  } else if (expiryStatus === "orange") {
    expiryColor = "containerOrange";
  } else {
    expiryColor = "containerRed";
  }

  return (
    <div className={getStyle(styles, expiryColor)}>
      {ingredient === "broccoli" ? (
        <img className={getStyle(styles, "ingredient")} src={Broccoli} alt="" />
      ) : (
        <img className={getStyle(styles, "ingredient")} src={Kiwi} alt="" />
      )}
    </div>
  );
}

const styles = {
  containerGreen: [
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
  containerOrange: [
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
  containerRed: [
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
