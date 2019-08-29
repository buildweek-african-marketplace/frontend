import axios from "axios";

axios.defaults.baseURL = "https://lbs-african-marketplace.herokuapp.com";

axios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.authorization = token;
  return config;
});

axios.interceptors.response.use(res => {
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res;
});