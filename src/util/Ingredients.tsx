interface Ingredient {
    id: number;
    name: string;
    quantity: number;
    image: string;
    expiry: number;     // should probably be some kind of date to calculate it on client-side
    category: string;   // should be some category enum
}