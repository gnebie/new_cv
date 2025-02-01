import { Box, Input, Button, VStack, Text, HStack, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

function ChatSection() {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleSendMessage = async () => {
    if (message.trim() !== '') {
      const userMessage = { username: 'Utilisateur', message };
      setChatLog([...chatLog, userMessage]);

      // Appel backend (simulé ici)
      await axios.post('http://127.0.0.1:5000/send_message', userMessage);
    //   const response = await axios.post('http://127.0.0.1:5000/send_message', userMessage);
      const botResponse = { username: 'Bot', message: 'Je suis un chatbot simple.' };
      setChatLog(prev => [...prev, botResponse]);

      setMessage('');
    }
  };

  return (
    <Box bg="gray.100" padding="4rem">
      <VStack spacing={4} align="start">
        <Heading>Chatbot</Heading>
        <Box 
          width="100%" 
          height="300px" 
          bg="white" 
          border="1px solid gray" 
          overflowY="scroll" 
          padding="1rem"
        >
          {chatLog.map((msg, index) => (
            <Text key={index} color={msg.username === 'Bot' ? 'teal.600' : 'black'}>
              <strong>{msg.username}: </strong>{msg.message}
            </Text>
          ))}
        </Box>
        <HStack width="100%">
          <Input 
            placeholder="Écrivez un message..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
          />
          <Button colorScheme="teal" onClick={handleSendMessage}>Envoyer</Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default ChatSection;
