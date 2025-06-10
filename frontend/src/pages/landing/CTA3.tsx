import { Box, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from "react-router-dom";
import ShinyText from '../../components/react-bits/ShinyText';
// import StarBorder from '../../components/react-bits/StarBorder';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

function CTA3() {
    const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
    const bgColor = useColorModeValue("surface.light.500", "surface.dark.500");

  return (
    <MotionBox textAlign="center" p={10}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      bg={bgColor}
    >
    <Heading color={textColor} size="xl">
      <ShinyText text="Vous hésitez encore ?" speed={2} className='custom-class' />
    </Heading>
    <Text fontSize="xl" color={textColor} mt={3}>
      Envie de jeter un coup d'oeil sur mes services ?
    </Text>
      <RouterLink  to="/services">
      <MotionButton  colorScheme="primary" size="lg" mt={6} whileHover={{ scale: 1.05 }}>
      {/* <StarBorder as={Link} to="/contact" colorScheme="primary" size="lg" mt={6} whileHover={{ scale: 1.05 }}> */}
        Mes services
        {/* </StarBorder> */}
        </MotionButton>
        </RouterLink>
    </MotionBox>
  );
}

export default CTA3;

