import axios from "axios"

const ServerUrl = process.env.REACT_APP_SERVER_URL;

const API = axios.create({ baseURL: ServerUrl })

export const register = (formData) => API.post('/api/user/signup', formData)

export const login = (formData) => API.post('/api/user/login', formData)