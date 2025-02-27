import { useState } from 'react';
import axios from 'axios';
import config from '../config';


// Exemple de messages par défaut (peut être connecté à un vrai backend)
const INITIAL_MESSAGES = [
  { sender: "bot", text: "Bonjour !  Je ne suis pas en ligne mais ma version virtuelle l'est et peux repondre a la majrité des questions sur mes capacitees et mon parcours. Comment puis-je vous aider ?" },
];


export function useChat() {
  const [chatLog, setChatLog] = useState<{ sender: string; text: string }[]>(INITIAL_MESSAGES);  const [loading, setLoading] = useState(false);

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    setChatLog(prev => [...prev, { sender: 'user', text: message }]);
    setLoading(true);

    try {
        const response = await axios.post(`${config.backendChatUrl}`, { message });
      setChatLog(prev => [...prev, { sender: 'Bot', text: response.data.reply }]);
    } catch (error) {
      console.error("Erreur d'envoi du message :", error);
    } finally {
      setLoading(false);
    }
  };

  return { chatLog, sendMessage, loading };
}