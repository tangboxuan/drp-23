import getStyle from "../../Styles";
import { IonIcon } from "@ionic/react";
import { alarmOutline } from "ionicons/icons";

interface Props {
  ingredients: Ingredient[];
}

function Warning({ ingredients }: Props) {
  const todayExpiring = ingredients.filter(
    (ingredient) => ingredient.expiry == 0
  ).map((ingredient) => ingredient.name);
  // const expired = ingredients.filter(
  //   (ingredient) => ingredient.expiry < 0
  // ).map((ingredient) => ingredient.name);
  const tmrExpiring = ingredients.filter(
    (ingredient) => ingredient.expiry == 1
  ).map((ingredient) => ingredient.name);

  function generateMessage(ingredients: string[], expiry: string) {

    return ingredients.length == 0
      ? <></>
      : <div className={getStyle(styles, "container")}>
        <IonIcon className={getStyle(styles, "icon")} icon={alarmOutline} />

        <p className={getStyle(styles, "message")}>
          You should eat your {ingredients.map((ingredient) => {
            return ingredient.toLowerCase();
          }).join(", ")}{ingredients.length == 1 ? "" : "s"} soon!
        </p>

        {/* TODO: Ingredient should have different members later, so 'are' and 'is' should be loaded based on ingredient's qty */}

        <div className={getStyle(styles, "date")}>
          <p className={getStyle(styles, "dateText")}>{expiry}</p>
        </div>

        {/* 
              TODO: - Make this inputted from props
                    - Need a way to wrap text if bigger
        
        */}
      </div>
  }

  return (
    <>
      {/* {generateMessage(expired, "EXP")} */}
      {generateMessage(todayExpiring, "TODAY")}
      {generateMessage(tmrExpiring, "TMR")}
    </>
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
    "text-[9px]",
    "text-sm",
    "font-semibold",
  ],
  icon: ["w-9", "h-9", "mr-3"],
  message: ["text-[15px]"],
};

export default Warning;
