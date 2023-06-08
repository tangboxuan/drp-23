import axios from "axios";

const getBaseUrl = () => {
  let url;
  switch (process.env.NODE_ENV) {
    case 'production':
      url = "https://drp23.herokuapp.com";
      break;
    case 'development':
    default:
      url = "http://10.0.2.2:5000";
  }

  return url;
}

const client = axios.create({
  baseURL: getBaseUrl(),
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
