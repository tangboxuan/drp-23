import getStyle from "../../Styles";
import QuickViewIngredient from "./QuickViewIngredient";

function QuickView() {
  return (
    <div className={getStyle(styles, "container")}>
      <QuickViewIngredient ingredient="broccoli" expiryStatus="red" />
      <QuickViewIngredient ingredient="broccoli" expiryStatus="red" />
      <QuickViewIngredient ingredient="broccoli" expiryStatus="red" />
      <QuickViewIngredient ingredient="broccoli" expiryStatus="red" />
      <QuickViewIngredient ingredient="broccoli" expiryStatus="orange" />
      <QuickViewIngredient ingredient="broccoli" expiryStatus="orange" />
      <QuickViewIngredient ingredient="broccoli" expiryStatus="orange" />
      <QuickViewIngredient ingredient="broccoli" expiryStatus="green" />
      <QuickViewIngredient ingredient="broccoli" expiryStatus="green" />
      <QuickViewIngredient ingredient="broccoli" expiryStatus="green" />
      <QuickViewIngredient ingredient="broccoli" expiryStatus="green" />
    </div>
  );
}

const styles = {
  container: [
    "shadow-lg",
    "w-full",
    "bg-backgroundBeige",
    "rounded-2xl",
    "mt-9",
    "grid",
    "grid-cols-4",
    "py-6",
    "px-3",
    "gap-y-6",
  ],
};

export default QuickView;
