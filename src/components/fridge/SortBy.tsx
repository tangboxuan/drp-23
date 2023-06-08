import getStyle from "../../Styles";
import { IonToggle } from "@ionic/react";

function SortBy() {
  return (
    <div className={getStyle(styles, "container")}>
      <div className={getStyle(styles, "text")}>By Expiry</div>
      <IonToggle className={getStyle(styles, "toggle")} checked={true} />
      <div className={getStyle(styles, "text")}>By Category</div>
    </div>
  );
}

const styles = {
  container: ["flex", "items-center", "mt-9"],
  toggle: ["mx-2", "h-1", ],
  text: ["text-sm"],
};

export default SortBy;
