import axios from "axios";

const SERVER_URL = "http://18.185.148.165:3000/";
const SERVER_URL_V1 = SERVER_URL + "api/v1/";

axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
})

export const login = async(email, password) => {
    try {
        const results = await axios.post(SERVER_URL + "login", {email, password});
        localStorage.setItem("user", JSON.stringify(results.data.data));
        localStorage.setItem("token", results.data.data.token)
    } catch (err) {
        throw new Error(err);
    }
};

export const products = async() => {
    const results = await axios.get(SERVER_URL_V1 + "products");
    return results.data.data;
};

export const cart = async() => {
    try{
        const results = await axios.get(SERVER_URL_V1 + "cart");
        return results.data.data;
    } catch (err) {
        if (err.response.status === 401){
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            window.location.href="/"
        }
    }
};

export const addToCart = async (productId, qty) => {
    const results = await axios.post(SERVER_URL_V1 + "cart/add", {productId, qty});
    return results.data.data;
};

export const getProduct = async (id) => {
    const results = await axios.get(SERVER_URL_V1 + `products/${id}`);
    return  results.data.data;
};

export const deleteCartItem = async (itemId) => {
    try {const results = await axios.post(SERVER_URL_V1 + `cart/remove/${itemId}`);
        return results.data.data;
    } catch (err) {
        throw new Error(err)
    }
};

export const updateProduct = async (id, values) => {
    const results = await axios.put(SERVER_URL_V1 + `products/${id}`, values);
    return results.data.data;
};

export const addProduct = async (values) => {
  const results = await axios.post(SERVER_URL_V1 + "products", values);
  return results.data.data;
};

export const userRegistration = async (values) => {
    const results = await axios.post(SERVER_URL + "register", values);
    return results.data.data;
};

