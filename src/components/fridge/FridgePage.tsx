import getStyle from "../../Styles";
import FridgeContainer from "./FridgeContainer";

export default function FridgePage() {
  return (
    <>
      <div className={getStyle(styles, "container")}>
        <h1 className={getStyle(styles, "header")}>
          What ingredients do you have in your fridge? Jason
        </h1>

        <FridgeContainer />
      </div>
    </>
  );
}

const styles = {
  header: ["text-4xl", "font-semibold", "tracking-wide"],
  container: [
    "flex",
    "flex-col",
    "items-center",
    "p-5",
    "bg-green-50",
    "h-full",
    "w-full",
  ],
};
