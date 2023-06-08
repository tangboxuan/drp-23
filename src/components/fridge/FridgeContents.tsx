import { ReactNode } from "react";
import IngredientCategoryRow from "./IngredientCategoryRow";
import IngredientRow from "./IngredientRow";

interface Props {
    ingredients: Ingredient[];
}

function FridgeContents({ ingredients }: Props) {
    const rows: ReactNode[] = [];
    let lastCategory = "";

    ingredients.forEach((ingredient) => {
        if (ingredient.category !== lastCategory) {
            rows.push(
                <IngredientCategoryRow category={ingredient.category} key={ingredient.category} />
            );
        }

        rows.push(<IngredientRow ingredient={ingredient} key={ingredient.name} />);

        lastCategory = ingredient.category;
    });

    return (
        <table>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default FridgeContents;