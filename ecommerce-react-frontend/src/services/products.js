const URL = "https://ecommerce-json-jwt.onrender.com/items";



const getProducts = async () => {
    const request = await fetch(URL);
    const response = await request.json();
    /* console.log("respuestaa",response) */
    return response;
};


export default getProducts
