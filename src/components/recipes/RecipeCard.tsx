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
            <td className="font-bold">{recipeSummary.title}</td>
            <td> {recipeDetails.readyInMinutes} </td>
            <td className={getStyle(styles, "rightEdge")}>{pricePerServing}</td>
        </tr>
    );
}

const styles = {
    card: ["bg-backgroundBeige", "font-bold"],
    foodImage: ["w-96", "p-1", "rounded-3xl", "overflow-hidden"],
    leftEdge: ["rounded-tl-lg", "rounded-bl-lg", "pl-2"],
    rightEdge: ["rounded-tr-lg", "rounded-br-lg"],
}

export default RecipeCard;