import axios from "axios";
const url = 'http://194.87.94.216/'

export default {
    getProducts: (payload)=> axios.get(url+`api/products?page=${payload?.page}`),
    getProduct: (id) => axios.get(url+`api/products/${id}`),
    register: (payload) => axios.post(url+'api/register', payload),
    login: (payload) => axios.post(url+'api/login', payload), //name & email
}