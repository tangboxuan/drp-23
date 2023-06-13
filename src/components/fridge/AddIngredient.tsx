import { useState } from "react"
import getStyle from "../../Styles"
import { TextField, Select, MenuItem } from "@mui/material"
import api from "../../api"

interface Props {
    refresh: () => void
}

const vegetables = new Set(["Broccoli"])

function AddIngredient({ refresh }: Props) {
    const [adding, setAdding] = useState(false)
    const [ingredient, setIngredient] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [expiry, setExpiry] = useState(0)

    const addToFridge = () => {
        api.post("/add-to-fridge", {
            name: ingredient,
            quantity: quantity,
            expiry: expiry,
            image: ingredient,
            category: vegetables.has(ingredient) ? "Vegetables" : "Fruits"
        }).then(() => {
            setAdding(false)
            setIngredient("")
            setQuantity(0)
            refresh()
        })
    }

    return (
        adding
            ? <div className={getStyle(styles, "row")}>
                <div className={getStyle(styles, "rowitem")}>
                    <button className={getStyle(styles, "red_circle")} onClick={() => setAdding(!adding)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className={getStyle(styles, "icon")}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>
                </div>
                <div className={getStyle(styles, "rowitem")}>
                    <Select
                        value={ingredient}
                        label="Ingredient"
                        onChange={(e) => setIngredient(e.target.value)}
                    >
                        <MenuItem value={"Broccoli"}>Broccoli</MenuItem>
                        <MenuItem value={"Kiwi"}>Kiwi</MenuItem>
                    </Select>
                </div>
                <div className={getStyle(styles, "rowitem2")}>
                    <TextField label="Quantity" onChange={e => setQuantity(parseInt(e.target.value))} />
                </div>
                <div className={getStyle(styles, "rowitem3")}>
                    <TextField label="Days to Expiry" onChange={e => setExpiry(parseInt(e.target.value))} />
                </div>
                <div className={getStyle(styles, "rowitem")}>
                    <button className={getStyle(styles, "green_tick")} onClick={addToFridge}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={"white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </button>
                </div>
            </div>
            :
            <div className={getStyle(styles, "row")}>
                <button className={getStyle(styles, "green_circle")} onClick={() => setAdding(!adding)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className={getStyle(styles, "icon")}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                </button>
                <div className={getStyle(styles, "text")}>Add an item to your fridge</div>
            </div>
    )
}

const styles = {
    row: ["flex", "flex-row", "ion-justify-content-center", "w-full", "p-5", "mt-5", "ion-align-items-center", "h-20"],
    rowitem: ["m-1"],
    rowitem2: ["m-1", "w-30"],
    rowitem3: ["m-1", "w-40"],
    text: ["text-xl", "items-center", "justify-center", "ml-5", "flex"],
    green_circle: ["rounded-full", "flex", "items-center", "justify-center", "h-10", "w-10", "bg-green-700"],
    green_tick: ["rounded-full", "flex", "items-center", "justify-center", "h-10", "w-10", "bg-green-700", "ml-1"],
    red_circle: ["rounded-full", "flex", "items-center", "justify-center", "h-10", "w-10", "bg-expirationRed", "mr-1"],
    icon: ["h-6", "w-6"]
}

export default AddIngredient
