import getStyle from "../../Styles";
import { LOWER_BOUNDARY, MEDIUM_BOUNDARY } from "../../util/ExpiryStatusFromDate";

function Key() {
  return (
    <div className={getStyle(styles, "container")}>
      <div className={getStyle(styles, "key")}>
        <div className={getStyle(styles, "circleRed")}></div>
        <div className={getStyle(styles, "text")}>0-{LOWER_BOUNDARY} Days</div>
      </div>

      <div className={getStyle(styles, "key")}>
        <div className={getStyle(styles, "circleOrange")}></div>
        <div className={getStyle(styles, "text")}>{LOWER_BOUNDARY + 1}-{MEDIUM_BOUNDARY} Days</div>
      </div>

      <div className={getStyle(styles, "key")}>
        <div className={getStyle(styles, "circleGreen")}></div>
        <div className={getStyle(styles, "text")}>{MEDIUM_BOUNDARY + 1}+ Days</div>
      </div>
    </div>
  );
}

const styles = {
  container: ["flex", "items-center", "mt-3", "w-full", "justify-center"],
  key: ["flex", "items-center", "mx-4"],
  circleGreen: ["w-2", "h-2", "bg-safeGreen", "rounded-full", "mr-2"],
  circleOrange: ["w-2", "h-2", "bg-warningOrange", "rounded-full", "mr-2"],
  circleRed: ["w-2", "h-2", "bg-expirationRed", "rounded-full", "mr-2"],
  text: ["text-[10px]"],
};

export default Key;
