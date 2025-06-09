import { Box, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from "react-router-dom";
import ShinyText from '../../components/react-bits/ShinyText';
// import StarBorder from '../../components/react-bits/StarBorder';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

function CTA2() {
    const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
    const bgColor = useColorModeValue("surface.light.100", "surface.dark.100");

  return (
    <MotionBox textAlign="center" p={10}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      bg={bgColor}
    >
    <Heading color={textColor} size="xl">
      <ShinyText text="Besoin d’un œil expert sur votre code ou vos choix IA ?" speed={2} className='custom-class' />
    </Heading>
    <Text fontSize="xl" color={textColor} mt={3}>
      Discutons de vos besoins, vos contraintes et des solutions concrètes que je peux apporter.
    </Text>
      <RouterLink  to="/contact">
      <MotionButton  colorScheme="primary" size="lg" mt={6} whileHover={{ scale: 1.05 }}>
      {/* <StarBorder as={Link} to="/contact" colorScheme="primary" size="lg" mt={6} whileHover={{ scale: 1.05 }}> */}
        Parler de mon projet
        {/* </StarBorder> */}
        </MotionButton>
        </RouterLink>
    </MotionBox>
  );
}

export default CTA2;

