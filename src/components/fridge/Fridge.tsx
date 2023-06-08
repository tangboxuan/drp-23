import { CurrentPage } from "../../util/CurrentPage";
import getStyle from "../../Styles";
import Footer from "../shared/Footer";
import Broccoli from "../../assets/broccoli.png";
import { IonIcon } from "@ionic/react";
import { settingsOutline, addOutline } from "ionicons/icons";
import SortBy from "./SortBy";
import { Ingredient } from "../../util/Ingredients";
import IngredientList from "./IngredientList";

const INGREDIENTS: Ingredient[] = [
  {
    name: "broccoli",
    quantity: 3,
    image: Broccoli,
    expiry: 0,
    category: "Fruits",
  },
  {
    name: "broccoli",
    quantity: 3,
    image: Broccoli,
    expiry: 5,
    category: "Fruits",
  },
  {
    name: "broccoli",
    quantity: 3,
    image: Broccoli,
    expiry: 0,
    category: "Vegetables",
  },
  {
    name: "broccoli",
    quantity: 3,
    image: Broccoli,
    expiry: 3,
    category: "Vegetables",
  },
  {
    name: "broccoli",
    quantity: 3,
    image: Broccoli,
    expiry: 5,
    category: "Vegetables",
  },
];

function Fridge() {
  return (
    <>
      <div className={getStyle(styles, "container")}>
        <div className={getStyle(styles, "header")}>
          <h1 className={getStyle(styles, "title")}>Your fridge</h1>
          <IonIcon
            className={getStyle(styles, "settingsIcon")}
            icon={settingsOutline}
          />
        </div>

        <SortBy />

        <IngredientList ingredients={INGREDIENTS} />

        <IonIcon className={getStyle(styles, "addCtn")} icon={addOutline} />
      </div>
      <Footer currentPage={CurrentPage.Fridge} />
    </>
  );
}

const styles = {
  addCtn: [
    "w-[45px]",
    "h-[45px]",
    "bg-black",
    "shadow-lg",
    "rounded-full",
    "text-white",
    "self-center",
    "mt-8",
  ],
  container: ["flex", "flex-col", "h-full", "w-full", "p-10", "mt-5"],
  header: ["flex", "justify-between", "items-center", "mt-8"],
  settingsIcon: ["w-[31px]", "h-[31px]"],
  title: ["text-2xl", "font-bold", "tracking-wide"],
};

export default Fridge;
