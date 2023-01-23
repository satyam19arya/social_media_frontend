import {axiosClient} from '../../utils/axiosClient';

export const getMessages = (id) => axiosClient.get(`/message/${id}`);
export const addMessage = (data) => axiosClient.post('/message/', data);