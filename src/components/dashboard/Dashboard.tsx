import getStyle from "../../Styles";
import Warning from "./Warning";
import QuickView from "./QuickView";
import Key from "./Key";
import Footer from "../shared/Footer";
import { CurrentPage } from "../../util/CurrentPage";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface Props {
  ingredients: Ingredient[];
}

function Dashboard({ ingredients }: Props) {
  useEffect(() => {
    document.title = "FoodBuddy";
  });
  return (
    <>
      <div className={getStyle(styles, "container")}>
        <h1 className={getStyle(styles, "title")}>Hi, Mark</h1>

        <h1 className={getStyle(styles, "subtitle")}>My fridge</h1>

        <Link to={"/" + CurrentPage.Recipes}>
          <Warning ingredients={ingredients} />
        </Link>

        <Link to={"/" + CurrentPage.Fridge}>
          <QuickView ingredients={ingredients} />
        </Link>

        <Key />
      </div>
      <Footer currentPage={CurrentPage.Home} />
    </>
  );
}

const styles = {
  container: [
    "flex",
    "flex-col",
    "h-full",
    "w-full",
    "pb-20",
    "p-10",
    "mt-5",
    "overflow-y-scroll",
    "max-h-screen",
  ],
  title: ["text-2xl", "font-bold", "tracking-wide", "mt-8"],
  subtitle: ["text-xl", "font-bold", "mt-9", "tracking-wide"],
};

export default Dashboard;
