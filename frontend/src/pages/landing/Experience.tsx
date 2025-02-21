import { Box, Heading, Text, VStack, HStack, Icon, Divider, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const MotionBox = motion(Box);

function Experience() {
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const accentColor = useColorModeValue("primary.500", "secondary.500");

  return (
    <MotionBox p={6}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Heading color={textColor} size="xl" textAlign="center">
        💼 Expériences & Réalisations
      </Heading>
      <VStack spacing={6} mt={6} align="start">
        <HStack>
          <Icon as={FaCheckCircle} color={accentColor} />
          <Text fontSize="lg" color={textColor}>
            **+5 ans d’expérience** dans le développement **Backend Python & IA**.
          </Text>
        </HStack>
        <HStack>
          <Icon as={FaCheckCircle} color={accentColor} />
          <Text fontSize="lg" color={textColor}>
            **Travail avec des entreprises Tech et FinTech** → Qarnot Computing, LCH, Harman.
          </Text>
        </HStack>
        <HStack>
          <Icon as={FaCheckCircle} color={accentColor} />
          <Text fontSize="lg" color={textColor}>
            **+10 projets en production** → API robustes, calcul distribué, IA.
          </Text>
        </HStack>
      </VStack>
      <Divider mt={6} />
    </MotionBox>
  );
}

export default Experience;
