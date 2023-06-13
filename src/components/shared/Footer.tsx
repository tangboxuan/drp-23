import getStyle from "../../Styles";
import FooterSection from "./FooterSection";
import { CurrentPage } from "../../util/CurrentPage";

interface Props {
  currentPage: CurrentPage
}

function Footer({ currentPage }: Props) {
  return (
    <div className={getStyle(styles, "container")}>
      <div className={getStyle(styles, "subCtn")}>
        <FooterSection section={CurrentPage.Home} active={currentPage == CurrentPage.Home} />
        <FooterSection section={CurrentPage.Fridge} active={currentPage == CurrentPage.Fridge} />
        <FooterSection section={CurrentPage.Recipes} active={currentPage == CurrentPage.Recipes} />
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
    "h-15",
    "pt-2",
    "bg-white",
  ],
  subCtn: ["flex", "items-center", "justify-around"],
};

export default Footer;
