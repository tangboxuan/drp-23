import getStyle from "../../Styles";

function AddIngredient() {
    return (
        <div className={getStyle(styles, "row")}>
            <div className={getStyle(styles, "circle")}>
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
    circle: ["rounded-full", "bg-green-700", "flex", "items-center", "justify-center", "h-10", "w-10"],
    icon: ["h-6", "w-6"]
}

export default AddIngredient;