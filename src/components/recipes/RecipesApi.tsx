import axios from "axios";

const getBaseUrl = () => {
    const url = "https://api.spoonacular.com"
    return url;
}

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
