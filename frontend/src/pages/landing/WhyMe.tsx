import { Box, Heading, Text, VStack, HStack, Icon, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUserTie } from 'react-icons/fa';
import SplitText from '../../components/react-bits/SplitText'
import DecryptedText from '../../components/react-bits/DecryptedText';

const MotionBox = motion(Box);

function WhyMe() {
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const accentColor = useColorModeValue("primary.500", "secondary.500");

  return (
    <MotionBox p={6}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Heading color={textColor} size="xl" textAlign="center">
        💡 
        <SplitText
      text="Pourquoi choisir mon expertise ?"
      className="text-2xl font-semibold text-center"
      delay={150}
      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
      easing="easeOutCubic"
      threshold={0.2}
      rootMargin="-50px"
      />

      </Heading>
      <VStack spacing={6} mt={6} align="start">
        <HStack>
          <Icon as={FaCode} color={accentColor} />
          <Text fontSize="lg" color={textColor}>
          <DecryptedText
text="**Expert en Backend & API** → Développement de **microservices performants**."
speed={100}
animateOn="view"
maxIterations={10}
revealDirection="start"
sequential={true}
/>
            
          </Text>
        </HStack>
        <HStack>
          <Icon as={FaRocket} color={accentColor} />
          <Text fontSize="lg" color={textColor}>
          <DecryptedText
text="**Scalabilité et Performance** → Optimisation des **API & architecture serveur**."
speed={100}
animateOn="view"
maxIterations={10}
revealDirection="start"
sequential={true}
/>

            
          </Text>
        </HStack>
        <HStack>
          <Icon as={FaUserTie} color={accentColor} />
          <Text fontSize="lg" color={textColor}>
          <DecryptedText
text="**Accompagnement sur mesure** → Stratégie technique et automatisation IA."
speed={100}
animateOn="view"
maxIterations={10}
revealDirection="start"
sequential={true}
/>
            
          </Text>
        </HStack>
      </VStack>
    </MotionBox>
  );
}

export default WhyMe;
