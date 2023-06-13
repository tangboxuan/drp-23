interface SpoonacularIngredient {
    id: number;
    amount: number;
    unit: string;
    unitLong: string;
    unitShort: string;
    aisle: string | null;
    name: string;
    original: string;
    originalName: string;
    extendedName?: string;
    consistency?: string;
    meta: string[];
    image: string | null;
}
