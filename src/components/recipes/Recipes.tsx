import { CurrentPage } from "../../util/CurrentPage";
import Footer from "../shared/Footer";

function Recipes() {
    return (<Footer currentPage={CurrentPage.Recipes} />);
}

export default Recipes;