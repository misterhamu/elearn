import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API;
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "content-type": "application/json",
  },
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const err: any = error.response;
    return Promise.reject(error);
  }
);

export default instance;
