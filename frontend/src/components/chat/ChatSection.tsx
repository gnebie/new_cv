import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  VStack,
  HStack,
  Text,
  Badge,
  Spinner,
  // useColorModeValue,
} from "@chakra-ui/react";
import { FaCommentDots } from "react-icons/fa";
import { useChat } from "../../hooks/useChat";


function Chatbot() {
  const { chatLog, sendMessage, loading } = useChat();
  const [isOpen, setIsOpen] = useState(false);
  // const [chatLog, setMessages] = useState(INITIAL_MESSAGES);
  const [userInput, setUserInput] = useState("");
  const [hasNewMessage, setHasNewMessage] = useState(true);
  const [showPreview, setShowPreview] = useState(false);

  // const bgColorMessage = useColorModeValue("surface.light.100", "surface.dark.100");
  // const bgColor = useColorModeValue("surface.light.300", "surface.dark.300");

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setHasNewMessage(false);
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    sendMessage(userInput);
    setUserInput("");
  };


  return (
    <>
      {/* BOUTON FLOTTANT AVEC NOTIFICATION & APERÇU */}
      <Box
        position="fixed"
        bottom="20px"
        right="20px"
        onMouseEnter={() => setShowPreview(true)} // ✅ Affiche l'aperçu du dernier message
        onMouseLeave={() => setShowPreview(false)} // ✅ Cache l'aperçu quand on éloigne la souris
        zIndex={2}
      >
        {/* APERÇU DU DERNIER MESSAGE AU SURVOL */}
        {showPreview && chatLog.length > 0 && (
          <Box
            position="absolute"
            bottom="60px"
            right="5px"
            bg="gray.700"
            color="white"
            px={4}
            py={2}
            borderRadius="md"
            boxShadow="lg"
            opacity={0.9}
            width="100px"
            minWidth="200px"
            maxWidth="800px"
          >
            <Text fontSize="sm">{chatLog[chatLog.length - 1].text}</Text>
          </Box>
        )}

        {/* BOUTON FLOTTANT */}
        <IconButton
          aria-label="Chat"
          icon={<FaCommentDots />}
          boxSize="65px"
          fontSize="2xl"
          p={4}
          borderRadius="full"
          colorScheme="primary.500"
          boxShadow="lg"
          onClick={toggleChat}
          _hover={{ transform: "scale(1.1)", transition: "0.2s" }}
          _active={{ transform: "scale(0.9)" }}
        />

        {/* BADGE DE NOTIFICATION */}
        {hasNewMessage && (
          <Badge
            position="absolute"
            top="-5px"
            right="-5px"
            bg="red.500"
            color="white"
            fontSize="0.8em"
            borderRadius="full"
            px={2}
            py={1}
            boxShadow="lg"
          >
            1
          </Badge>
        )}
      </Box>

      {/* MODALE DU CHATBOT */}
      <Modal isOpen={isOpen} onClose={toggleChat} size="md" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chat avec moi 🤖</ModalHeader>
          <ModalCloseButton />

          {/* ZONE DE MESSAGES */}
          <ModalBody>
            <VStack spacing={3} align="start" height="300px" overflowY="auto">
              {chatLog.map((msg, index) => (
                <HStack key={index} alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"}>
                  <Box
                    bg={msg.sender === "user" ? "primary.700" : "primary.200"}
                    color={msg.sender === "user" ? "white" : "black"}
                    px={4}
                    py={2}
                    borderRadius="md"
                  >
                    <Text>{msg.text}</Text>
                  </Box>
                </HStack>
              ))}
              {loading && <Spinner />}
            </VStack>
          </ModalBody>

          {/* INPUT & ENVOI */}
          <Box p={4} borderTop="1px solid gray">
            <HStack>
              <Input placeholder="Écrivez un message..." value={userInput} onChange={(e) => setUserInput(e.target.value)} />
              <Button colorScheme="primary.500" onClick={handleSendMessage} isLoading={loading}>
                Envoyer
              </Button>
            </HStack>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Chatbot;
