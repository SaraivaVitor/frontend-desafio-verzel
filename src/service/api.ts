import axios from 'axios';

const token:any = localStorage.getItem("@cursosOn") 

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {authorization: `Bearer ${token}` }
})

export default api;