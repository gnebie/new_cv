import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

function AnimatedButton() {
  return (
    <MotionButton
      colorScheme="primary.500"
      size="lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Cliquez ici
    </MotionButton>
  );
}

export default AnimatedButton;