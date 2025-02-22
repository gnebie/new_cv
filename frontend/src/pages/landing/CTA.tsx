import { Box, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ShinyText from '../../components/react-bits/ShinyText';
// import StarBorder from '../../components/react-bits/StarBorder';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

function CTA() {
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
      <ShinyText text="🔥 Prêt à propulser votre projet ?" disabled={false} speed={2} className='custom-class' />

      </Heading>
      <Text fontSize="xl" color={textColor} mt={3}>
        Contactez-moi dès aujourd'hui pour discuter de votre projet et voir comment je peux vous aider.
      </Text>
      <MotionButton as={Link} to="/contact" colorScheme="primary" size="lg" mt={6} whileHover={{ scale: 1.05 }}>
      {/* <StarBorder as={Link} to="/contact" colorScheme="primary" size="lg" mt={6} whileHover={{ scale: 1.05 }}> */}
        Parler de mon projet
        {/* </StarBorder> */}
        </MotionButton>
    </MotionBox>
  );
}

export default CTA;
