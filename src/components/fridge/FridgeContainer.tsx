import getStyle from "../../Styles";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";

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

const listedIngredients = [];

export default function FridgeContainer() {
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
          className={getStyle(styles, "autocomplete")}
        />

        <div className={getStyle(styles, "entryCtn")}>
          {listedIngredients.length === 0 && (
            <p className={getStyle(styles, "opt")}>Add an Item!</p>
          )}
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
  entryCtn: ["flex", "flex-wrap", "w-1/2", "mt-4"],
  opt: ["ml-2"],
};
