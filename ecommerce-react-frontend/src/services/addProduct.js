import axios from "axios";

const URL = "https://ecommerce-json-jwt.onrender.com/items";

const addProductService = (token, productData) => {
    return axios.post(URL, productData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  };
export {addProductService}