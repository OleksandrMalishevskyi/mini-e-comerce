import axios from 'axios';
const apiUrl = "http://localhost:5000/api/product";


export function getProducts() {
    return axios.get(apiUrl);
}

export function addProduct(variables) {
    return axios.post(apiUrl, variables)
}

export function updateProduct(id, variables) {
    return axios.put(apiUrl + "/" + id, variables)
}

export function deleteProduct(id, variables) {
    return axios.put(apiUrl + "/" + id)
}