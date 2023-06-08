import { CurrentPage } from "../../util/CurrentPage";
import getStyle from "../../Styles";
import Footer from "../shared/Footer";
import Broccoli from "../../assets/broccoli.png";

const INGREDIENTS = [
  {
    name: "broccoli",
    quantity: 3,
    image: Broccoli,
    expiry: 0,
    category: "Fruits",
  },
  {
    name: "broccoli",
    quantity: 3,
    image: Broccoli,
    expiry: 5,
    category: "Fruits",
  },
  {
    name: "broccoli",
    quantity: 3,
    image: Broccoli,
    expiry: 0,
    category: "Vegetables",
  },
  {
    name: "broccoli",
    quantity: 3,
    image: Broccoli,
    expiry: 3,
    category: "Vegetables",
  },
  {
    name: "broccoli",
    quantity: 3,
    image: Broccoli,
    expiry: 5,
    category: "Vegetables",
  },
];

function Fridge() {
  return (
    <div className={getStyle(styles, "container")}>
      
      <div className={getStyle(styles, "header")}>
        <h1 className={getStyle(styles, "title")}>Your fridge</h1>
        
      </div>


      <Footer currentPage={CurrentPage.Fridge} />
    </div>
  );
}

const styles = {
    container: [
        "flex",
        "flex-col"

    ],
};

export default Fridge;
