import axios from "axios";

const getBaseUrl = () => {
    const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    return url;
}

export const oldApiKey = "597b14fc59f64d6bbd923959a4282868"
export const newApiKey = "679de17395ea4fb8ab755b0c45367901"
export const thirdApi = "48b2480669a340be841ac0b31c6df9fb"
export const currentApiKey = "aeb829b790mshc38c4633825123fp1b59acjsnef421b3516d6"

const client = axios.create({
    baseURL: getBaseUrl(),
    timeout: 30000,
    withCredentials: false,
});

const clientApi = {
    get: client.get,
    delete: client.delete,
    post: client.post,
    put: client.put,
    patch: client.patch,
};

Object.freeze(clientApi);

export default clientApi;
