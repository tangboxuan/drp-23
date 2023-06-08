import getStyle from "../../Styles";
import expiryStatusFromDate from "../../util/ExpiryStatusFromDate";

interface Props {
    ingredient: Ingredient;
}

function IngredientRow({ ingredient }: Props) {
    const colour = expiryStatusFromDate(ingredient.expiry);
    return (
        <tr className={[getStyle(styles, "ingredient"), colour].join(" ")}>
            <td><img className={getStyle(styles, "ingredient")} src={ingredient.image} alt="" /></td>
            <td>x {ingredient.quantity}</td>
            <td>{ingredient.name}</td>
            <td>{ingredient.expiry}</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    )
}

const styles = {
    ingredient: ["h-[21px]", "w-[21px]"],
}

export default IngredientRow;