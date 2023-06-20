import { useEffect, useState } from "react";
import getStyle from "../../Styles";
import {
  TextField,
  FormControl,
  Autocomplete,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import api from "../../api";
import { DatePicker } from "@mui/x-date-pickers";
import recipesApi, { currentApiKey } from "../recipes/RecipesApi.tsx";
import { useLocation } from "react-router-dom";

type spoonacularIngredient = {
  image: string;
  name: string;
  id: number;
};

type detailedSpoonacularIngredient = {
  categoryPath: string[];
}

interface Props {
  refresh: () => void;
}

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: "12px",
          fontWeight: "500",
        },
      },
    },
  },
});

function AddIngredient({ refresh }: Props) {
  const [adding, setAdding] = useState(false);
  const [ingredient, setIngredient] = useState<spoonacularIngredient | null>(
    null
  );
  const [quantity, setQuantity] = useState(0);
  const [expiry, setExpiry] = useState<Date | null>(new Date());
  const [autocomplete, setAutocomplete] = useState<spoonacularIngredient[]>([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state !== null) {
      setAdding(location.state?.jumpToAdd);
    }
  }, []);

  const addToFridge = () => {
    console.log("Adding to fridge")
    console.log(ingredient)


    if (ingredient) {
      recipesApi
        .get("/food/ingredients/" + ingredient.id + "/information", {
          headers: {
            'X-RapidAPI-Key': 'aeb829b790mshc38c4633825123fp1b59acjsnef421b3516d6',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
          }
        }).then((response) => {
          console.log(response.data)
          const responseIngredient: detailedSpoonacularIngredient = response.data
          const categories = responseIngredient.categoryPath
          const correct = categories.sort((a, b) => {
            return a.length - b.length;
          });
          let category: string;
          if (correct.length > 0) {
            category = correct[0];
            category = category.charAt(0).toUpperCase() + category.slice(1)
          } else {
            category = "Other"
          }
          console.log(category)
          api
            .post("/add-to-fridge", {
              name: ingredient.name,
              quantity: quantity,
              expiry: expiry,
              image: ingredient.image,
              category: category,
            })
            .then(() => {
              setAdding(false);
              setIngredient(null);
              setQuantity(0);
              refresh();
            });
        });

    } else {
      alert("Please select an ingredient");
    }
  };

  const searchIngredient = (i: string) => {
    recipesApi
      .get("/food/ingredients/search", {
        params: {
          query: i,
          apiKey: currentApiKey,
        },
        headers: {
          'X-RapidAPI-Key': 'aeb829b790mshc38c4633825123fp1b59acjsnef421b3516d6',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      })
      .then((response) => {
        setAutocomplete(response.data.results);
      });
  };

  return adding ? (
    <div className={getStyle(styles, "addingRow")}>
      <FormControl>
        <Autocomplete
          sx={{ transform: "scale(0.8)", width: "17rem" }}
          disablePortal
          id="combo-box-demo"
          value={ingredient}
          options={autocomplete}
          getOptionLabel={(option) => option.name}
          onInputChange={(_, v, r) => {
            if (r === "input") {
              searchIngredient(v);
            }
          }}
          onChange={(_, v) => {
            setIngredient(v);
          }}
          renderInput={(params) => <TextField {...params} label="Ingredient" />}
        />
      </FormControl>

      <TextField
        sx={{
          transform: "scale(0.8)",
          width: "17rem",
          textAlign: "center",
          marginBottom: "5px",
        }}
        label="Quantity"
        type="number"
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />

      <ThemeProvider theme={theme}>
        <DatePicker
          className="w-[218px]"
          onChange={(v: Date | null) => setExpiry(v)}
        />
      </ThemeProvider>

      <div className={getStyle(styles, "btnCtn")}>
        <button
          className={getStyle(styles, "redCircle")}
          onClick={() => setAdding(!adding)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className={getStyle(styles, "icon")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <button className={getStyle(styles, "greenTick")} onClick={addToFridge}>
          <svg
            className="w-[20px] h-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={"white"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
      </div>
    </div>
  ) : (
    <div className={getStyle(styles, "row")}>
      <button
        className={getStyle(styles, "greenCircle")}
        onClick={() => setAdding(!adding)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className={getStyle(styles, "icon")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <div className={getStyle(styles, "text")}>Add an item to your pantry</div>
    </div>
  );
}

const styles = {
  btnCtn: ["flex", "w-full", "justify-center", "items-center", "mt-7"],
  textField: ["border-none"],
  form: ["mx-2"],
  row: [
    "flex",
    "items-center",
    "px-1",
    "py-[15px]",
    "bg-backgroundBeige",
    "justify-center",
    "rounded-lg",
    "shadow-md",
    "w-full",
  ],
  addingRow: [
    "flex",
    "flex-col",
    "justify-center",
    "bg-backgroundBeige",
    "p-3",
    "rounded-lg",
    "items-center",
    "shadow-md",
    "w-full",
  ],
  rowitem: ["m-1"],
  rowitem2: ["m-1", "w-30"],
  rowitem3: ["m-1", "w-40"],
  text: [
    "items-center",
    "justify-center",
    "ml-6",
    "flex",
    "text-md",
    "font-medium",
  ],
  greenCircle: [
    "rounded-full",
    "flex",
    "items-center",
    "justify-center",
    "h-[30px]",
    "w-[30px]",
    "bg-green-700",
    "shadow-xl",
    "mr-[-4px]",
  ],
  greenTick: [
    "rounded-full",
    "flex",
    "items-center",
    "justify-center",
    "h-[35px]",
    "w-[35px]",
    "bg-green-700",
    "ml-3",
    "shadow-md",
  ],
  redCircle: [
    "rounded-full",
    "flex",
    "items-center",
    "justify-center",
    "h-[35px]",
    "w-[35px]",
    "bg-expirationRed",
    "mr-8",
    "shadow-md",
  ],
  icon: ["h-6", "w-6"],
  addrow: [
    "flex",
    "flex-row",
    "ion-justify-content-center",
    "w-full",
    "ion-align-items-center",
  ],
};

export default AddIngredient;
