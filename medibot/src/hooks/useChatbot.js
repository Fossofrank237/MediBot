import { useState } from 'react';
import { postMessage } from '../services/chatbotService';

export const useChatbot = () => {
  const [conversation, setConversation] = useState([]);

  const sendMessage = async (text) => {
    const newMessage = { text, timestamp: new Date().toISOString() };
    const response = await postMessage(newMessage);
    setConversation(prev => [...prev, response.data]);
  };

  return { conversation, sendMessage };
};