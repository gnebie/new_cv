import { Box, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import BlurText from '../../components/react-bits/BlurText';
import StarBorder from '../../components/react-bits/StarBorder';
// import heroAnimation from '../../assets/hero-animation.json';  // Ajoute une animation Lottie

const MotionBox = motion(Box);
// const MotionButton = motion(Button);

function HeroSection() {
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const bgColor = useColorModeValue("surface.light.100", "surface.dark.100");
  const bgGradient = useColorModeValue(
    "linear(to-b, rgba(255,255,255,0.7), rgba(255,255,255,0))",  // Mode clair
    "linear(to-b, rgba(0,0,0,0.6), rgba(0,0,0,0))"  // Mode sombre
  );

  return (
    <MotionBox
      textAlign="center"
      width="100vw"
      height="70vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      p={10}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Gradient semi-transparent pour améliorer la lisibilité */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient={bgGradient}
        zIndex="0"
      />

      <VStack spacing={8} zIndex="1" maxWidth="800px">
        <Heading color={textColor} size="2xl" fontWeight="bold">
          🚀 Transformez votre <Text as="span" color="primary.500">Backend & IA</Text> en un atout stratégique
        </Heading>

        <Box bg={bgColor} p={6} borderRadius="md" backdropFilter="blur(10px)">
        <Text fontSize="xl" color={textColor}>
            Vous avez besoin d’une API ultra-performante ou d’une intégration IA sur mesure ?  
            </Text>

          <Text fontSize="xl" color={textColor}>
            Bienvenu sur mon site, NEBIE Guillaume, Architecte de rêves
            </Text>
            <Text fontSize="xl" color={textColor}>
            Je vous aide à automatiser vos processus et scaler votre infrastructure, sans compromis sur la qualité.
          </Text>
        </Box>

        {/* Animation Lottie (au lieu d’un portrait statique) */}
        {/* <Box width="300px">
          <Lottie animationData={heroAnimation} loop={true} />
        </Box> */}
      <Link  to="/contact">

        <StarBorder>
          🚀 Discutons de votre projet
        </StarBorder>
        </Link>
      </VStack>
    </MotionBox>
  );
}

export default HeroSection;
