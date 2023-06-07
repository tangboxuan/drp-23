import getStyle from "../../Styles";

interface Props {
  ingredient: string; // String for now, but will be changed to Ingredient type
  date: string;
  color: string; // Can potentially change to Color from "./Color.tsx"
}

function Warning({ ingredient, date, color }: Props) {
  return (
    <div className={getStyle(styles, "container")}>
      <p className={getStyle(styles, "message")}>
        Your {ingredient} are expiring!
      </p>
    </div>
  );
}

const styles = {
  container: [
    "flex",
    "items-center",
    "p-4",
    "bg-alertYellow",
    "rounded-lg",
    "mt-6",
    "w-full",
    "h-16",
  ],
  message: [],
};

export default Warning;
