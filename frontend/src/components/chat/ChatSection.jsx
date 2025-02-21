import { Box, Input, Button, VStack, useColorModeValue, Text, HStack, Heading, Spinner } from '@chakra-ui/react';
import { useChat } from '../../hooks/useChat';
import { useState } from 'react';

function ChatSection() {
  const { chatLog, sendMessage, loading } = useChat();
  const [message, setMessage] = useState('');
  const bgColor = useColorModeValue("surface.light.300", "surface.dark.300");
  const bgColorMessage = useColorModeValue("surface.light.100", "surface.dark.100");
  

  return (
    <Box bg={bgColor} padding="4rem">
      <VStack spacing={4} align="start">
        <Heading>Chatbot</Heading>
        <Box width="100%" height="300px" bg="white" border="1px solid gray" overflowY="scroll" padding="1rem">
          {chatLog.map((msg, index) => (
            <Text key={index} color={msg.username === 'Bot' ? 'teal.600' : 'black'}>
              <strong>{msg.username}: </strong>{msg.message}
            </Text>
          ))}
        </Box>
        <HStack width="100%">
          <Input bg={bgColorMessage} placeholder="Écrivez un message..." value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button colorScheme="teal" onClick={() => sendMessage(message)} isLoading={loading}>
            Envoyer
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default ChatSection;