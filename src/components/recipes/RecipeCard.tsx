import getStyle from "../../Styles";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { List, ListItem } from "@mui/material";

interface props {
    recipeSummary: RecipeSummary;
    recipeDetails: RecipeDetails;
}

function RecipeCard({ recipeSummary, recipeDetails }: props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const pricePerServing = (Math.round(recipeDetails.pricePerServing * 100) / 10000).toFixed(2);

    const ingredients = recipeDetails.extendedIngredients.map((ingredient) => {
        const measure = ingredient.measures.metric;
        const amount = measure.amount + " " + measure.unitShort;

        return (
            <ListItem sx={{ display: 'list-item' }} key={ingredient.id}>{amount} {ingredient.name}</ListItem>
        );
    });

    const instructions = recipeDetails.analyzedInstructions[0].steps.map((step) => {
        return (
            <ListItem sx={{ display: 'list-item' }} key={step.number}>{step.step}</ListItem>
        );
    });

    return (
        <>
            <tr className={getStyle(styles, "card")} onClick={handleOpen}>
                <td className={getStyle(styles, "leftEdge")}>
                    <img src={recipeDetails.image} className={getStyle(styles, "foodImage")} alt="" />
                </td>
                <td className="font-bold">{recipeSummary.title}</td>
                <td> {recipeDetails.readyInMinutes} </td>
                <td className={getStyle(styles, "rightEdge")}>{pricePerServing}</td>
            </tr>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {recipeSummary.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Ingredients:
                        <List sx={{
                            listStyleType: 'disc', pl: 4
                        }}>
                            {ingredients}
                        </List>
                        Instructions:
                        <List sx={{
                            listStyleType: 'decimal', pl: 4
                        }}>
                            {instructions}
                        </List>
                    </Typography>
                </Box>
            </Modal >
        </>
    );
}

const styles = {
    card: ["bg-backgroundBeige", "font-bold"],
    foodImage: ["w-96", "p-1", "rounded-3xl", "overflow-hidden"],
    leftEdge: ["rounded-tl-lg", "rounded-bl-lg", "pl-2"],
    rightEdge: ["rounded-tr-lg", "rounded-br-lg"],
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default RecipeCard;