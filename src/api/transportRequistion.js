import axios from "axios"

const ServerUrl = process.env.REACT_APP_SERVER_URL;

const API = axios.create({ baseURL: ServerUrl })

export const getTransports = () => {
    return API.get(`/api/transport`);
};

export const addTransport = (formDate) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return API.post("/api/transport", formDate, { headers: { token } });
};

export const deleteTransport = (id) => {
    const token = JSON.parse(localStorage.getItem('token'))
    return API.delete(`/api/transport/${id}`, { headers: { token } })
}

export const updateTransport = (id, formData) => {
    const token = JSON.parse(localStorage.getItem('token'))
    return API.put(`/api/transport/${id}`, formData, { headers: { token } })
}