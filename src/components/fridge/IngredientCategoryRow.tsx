interface Props {
    category: string;
}

function IngredientCategoryRow({ category }: Props) {
    return (
        <tr>
            <th colSpan={6}>
                {category}
            </th>
        </tr >
    );
}

export default IngredientCategoryRow;