import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

function HeroSection() {
  
  return (
    <Box 
      bgImage="url('https://source.unsplash.com/random/1600x900')" 
      bgSize="cover" 
      bgPos="center" 
      height="50vh" 
      color="grey" 
      padding="4rem"
    >
      <VStack spacing={4} align="start">
        <Heading fontSize="5xl">Bienvenue sur Mon Site</Heading>
        <Text fontSize="xl">Développeur Backend | Intégration IA | Automatisation</Text>
        <Button colorScheme="teal" size="lg">En savoir plus</Button>
      </VStack>
    </Box>
  );
}

export default HeroSection;