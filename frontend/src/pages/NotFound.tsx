import { Box, Center,Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FuzzyText from "../components/react-bits/FuzzyText";

function NotFound() {
    const hoverIntensity = 0.42
    const enableHover = true
  return (
    <Box textAlign="center" mt={10}>
      <Heading size="xl">
      <Center><FuzzyText 
            baseIntensity={0.2} 
            hoverIntensity={hoverIntensity} 
            enableHover={enableHover}
            >
    404 - Page Introuvable
    </FuzzyText></Center>
</Heading>
      <Text mt={4}>Désolé, la page que vous recherchez n'existe pas.</Text>
      <Button as={Link} to="/" colorScheme="primary" mt={6}>
        Retour à l'accueil
      </Button>
    </Box>
  );
}

export default NotFound;