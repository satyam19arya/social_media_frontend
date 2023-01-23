import {axiosClient} from '../../utils/axiosClient';

export const createChat = (data) => axiosClient.post('/chat/', data);
export const userChats = (id) => axiosClient.get(`/chat/${id}`);
export const findChat = (firstId, secondId) => axiosClient.get(`/chat/find/${firstId}/${secondId}`);