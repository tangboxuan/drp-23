import getStyle from "../../Styles";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { useState } from "react";
import FridgeEntry from "./FridgeEntry";

/* The dropdown list of ingredients */
const sampleIngredients = [
  "apple",
  "banana",
  "carrot",
  "dumpling",
  "egg",
  "fries",
  "grapes",
  "hamburger",
  "ice cream",
];

export default function FridgeContainer() {
  /* Manage state of user-added ingredients */
  const [addedIngredients, setAddedIngredients] = useState(["cucumbers"]);

  function deleteIngredient(ingredient: string) {
    setAddedIngredients(
      addedIngredients.filter((item) => item !== ingredient)
    );
  }

  return (
    <>
      <div className={getStyle(styles, "container")}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={sampleIngredients}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Enter an Ingredient" />
          )}
          onChange={(event: any, newValue: string | null) => {
            if (newValue !== null) {
              setAddedIngredients([...addedIngredients, newValue]);
            }
          }}
          className={getStyle(styles, "autocomplete")}
        />

        <div className={getStyle(styles, "entryCtn")}>
          {addedIngredients.length === 0 && (
            <p className={getStyle(styles, "opt")}>Add an Item!</p>
          )}

          {addedIngredients.map((ingredient) => (
            <FridgeEntry onClick={deleteIngredient} ingredient={ingredient} />
          ))}
        </div>
      </div>
    </>
  );
}

const styles = {
  container: [
    "rounded-lg",
    "shadow-lg",
    "p-4",
    "px-8",
    "mt-24",
    "border-black",
    "border",
    "w-[700px]",
    "flex",
    "flex-col",
    "justify-center",
  ],
  autocomplete: ["scale-95"],
  entryCtn: ["flex", "flex-wrap", "w-full", "mt-6"],
  opt: ["ml-2"],
};
