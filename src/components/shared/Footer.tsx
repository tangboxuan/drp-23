import getStyle from "../../Styles";
import FooterSection from "./FooterSection";

function Footer() {
  return (
    <div className={getStyle(styles, "container")}>
      <div className={getStyle(styles, "subCtn")}>
        <FooterSection section="Home" active={true} />
        <FooterSection section="Fridge" active={false} />
      </div>
    </div>
  );
}

const styles = {
  container: [
    "fixed",
    "bottom-0",
    "w-full",
    "border-t",
    "border-outlineGray",
    "h-20",
    "pt-2",
  ],
  subCtn: ["flex", "items-center", "justify-around"],
};

export default Footer;
