import { useState } from "react";
import getStyle from "../../Styles";
import { TextField } from "@mui/material";
import api from "../../api";

function AddIngredient() {
    const [adding, setAdding] = useState(false);
    const [ingredient, setIngredient] = useState("")
    const [quantity, setQuantity] = useState(0)

    const addToFridge = () => {
        api.post("/add-to-fridge", {
            name: ingredient,
            quantity: quantity,
            image: "src/assets/broccoli.png",
            category: "vegetable"
        }).then(() => {
            setAdding(false);
            setIngredient("");
            setQuantity(0);
        })
    }

    return (
        adding 
        ? <div className={getStyle(styles, "row")}>
        <div className={getStyle(styles, "red_circle")} onClick={() => setAdding(!adding)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className={getStyle(styles, "icon")}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

        </div>
        <TextField label="Ingredient" onChange={e => setIngredient(e.target.value)}/>
        <TextField label="Quantity" onChange={e => setQuantity(parseInt(e.target.value))}/>
        <div className={getStyle(styles, "green_circle")} onClick={addToFridge}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className={getStyle(styles, "icon")}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

        </div>
        </div>
        :
        <div className={getStyle(styles, "row")}>
            <div className={getStyle(styles, "green_circle")} onClick={() => setAdding(!adding)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className={getStyle(styles, "icon")}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

            </div>
            <div className={getStyle(styles, "text")}>Add an item to your fridge</div>
        </div>
    );
}

const styles = {
    row: ["flex", "flex-row", "w-full", "p-5", "mt-5"],
    text: ["text-xl", "items-center", "justify-center", "ml-5", "flex"],
    green_circle: ["rounded-full", "flex", "items-center", "justify-center", "h-10", "w-10", "bg-green-700"],
    red_circle : ["rounded-full", "flex", "items-center", "justify-center", "h-10", "w-10", "bg-expirationRed"],
    icon: ["h-6", "w-6"]
}

export default AddIngredient;