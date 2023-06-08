import getStyle from "../../Styles";
import Warning from "./Warning";
import QuickView from "./QuickView";
import Key from "./Key";
import Footer from "../shared/Footer";
import { CurrentPage } from "../../util/CurrentPage";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className={getStyle(styles, "container")}>
        <h1 className={getStyle(styles, "title")}>Hi, Ryan</h1>

        <h1 className={getStyle(styles, "subtitle")}>My fridge</h1>

        <Warning ingredient="apples" />

        <Link to="/Fridge">
          <QuickView />
        </Link>

        <Key />
      </div>
      <Footer currentPage={CurrentPage.Home} />
    </>
  );
}

const styles = {
  container: ["flex", "flex-col", "h-full", "w-full", "p-10", "mt-5"],
  title: ["text-2xl", "font-bold", "mt-8", "tracking-wide"],
  subtitle: ["text-xl", "font-bold", "mt-9", "tracking-wide"],
};

export default Dashboard;
