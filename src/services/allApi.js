import axios from 'axios';
import { API_ENDPOINTS, BASE_URL } from './constants';

export const userLogin = async (reqBody) => {
    try {
        const response = await axios.post(`${BASE_URL}${API_ENDPOINTS.USER_AUTH}/signin/`, reqBody, {
        });
        return response.data;
    } catch (error) {
        console.error('Failed to add blog:', error);
        throw error;
    }
};

export const getWorkList = async () => {
    try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get(`${BASE_URL}${API_ENDPOINTS.WORK_LIST}/catering/published/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getProfile = async () => {
    try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get(`${BASE_URL}${API_ENDPOINTS.USER_AUTH}/users/me/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const updateProfile = async (reqBody) => {
    try {
        const token = localStorage.getItem('access_token');
        const response = await axios.patch(`${BASE_URL}${API_ENDPOINTS.USER_AUTH}/update/users-details/`,reqBody,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getWorkById = async (id) => {
    try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get(`${BASE_URL}${API_ENDPOINTS.WORK_LIST}/published-work/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const requestWork = async (reqBody) => {
    try {
        const token = localStorage.getItem('access_token');
        const response = await axios.post(`${BASE_URL}${API_ENDPOINTS.USER_AUTH}/work-request/create/`,reqBody,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const myWorks = async () => {
    try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get(`${BASE_URL}${API_ENDPOINTS.USER_AUTH}/work-request/list/`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};