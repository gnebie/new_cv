// import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

// function HeroSection() {
  
//   return (
//     <Box 
//       bgImage="url('https://source.unsplash.com/random/1600x900')" 
//       bgSize="cover" 
//       bgPos="center" 
//       height="50vh" 
//       color="grey" 
//       padding="4rem"
//     >
//       <VStack spacing={4} align="start">
//         <Heading fontSize="5xl">Bienvenue sur Mon Site</Heading>
//         <Text fontSize="xl">Développeur Backend | Intégration IA | Automatisation</Text>
//         <Button colorScheme="teal" size="lg">En savoir plus</Button>
//       </VStack>
//     </Box>
//   );
// }

// export default HeroSection;
import { Box, Heading, Text, VStack, Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import BlurText from '../../components/react-bits/BlurText'
import StarBorder from '../../components/react-bits/StarBorder';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

function HeroSection() {
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");

  return (
    <MotionBox textAlign="center" p={10}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      margin={10}
    >

      <Heading color={textColor} size="2xl">
      🚀 Boostez votre Backend Python & Intégration IA 
      {/* <BlurText
  text=""
  delay={150}
  animateBy="words"
  direction="top"
  className="text-2xl mb-8"
/> */}
      </Heading>
      <Text fontSize="xl" color={textColor} mt={3}>
        Développeur **Backend Python & Intelligence Artificielle**, j'aide les entreprises à 
        concevoir des **APIs performantes**, intégrer des **modèles IA avancés** et automatiser 
        leurs processus.
      </Text>
            <StarBorder as={Link} to="/contact" colorScheme="primary" size="lg" mt={6} whileHover={{ scale: 1.05 }}>

      {/* <MotionButton as={Link} to="/contact" colorScheme="primary" size="lg" mt={6} margin={10}
        whileHover={{ scale: 1.05 }}> */}
        Discutons de votre projet
      {/* </MotionButton> */}
      </ StarBorder>
    </MotionBox>
  );
}

export default HeroSection;