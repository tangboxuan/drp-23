import getStyle from "../../Styles";
import QuickViewIngredient from "./QuickViewIngredient";

interface Props {
  ingredients: Ingredient[];
}

function QuickView({ingredients}:Props) {


  const rings: React.ReactNode[] = [];

  ingredients.sort((a, b) => {
    return a.expiry - b.expiry;
  });

  ingredients.forEach((ingredient) => {
    rings.push(
      <QuickViewIngredient
        key={ingredient.name + ingredient.expiry + Math.random()}
        ingredient={ingredient}
      />
    );
  });

  return (
    <div className={getStyle(styles, "container")}>
      <div className={getStyle(styles, "subCtn")}>
        {rings}
        <div className={getStyle(styles, "plusCtn")}>
          <svg
            className={getStyle(styles, "plus")}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </div>
      </div>

      <div className={getStyle(styles, "tapForMore")}>Tap for more...</div>
    </div>
  );
}

const styles = {
  container: [
    "shadow-md",
    "w-full",
    "bg-backgroundBeige",
    "rounded-2xl",
    "mt-9",
    "py-6",
    "px-3",
  ],
  subCtn: ["grid", "grid-cols-4", "gap-y-6"],
  plus: ["fill-white", "rounded-full", "h-[28px]", "w-[28px]"],
  plusCtn: [
    "border-[5px]",
    "border-black",
    "bg-black",
    "rounded-full",
    "h-[44px]",
    "w-[44px]",
    "flex",
    "justify-center",
    "items-center",
    "mx-[10px]",
    "shadow-xl",
  ],
  tapForMore: ["text-sm", "w-full", "mt-7", "ml-3", "font-semibold"],
};

export default QuickView;
