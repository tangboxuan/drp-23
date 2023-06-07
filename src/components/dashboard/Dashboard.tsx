import getStyle from "../../Styles";
import Warning from "./Warning";
import QuickView from "./QuickView";
import Key from "./Key";
import { IonIcon } from "@ionic/react";
import { settingsOutline } from "ionicons/icons";

function Dashboard() {
  return (
    <div className={getStyle(styles, "container")}>
      <div className={getStyle(styles, "titleCtn")}>
        <h1 className={getStyle(styles, "title")}>Hi, Ryan</h1>
        <IonIcon
          className={getStyle(styles, "settingsIcon")}
          icon={settingsOutline}
        />
      </div>

      <h1 className={getStyle(styles, "subtitle")}>My fridge</h1>

      <Warning ingredient="apples" />

      <QuickView />

      <Key />
    </div>
  );
}

const styles = {
  container: ["flex", "flex-col", "h-full", "w-full", "p-10", "mt-5"],
  title: ["text-2xl", "font-bold", "tracking-wide"],
  titleCtn: ["flex", "justify-between", "items-center", "mt-8"],
  settingsIcon: ["w-[31px]", "h-[31px]"],
  subtitle: ["text-xl", "font-bold", "mt-9", "tracking-wide"],
};

export default Dashboard;
