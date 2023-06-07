import getStyle from "../../Styles";
import { IonIcon } from "@ionic/react";
import { alarmOutline } from "ionicons/icons";

interface Props {
  ingredient: string; // String for now, but will be changed to Ingredient type
}

function Warning({ ingredient }: Props) {
  return (
    <div className={getStyle(styles, "container")}>
      <IonIcon className={getStyle(styles, "icon")} icon={alarmOutline} />

      <p className={getStyle(styles, "message")}>
        Your {ingredient} are expiring!
      </p>

      {/* TODO: Ingredient should have different members later, so 'are' and 'is' should be loaded based on ingredient's qty */}

      <div className={getStyle(styles, "date")}>
        <p className={getStyle(styles, "dateText")}>22</p>
        <p className={getStyle(styles, "dateText")}>Aug</p>
      </div>

      {/* 
            TODO: - Make this inputted from props
                  - Need a way to wrap text if bigger
      
      */}
    </div>
  );
}

const styles = {
  container: [
    "flex",
    "items-center",
    "p-4",
    "bg-alertYellow",
    "rounded-xl",
    "mt-6",
    "w-full",
    "h-16",
    "shadow-lg",
  ],
  date: [
    "flex",
    "flex-col",
    "items-center",
    "p-3",
    "bg-alertRed",
    "rounded-full",
    "w-12",
    "h-12",
    "ml-3",
  ],
  dateText: [
    "text-white",
    "text-[13px]",
    "mt-[-5px]",
    "text-sm",
    "font-semibold",
  ],
  icon: ["w-9", "h-9", "mr-3"],
  message: ["text-[15px]"],
};

export default Warning;
