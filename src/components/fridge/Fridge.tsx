import { CurrentPage } from "../../util/CurrentPage";
import Footer from "../shared/Footer";

function Fridge() {
    return (
        <>
            <h1>Test of routing!</h1>
            <Footer currentPage={CurrentPage.Fridge} />
        </>
    );
}

export default Fridge;