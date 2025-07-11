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
        const response = await axios.get(`${BASE_URL}${API_ENDPOINTS.PROFILE}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};