import axios from "axios";

const URL = "https://ecommerce-json-jwt.onrender.com/login";

const logInUserService = (data) => axios.post(URL, data)

export {logInUserService};
