import getStyle from "../../Styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { List, ListItem } from "@mui/material";
import { timeOutline, chevronBackOutline, walletOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

interface props {
  recipeSummary: RecipeSummary;
  recipeDetails: RecipeDetails;
}

function RecipeCard({ recipeSummary, recipeDetails }: props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const pricePerServing = (
    Math.round(recipeDetails.pricePerServing * 100) / 10000
  ).toFixed(2);

  const ingredients = recipeDetails.extendedIngredients.map((ingredient) => {
    const measure = ingredient.measures.metric;
    const amount = measure.amount + " " + measure.unitShort;

    return (
      <ListItem sx={{ display: "list-item" }} key={ingredient.id}>
        {amount} {ingredient.name}
      </ListItem>
    );
  });

  const instructions = 
  recipeDetails.analyzedInstructions.length > 0 ?
  recipeDetails.analyzedInstructions[0].steps.map(
    (step) => {
      return (
        <ListItem sx={{ display: "list-item" }} key={step.number}>
          {step.step}
        </ListItem>
      );
    }
  )
  : <ListItem sx={{ display: "list-item" }} key={1}>
    No steps provided for this recipe
  </ListItem>

  return (
    <>
      <div onClick={handleOpen} className={getStyle(styles, "shortViewCtn")}>
        <div>
          <img
            src={recipeDetails.image}
            className={getStyle(styles, "foodImage")}
            alt=""
          />
        </div>
        <div className="font-medium text-sm mt-3 text-center">
          {recipeSummary.title}
        </div>
        <div className={getStyle(styles, "infoCtn")}>
          <IonIcon
            className={getStyle(styles, "iconShortView")}
            icon={timeOutline}
          />
          <div>{recipeDetails.readyInMinutes} mins</div>
        </div>
      </div>

      {/* Modal Recipe Container */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="h-full">
          <button onClick={handleClose} className={getStyle(styles, "backBtn")}>
            <IonIcon
              className={getStyle(styles, "backBtnIcon")}
              icon={chevronBackOutline}
            />
            <p>Back</p>
          </button>
          <div className={getStyle(styles, "recipeTitle")}>
            {recipeSummary.title}
          </div>
          <div className="w-full flex flex-col items-center mt-6">
            <img
              className={getStyle(styles, "recipeImg")}
              src={recipeDetails.image}
              alt=""
            />
            <div className={getStyle(styles, "infoModal")}>
              <div className="flex items-center">
                <IonIcon
                  className={getStyle(styles, "iconModal")}
                  icon={timeOutline}
                />
                <div className="text-[12px]">
                  {recipeDetails.readyInMinutes} mins
                </div>
              </div>

              <div className="flex items-center">
                <IonIcon
                  className={getStyle(styles, "iconModal")}
                  icon={walletOutline}
                />
                <div className="text-[12px]">£{pricePerServing} per serving</div>
              </div>
            </div>
          </div>
          <div className={getStyle(styles, "instructions")}>
            <p className="font-medium">Ingredients</p>
            <List
              sx={{
                listStyleType: "disc",
                pl: 4,
              }}
            >
              {ingredients}
            </List>
            <p className="font-medium">Instructions</p>
            <List
              sx={{
                listStyleType: "decimal",
                pl: 4,
              }}
            >
              {instructions}
            </List>
          </div>
        </Box>
      </Modal>
    </>
  );
}

const styles = {
  shortViewCtn: [
    "flex",
    "flex-col",
    "items-center",
    "rounded-lg",
    "shadow-md",
    "bg-backgroundBeige",
    "w-[135px]",
    "mt-4",
    "h-52",
  ],
  backBtn: [
    "flex",
    "justify-center",
    "items-center",
    "text-expirationRed",
    "absolute",
    "top-12",
    "left-6",
  ],
  backBtnIcon: ["h-5", "w-5", "mr-1", "text-expirationRed"],
  foodImage: ["w-96", "rounded-sm", "overflow-hidden"],
  recipeImg: ["shadow-md", "rounded-md", "w-[300px]"],
  recipeTitle: ["font-semibold", "text-lg", "text-center", "mt-4"],
  icon: ["h-6", "w-6"],
  iconModal: ["h-4", "w-4", "mr-2"],
  iconShortView: ["h-6", "w-6", "mr-2"],
  infoCtn: ["flex", "justify-center", "items-center", "w-full", "mt-3", "mb-3"],
  infoModal: ["flex", "w-full", "justify-around", "items-center", "mt-2"],
  instructions: ["w-full", "pl-3", "pr-1", "mt-5"],
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
  paddingTop: "80px",
};

export default RecipeCard;
