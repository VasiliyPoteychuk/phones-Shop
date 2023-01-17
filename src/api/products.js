import axios from "axios";
const url = 'http://194.87.94.216/'

export default {
    getProducts: (payload)=> axios.get(url+`api/products?page=${payload?.page}`),
    getProduct: (id=1)=> axios.get(url+`api/products/:${id}`),
}