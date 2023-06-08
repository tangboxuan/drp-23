import axios from "axios";

export const BASE_URL = "http://localhost:5000";

const client = axios.create({
  baseURL: `${BASE_URL}`,
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
