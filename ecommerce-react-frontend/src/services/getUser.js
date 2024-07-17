import axios from "axios";

const URL = "https://ecommerce-json-jwt.onrender.com/users/me";

const getMeUserService = (jwt) => axios.get(URL,{
    headers:{
        Authorization: `Bearer ${jwt}`
    }
});

export {getMeUserService};