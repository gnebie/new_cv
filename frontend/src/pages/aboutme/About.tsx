import { Box, Heading, Text, VStack, HStack, Button, useColorModeValue, Divider, Tag } from '@chakra-ui/react';
import { FaCode, FaRobot, FaRocket, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
          <Text fontSize="lg" color={textColor} textAlign="center" mt={3}>
            Je suis <strong>Guillaume Nebie</strong>, **freelance expert en Backend Python & Intelligence Artificielle**.  
            Je conçois des **API robustes**, intègre des **modèles IA avancés** et optimise les **systèmes distribués**.
          </Text>
        </MotionBox>

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
              <FaCode color={accentColor} />
              <Text fontSize="lg" color={textColor}>
                **Spécialiste Backend & API** - Conception de **microservices** robustes avec **FastAPI, Flask, Django**.
              </Text>
            </HStack>
          </MotionBox>

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
              <FaRobot color={accentColor} />
              <Text fontSize="lg" color={textColor}>
                **Expertise en IA** - Développement et intégration de modèles **OpenAI, TensorFlow, NLP et Computer Vision**.
              </Text>
            </HStack>
          </MotionBox>

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
              <FaRocket color={accentColor} />
              <Text fontSize="lg" color={textColor}>
                **Performance & Scalabilité** - Optimisation et mise en production avec **Docker, Kubernetes, CI/CD**.
              </Text>
            </HStack>
          </MotionBox>

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
              <Text fontSize="lg" color={textColor}>
                **Accompagnement & Conseil** - Audit, formation et stratégie d’optimisation technique.
              </Text>
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
