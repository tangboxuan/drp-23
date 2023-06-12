import getStyle from "../../Styles";

interface Props {
    category: string;
}

function IngredientCategoryRow({ category }: Props) {
    return (
        <tr className={getStyle(styles, "row")}>
            <th colSpan={7}>
                {category}
            </th>
        </tr >
    );
}

const styles = {
    row: ["h-14", "text-left", "text-xl", "font-bold"]
}

export default IngredientCategoryRow;