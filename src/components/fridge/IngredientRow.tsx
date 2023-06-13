import { useState } from "react";
import getStyle from "../../Styles";
import api from "../../api";
import expiryColourFromDate from "../../util/ExpiryStatusFromDate";
import Broccoli from "../../assets/broccoli.png";
import Kiwi from "../../assets/kiwi.png";
import { Checkbox, TextField } from "@mui/material";

interface Props {
    ingredient: Ingredient;
    refresh: () => void;
    handleOnChange: (id: number, checked: boolean) => void;
}

const images: { [key: string]: string } = {
    "Broccoli": Broccoli,
    "Kiwi": Kiwi
}

function IngredientRow({ ingredient, refresh, handleOnChange }: Props) {


    const deleteIngredient = (id: number) => {
        api.post("/delete-from-fridge", {
            id: id
        }).then(() => {
            refresh();
        })
    }

    const bgColour = "bg-" + expiryColourFromDate(ingredient.expiry);
    const quantityTruncated = Math.floor(ingredient.quantity).toString();
    const [modifying, setModifying] = useState(false);
    const [newQuantity, setNewQuantity] = useState(quantityTruncated);
    const [newExpiry, setNewExpiry] = useState(ingredient.expiry.toString());

    const modify = () => {
        api.post("/modify-ingredient", {
            id: ingredient.id,
            quantity: parseInt(newQuantity),
            expiry: parseInt(newExpiry)
        }).then(() => {
            setModifying(false);
            refresh();
        })
    }

    return (
        <tr className={[getStyle(styles, "row"), bgColour].join(" ")}>
            <td className={getStyle(styles, "leftEdge")}>
                <div className={getStyle(styles, "circle")}>
                    <img className={getStyle(styles, "ingredient")} src={images[ingredient.name]} alt="" />
                </div>
            </td>
            <td>x</td><td> <>{modifying ? <TextField value={newQuantity} className={getStyle(styles, "edit")} size="small" onChange={e => setNewQuantity(e.target.value)}></TextField> : newQuantity}</></td>
            <td>{ingredient.name}</td>
            <td>{modifying? <TextField value={newExpiry} className={getStyle(styles, "edit")} size="small" onChange={e => setNewExpiry(e.target.value)}></TextField>: newExpiry} </td><td>days</td>
            <td>
                {modifying ?
                    <button className={getStyle(styles, "smallCircle")} onClick={modify}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={"green"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </button> :
                    <button className={getStyle(styles, "smallCircle")} onClick={() => setModifying(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className={getStyle(styles, "icon")}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                    </button> 
                }
            </td>
            <td>
                <button className={getStyle(styles, "smallCircle")} onClick={() => deleteIngredient(ingredient.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className={getStyle(styles, "icon")}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </td>
            <td className={getStyle(styles, "rightEdge")}>
                <Checkbox onChange={(e) => handleOnChange(ingredient.id, e.target.checked)} color="primary" />
            </td>
        </tr>
    )
}

const styles = {
    ingredient: ["h-[21px]", "w-[21px]"],
    leftEdge: ["rounded-tl-lg", "rounded-bl-lg", "pl-2"],
    rightEdge: ["rounded-tr-lg", "rounded-br-lg"],
    row: ["h-14", "text-white"],
    circle: ["rounded-full", "bg-white", "flex", "items-center", "justify-center", "h-10", "w-10"],
    smallCircle: ["rounded-full", "bg-white", "flex", "items-center", "justify-center", "h-6", "w-6"],
    icon: ["h-4", "w-4"],
    edit: ["w-10", "text-center", "h-10", "p-0", "m-0"]
}

export default IngredientRow;
