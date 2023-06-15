import axios from "axios";

const getBaseUrl = () => {
    const url = "https://api.spoonacular.com"
    return url;
}

export const oldApiKey = "597b14fc59f64d6bbd923959a4282868"
export const currentApiKey = "679de17395ea4fb8ab755b0c45367901"

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
