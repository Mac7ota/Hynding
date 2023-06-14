import axios from 'axios';

const api = axios.create({
    baseURL: "https://api-hynding.herokuapp.com/Programacao"
});

export default api;

