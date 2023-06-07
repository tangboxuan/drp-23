import getStyle from "../../Styles";
import Warning from "./Warning";
import QuickView from "./QuickView";
import Key from "./Key";

function Dashboard() {
  return (
    <div className={getStyle(styles, "container")}>
      <h1 className={getStyle(styles, "title")}>Hi, Ryan</h1>

      <h1 className={getStyle(styles, "subtitle")}>My fridge</h1>

      <Warning ingredient="apples" />

      <QuickView />

      <Key />
    </div>
  );
}

const styles = {
  container: ["flex", "flex-col"],
  title: ["text-2xl", "font-bold", "mt-8", "tracking-wide"],
  subtitle: ["text-xl", "font-bold", "mt-9", "tracking-wide"],
};

export default Dashboard;