import axios from "axios";

const URL = "https://ecommerce-json-jwt.onrender.com/register";

const registerUserService = (data) => axios.post(URL, data)

export {registerUserService}