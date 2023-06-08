import { CurrentPage } from "../../util/CurrentPage";
import Footer from "../shared/Footer";
import FridgeContents from "./FridgeContents";

function Fridge() {
    return (
        <>
            <FridgeContents ingredients={INGREDIENTS} />
            <Footer currentPage={CurrentPage.Fridge} />
        </>
    );
}

import Broccoli from "../../assets/broccoli.png";

const INGREDIENTS = [
    { name: "broccoli", quantity: 3, image: Broccoli, expiry: 0, category: "Fruits" },
    { name: "broccoli", quantity: 3, image: Broccoli, expiry: 5, category: "Fruits" },
    { name: "broccoli", quantity: 3, image: Broccoli, expiry: 0, category: "Vegetables" },
    { name: "broccoli", quantity: 3, image: Broccoli, expiry: 3, category: "Vegetables" },
    { name: "broccoli", quantity: 3, image: Broccoli, expiry: 5, category: "Vegetables" },

]

export default Fridge;