import { Box, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';

function DetailedSection() {
  const bgColor = useColorModeValue("surface.light.100", "surface.dark.100");

  return (
    <Box padding="4rem" bg={bgColor}>
      <VStack spacing={4} align="start">
        <Heading fontSize="3xl">À propos de moi</Heading>
        <Text fontSize="lg">
          Je suis un développeur backend spécialisé en Python et intégration de solutions IA.
          Avec plus de 5 ans d’expérience, j’ai conçu des architectures backend robustes,
          des solutions automatisées et des intégrations de services intelligents.
        </Text>
        <Text fontSize="lg">
          J’ai travaillé sur des projets d’envergure dans la finance, les systèmes distribués,
          et la rétro-ingénierie de systèmes complexes. Je suis passionné par les technologies
          émergentes et l’automatisation.
        </Text>
      </VStack>
    </Box>
  );
}

export default DetailedSection;