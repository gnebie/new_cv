import { Box, Heading, VStack, useColorModeValue } from '@chakra-ui/react';
import Particles from '../components/react-bits/Particles';
import MyPortfolio from './porfolio/MyPortfolio';




function Portfolio() {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const particuleColor1 = useColorModeValue("primary.100", "#FFFFFF");
  const particuleColor2 = useColorModeValue("secondary.100", "#FFFFFF");

  return (
    <Box bg={bgColor}>
    <Box zIndex={1} width="100%"  position='relative'>
        <Box zIndex={1} width= '100%' height= '80vh' position= 'fixed' top="50px">
        
        <Particles
        particleColors={[particuleColor1, particuleColor2]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
        />
        
        </Box>
        </Box>   
        <Box py={16} px={8}>
        <VStack spacing={12} align="stretch">
        {/* Titre */}
        <Heading color={textColor} size="xl" textAlign="center">
          🎨 Mon Portfolio
        </Heading>

        {/* Liste des projets */}
        <MyPortfolio/>
      </VStack>
      </Box>
      </Box>
    );
}

export default Portfolio;
