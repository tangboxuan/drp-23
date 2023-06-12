import { ReactNode, useState } from "react";
import IngredientCategoryRow from "./IngredientCategoryRow";
import IngredientRow from "./IngredientRow";
import getStyle from "../../Styles";
import AddIngredient from "./AddIngredient";
import ViewSwitch from "./ViewSwitch";

interface Props {
    ingredients: Ingredient[];
    refresh: () => void;
}

function groupIngredientsByCategory(ingredients: Ingredient[]) {
    const series = Array.from(new Set(ingredients.map((ingredient) => ingredient.category)));
    const groupedIngredients: { [key: string]: Ingredient[] } = {};

    series.forEach((category) => {
        groupedIngredients[category] = ingredients.filter((ingredient) => ingredient.category === category);
    });

    return groupedIngredients;
}

function sortIngredientsByExpiry(ingredients: Ingredient[]) {
    return ingredients.sort((a, b) => {
        return a.expiry - b.expiry;
    });
}

function categoriseView(ingredients: Ingredient[], refresh: () => void, updateCheckbox: (ingredientId: number, checked: boolean) => void) {
    const groupedIngredients = groupIngredientsByCategory(ingredients);
    const rows: ReactNode[] = [];
    for (const key in groupedIngredients) {
        const ingredients = groupedIngredients[key];

        rows.push(<IngredientCategoryRow category={key} key={key} />);

        sortIngredientsByExpiry(ingredients);

        ingredients.forEach(element => {
            rows.push(<IngredientRow ingredient={element} refresh={refresh} key={element.id} handleOnChange={updateCheckbox} />);
        });
    }

    return rows;
}

function sortView(ingredients: Ingredient[], refresh: () => void, updateCheckbox: (ingredientId: number, checked: boolean) => void) {
    sortIngredientsByExpiry(ingredients);

    const rows: ReactNode[] = [];
    ingredients.forEach(element => {
        rows.push(<IngredientRow ingredient={element} refresh={refresh} key={element.id} handleOnChange={updateCheckbox} />);
    });

    return rows;
}

function FridgeContents({ ingredients, refresh }: Props) {
    const [categoryView, setCategoryView] = useState(true);
    const [checkedValues, setCheckedValues] = useState<{ [id: number]: boolean }>([]);

    function updateCheckbox(ingredientId: number, checked: boolean) {
        const newValues = { ...checkedValues };
        newValues[ingredientId] = checked;
        setCheckedValues(newValues);
    }

    const rows: ReactNode[] = categoryView ? categoriseView(ingredients, refresh, updateCheckbox) : sortView(ingredients, refresh, updateCheckbox);
    console.log(checkedValues);


    return (
        <div className={getStyle(styles, "container")}>
            <AddIngredient refresh={refresh} />
            <ViewSwitch change={setCategoryView} />
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