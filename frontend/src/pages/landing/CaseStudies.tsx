import { Box, Heading, Text, VStack, HStack, Tag, Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);


function CaseStudies() {
  const bgColor = useColorModeValue("surface.light.200", "surface.dark.200");
  const cardColor = useColorModeValue("white", "surface.dark.100");
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const accentColor = useColorModeValue("primary.500", "secondary.500");

  return (
<Box textAlign="center" py={12}>
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
