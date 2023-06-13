import getStyle from "../../Styles";

interface props {
    recipeSummary: RecipeSummary;
    recipeDetails: RecipeDetails;
}

function RecipeCard({ recipeSummary, recipeDetails }: props) {
    const pricePerServing = (Math.round(recipeDetails.pricePerServing * 100) / 10000).toFixed(2);
    return (
        <tr className={getStyle(styles, "card")}>
            <td className={getStyle(styles, "leftEdge")}>
                <img src={recipeDetails.image} className={getStyle(styles, "foodImage")} alt="" />
            </td>
            <td>{recipeSummary.title}</td>
            <td> {recipeDetails.readyInMinutes} minutes</td>
            <td> ${pricePerServing} per serving</td>
        </tr>
    );
}

const styles = {
    card: ["bg-backgroundBeige"],
    foodImage: ["w-32", "p-2", "rounded-3xl", "overflow-hidden"],
    leftEdge: ["rounded-tl-lg", "rounded-bl-lg", "pl-2"],
    rightEdge: ["rounded-tr-lg", "rounded-br-lg"],
}

export default RecipeCard;