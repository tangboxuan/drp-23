import { ReactNode } from "react";
import IngredientCategoryRow from "./IngredientCategoryRow";
import IngredientRow from "./IngredientRow";
import getStyle from "../../Styles";
import AddIngredient from "./AddIngredient";

interface Props {
    ingredients: Ingredient[];
    refresh: () => void;
}

function FridgeContents({ ingredients, refresh }: Props) {
    const rows: ReactNode[] = [];
    let lastCategory = "";

    ingredients.forEach((ingredient) => {
        if (ingredient.category !== lastCategory) {
            rows.push(
                <IngredientCategoryRow category={ingredient.category} key={ingredient.category} />
            );
        }

        rows.push(<IngredientRow ingredient={ingredient} key={ingredient.id} refresh={refresh} />);

        lastCategory = ingredient.category;
    });

    return (
        <div className={getStyle(styles, "container")}>
            <AddIngredient refresh={refresh} />
            <table className={getStyle(styles, "table")}>
                <tbody>{rows}</tbody>
            </table>
        </div>
    )
}

const styles = {
    container: ["flex", "flex-col", "h-full", "w-full", "p-10", "mt-5"],
    table: ["border-separate", "border-spacing-y-3", "table-auto"]
}

export default FridgeContents;