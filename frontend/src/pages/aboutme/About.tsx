import { Box, Flex, Heading, Text, VStack, HStack, Button, useColorModeValue, Divider, Tag } from '@chakra-ui/react';
import { FaCode, FaRobot, FaRocket, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RotatingText from '../../components/react-bits/RotatingText';

// Animation avec Framer Motion
const MotionBox = motion(Box);

function About() {
  const bgColor = useColorModeValue("surface.light.200", "surface.dark.200");
  const cardColor = useColorModeValue("white", "surface.dark.100");
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const accentColor = useColorModeValue("primary.500", "secondary.500");

  return (
    <MotionBox
      bg={bgColor}
      p={8}
      borderRadius="lg"
      boxShadow="xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      mx="auto"
      mt={10}
    >
      <VStack spacing={8} align="start">
        {/* Header avec Effet 3D */}
        <MotionBox
          bg={cardColor}
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          width="100%"
        >
          <Heading color={textColor} size="xl" textAlign="center">
            🚀 Qui suis-je ?
          </Heading>
          <Flex>
          <Text fontSize="lg" color={textColor} textAlign="center" mt={3}>
            Je suis <strong>Guillaume Nebie</strong>, **freelance expert en Backend Python & Intelligence Artificielle**.  
            Je conçois des **API robustes**, intègre des **modèles IA avancés** et optimise les **systèmes distribués** 
          </Text>

          </Flex>

        </MotionBox>
        <Text>
        Moi en quelques chiffres:
        6 eme de ma promo de 42 de 2016
        7 ans de code dans des environnements aussi diverse que la finance, le ML, le backend et le devops
        </Text>

        {/* Section Valeur Ajoutée */}
        <Heading color={textColor} size="lg">
          💡 Pourquoi travailler avec moi ?
        </Heading>
        <VStack align="start" spacing={5} width="100%">
          <MotionBox
            bg={cardColor}
            p={4}
            borderRadius="md"
            boxShadow="md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            width="100%"
          >
            <HStack>
              <FaUserTie color={accentColor} />
              <FaCode color={accentColor} />
              <Text fontSize="lg" color={textColor}>
                
                <RotatingText
  texts={[' **Spécialiste Backend & API** - Conception de **microservices** robustes avec **FastAPI, Flask, Django**.', ' **Expertise en IA** - Développement et intégration de modèles **OpenAI, TensorFlow, NLP et Computer Vision**.', ' **Performance & Scalabilité** - Optimisation et mise en production avec **Docker, Kubernetes, CI/CD**.', ' **Accompagnement & Conseil** - Audit, formation et stratégie d’optimisation technique.', 'Formation aux derniers outils de machine learning.']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%", opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: "-120%", opacity: 0 }}
  staggerDuration={0.025}
  animatePresenceMode="wait"
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={6000}
/>

              </Text>
              <FaRobot color={accentColor} />
              <FaRocket color={accentColor} />
            </HStack>
          </MotionBox>


        </VStack>

        {/* Section Technologies maîtrisées */}
        <Divider />
        <Heading color={textColor} size="lg">
          🔧 Technologies Maîtrisées
        </Heading>
        <HStack spacing={3} wrap="wrap">
          {["Python", "FastAPI", "Flask", "Django", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "TensorFlow", "PyTorch"].map((tech) => (
            <Tag key={tech} size="lg" variant="subtle" colorScheme="blue">
              {tech}
            </Tag>
          ))}
        </HStack>

        {/* CTA avec Animation */}
        <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Text fontSize="lg" color={textColor}>
            **Vous cherchez un expert en Backend Python & IA ?** Parlons-en !
          </Text>
          <Button as={Link} to="/contact" colorScheme="primary" size="lg" mt={3}>
            Me Contacter
          </Button>
        </MotionBox>
      </VStack>
    </MotionBox>
  );
}

export default About;
