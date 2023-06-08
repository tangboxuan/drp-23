import { useState, useEffect } from "react";

import { CurrentPage } from "../../util/CurrentPage";
import Footer from "../shared/Footer";
import FridgeContents from "./FridgeContents";
import api from "../../api"

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
      <FridgeContents ingredients={ingredients} refresh={refreshIngredients}/>
      <Footer currentPage={CurrentPage.Fridge} />
    </>
  );
}

export default Fridge;
