import getStyle from "../../Styles";

function QuickView() {
  return <div className={getStyle(styles, "container")}></div>;
}

const styles = {
  container: [
    "shadow-lg",
    "h-[290px]",
    "w-full",
    "bg-backgroundBeige",
    "rounded-2xl",
    "mt-12",
  ],
};

export default QuickView;
