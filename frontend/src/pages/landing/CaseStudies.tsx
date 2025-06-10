import { Box, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';


function CaseStudies() {
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
    const bgColor = useColorModeValue("surface.light.100", "surface.dark.100");

  return (
<Box textAlign="center" py={12} bg={bgColor}>
  <Heading size="lg" mb={4} color={textColor}>
    📂 Exemples concrets de projets réalisés
  </Heading>
  <Text fontSize="md" mb={6} color={textColor}>
    Déploiement IA, APIs scalables, automatisation... Des solutions concrètes pour des clients exigeants.
  </Text>
  <Button as={RouterLink} to="/portfolio" colorScheme="blue" variant="solid">
    Voir les études de cas
  </Button>
</Box>

  );
}

export default CaseStudies;
