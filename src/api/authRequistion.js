import axios from "axios"

const ServerUrl = process.env.SERVER_URL;

const API = axios.create({baseURL: ServerUrl})

export const signup = (formData) => API.post('/api/user/signup', formData)

export const login = (formData) => API.post('/api/user/login', formData)