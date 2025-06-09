import { Box, Center, Heading, Text, VStack, HStack, Button, useColorModeValue } from '@chakra-ui/react';
import { FaCode, FaRocket, FaRobot, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FallingText from '../../components/react-bits/FallingText';

const MotionBox = motion(Box);



function BreakBack() {
    const bgColor = useColorModeValue("surface.light.100", "surface.dark.100");
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");

  return (
        <Box  bg={bgColor} zIndex={2} position="sticky">
        <Center>
        <Text fontSize="2xl" color={textColor}>
        Un backend optimisé, c'est l’assurance d’un service fiable et scalable dès le premier jour.
        </Text>
        </Center>
        <Box height="300px">
        <FallingText
        text={`Ne créez pas des services a base de code de mauvaise qualite qui se briseront au premier utilisateur testant votre service.`}
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
        />
        </Box>
        </Box>
  
  );
}

export default BreakBack;
