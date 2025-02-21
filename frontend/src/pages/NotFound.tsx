import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Box textAlign="center" mt={10}>
      <Heading size="xl">404 - Page Introuvable</Heading>
      <Text mt={4}>Désolé, la page que vous recherchez n'existe pas.</Text>
      <Button as={Link} to="/" colorScheme="primary" mt={6}>
        Retour à l'accueil
      </Button>
    </Box>
  );
}

export default NotFound;