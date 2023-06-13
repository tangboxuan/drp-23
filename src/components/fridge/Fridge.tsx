import { useState, useEffect } from "react";

import { CurrentPage } from "../../util/CurrentPage";
import Footer from "../shared/Footer";
import FridgeContents from "./FridgeContents";
import api from "../../api"
import getStyle from "../../Styles";

function Fridge() {

  const [ingredients, setIngredients] = useState([]);

  const refreshIngredients = () => {
    api.get("/get-fridge").then((response) => {
      setIngredients(response.data);
    });
  };

  useEffect(() => {
    refreshIngredients();
  }, []);

  return (
    <>
      <div className={getStyle(styles, "body")}>
        <FridgeContents ingredients={ingredients} refresh={refreshIngredients}/>
      </div>
      <Footer currentPage={CurrentPage.Fridge} />
    </>
  );
}

const styles = {
  body: ["overflow-y-scroll", "max-h-screen"]
}

export default Fridge;
