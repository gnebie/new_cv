import { useState } from 'react';
import axios from 'axios';
import config from '../config';

// 'http://127.0.0.1:5000/send_message'



export function useChat() {
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    setChatLog(prev => [...prev, { username: 'Utilisateur', message }]);
    setLoading(true);

    try {
        const response = await axios.post(`${config.backendUrl}/send_message`, { message });
      setChatLog(prev => [...prev, { username: 'Bot', message: response.data.reply }]);
    } catch (error) {
      console.error("Erreur d'envoi du message :", error);
    } finally {
      setLoading(false);
    }
  };

  return { chatLog, sendMessage, loading };
}