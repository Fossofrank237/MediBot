import api from './api';

export const getMessages = () => api.get('/messages');
export const postMessage = (message) => api.post('/messages', message);