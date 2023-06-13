interface RecipeSummary {
    id: number;
    title: string;
    image: string;
    imageType: string;
    usedIngredientCount: number;
    missedIngredientCount: number;
    missedIngredients: SpoonacularIngredient[];
    usedIngredients: SpoonacularIngredient[];
    unusedIngredients: SpoonacularIngredient[];
    likes: number;
}