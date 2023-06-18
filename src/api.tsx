import axios from "axios";

export const URL =
  process.env.NODE_ENV === "production"
    ? "https://drp23.herokuapp.com"
    : "http://localhost:8000";

const client = axios.create({
  baseURL: URL,
  timeout: 30000,
  withCredentials: true,
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
