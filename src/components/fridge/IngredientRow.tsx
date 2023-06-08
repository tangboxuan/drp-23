import getStyle from "../../Styles";
import expiryStatusFromDate from "../../util/ExpiryStatusFromDate";

interface Props {
    ingredient: Ingredient;
}

function IngredientRow({ ingredient }: Props) {
    const colour = expiryStatusFromDate(ingredient.expiry);
    return (
        <tr className={[getStyle(styles, "row"), colour].join(" ")}>
            <td className={getStyle(styles, "leftEdge")}>
                <div className={getStyle(styles, "circle")}>
                    <img className={getStyle(styles, "ingredient")} src={ingredient.image} alt="" />
                </div>
            </td>
            <td>x {ingredient.quantity}</td>
            <td>{ingredient.name}</td>
            <td>{ingredient.expiry} days</td>
            <td>
                <div className={getStyle(styles, "smallCircle")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className={getStyle(styles, "icon")}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                </div>
            </td>
            <td className={getStyle(styles, "rightEdge")}>
                <div className={getStyle(styles, "smallCircle")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className={getStyle(styles, "icon")}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
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
    icon: ["h-4", "w-4"]
}

export default IngredientRow;