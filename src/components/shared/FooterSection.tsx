import getStyle from "../../Styles";
import { IonIcon } from "@ionic/react";
import { homeOutline } from "ionicons/icons";
import Fridge from "../../assets/fridge.png";

interface Props {
  section: string;
  active: boolean;
}

function FooterSection({ section, active }: Props) {
  return (
    <div className={getStyle(styles, "container")}>
      {section === "Home" ? (
        <IonIcon
          className={
            active
              ? getStyle(styles, "homeActive")
              : getStyle(styles, "homeInactive")
          }
          icon={homeOutline}
        ></IonIcon>
      ) : (
        <img
          className={
            active
              ? getStyle(styles, "fridgeActive")
              : getStyle(styles, "fridgeInactive")
          }
          src={Fridge}
          alt=""
        />
      )}

      <p
        className={
          active
            ? getStyle(styles, "textActive")
            : getStyle(styles, "textInactive")
        }
      >
        {section}
      </p>
    </div>
  );
}

const styles = {
  container: ["flex", "flex-col", "items-center"],
  homeActive: ["w-6", "h-7", "text-selectedRed"],
  homeInactive: ["w-6", "h-7", "text-outlineGray"],
  fridgeActive: ["w-7", "h-7", "fill-selectedRed"],
  fridgeInactive: ["w-7", "h-7", "fill-outlineGray"],
  textActive: ["font-medium", "text-selectedRed"],
  textInactive: ["font-medium", "text-outlineGray"],
};

export default FooterSection;