import { Box, Flex, Heading, Text, VStack, HStack, Button, useColorModeValue, Divider, Tag, Icon } from '@chakra-ui/react';
import { FaCode, FaRobot, FaRocket, FaUserTie, FaCheckCircle } from 'react-icons/fa';
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
        
        {/* 🎯 Accroche & Présentation */}
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
          <Text fontSize="lg" color={textColor} mt={3} textAlign="center">
            Je suis <strong>Guillaume Nebie</strong>, **freelance expert en Backend Python & Intelligence Artificielle**.  
            J’aide les entreprises à **développer des API performantes**, à **intégrer des modèles IA avancés**  
            et à **optimiser leurs infrastructures cloud**.
          </Text>
        </MotionBox>

        {/* 📜 Mon parcours (Storytelling) */}
        <Heading color={textColor} size="lg">
          📜 Mon parcours atypique
        </Heading>
        <MotionBox
          bg={cardColor}
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          width="100%"
        >
          <Text fontSize="md" color={textColor}>
            Tout a commencé loin du code, dans une **cuisine de pâtisserie**. De la rigueur des recettes à la précision  
            des algorithmes, mon parcours m’a appris une chose essentielle : **peu importe le domaine, c’est la qualité  
            qui fait la différence**.  
            Aujourd’hui, j’applique cette même exigence en développement logiciel, où **chaque ligne de code doit être  
            optimisée et maîtrisée**. Après un parcours à l’École **42 (6ᵉ de ma promo)** et 7 ans d’expérience en  
            **finance, machine learning, backend & DevOps**, je suis prêt à relever vos défis techniques les plus ambitieux.
          </Text>
        </MotionBox>

        {/* 🔥 Chiffres clés */}
        <Heading color={textColor} size="lg">
          🔥 Quelques chiffres sur moi
        </Heading>
        <HStack spacing={6} wrap="wrap">
          {[
            "🎓 6ᵉ de ma promo à 42 (2016)",
            "💼 +7 ans d'expérience",
            "🚀 +10 projets en production",
            "🏆 Vainqueur du Corewar Championship 2017",
          ].map((fact, index) => (
            <MotionBox
              key={index}
              bg={cardColor}
              p={4}
              borderRadius="md"
              boxShadow="md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <HStack>
                <Icon as={FaCheckCircle} color={accentColor} />
                <Text fontSize="md" color={textColor}>{fact}</Text>
              </HStack>
            </MotionBox>
          ))}
        </HStack>

        {/* 💡 Pourquoi travailler avec moi ? */}
        <Heading color={textColor} size="lg">
          💡 Pourquoi me faire confiance ?
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
            <RotatingText
              texts={[
                "✅ **Spécialiste Backend & API** - Conception de **microservices** robustes avec **FastAPI, Flask, Django**.",
                "🤖 **Expert en IA** - Intégration de **modèles OpenAI, TensorFlow, NLP et Computer Vision**.",
                "⚡ **Performance & Scalabilité** - Optimisation et mise en production avec **Docker, Kubernetes, CI/CD**.",
                "🛠 **Accompagnement & Conseil** - Audit, formation et stratégie d’optimisation technique.",
              ]}
              rotationInterval={5000}
            />
          </MotionBox>
        </VStack>

        {/* 🔧 Technologies maîtrisées */}
        <Divider />
        <Heading color={textColor} size="lg">
          🔧 Technologies Maîtrisées
        </Heading>
        <HStack spacing={3} wrap="wrap">
          {[
            "Python", "FastAPI", "Flask", "REST API", "Microservices",
            "PostgreSQL", "unix",
            "Docker",  "bash", "OpenAI API",
          ].map((tech) => (
            <Tag key={tech} size="lg" variant="subtle" colorScheme="blue">
              {tech}
            </Tag>
          ))}
        </HStack>

        {/* 🎯 Call-To-Action */}
        <MotionBox
          mt={6}
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          bg={cardColor}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          width="100%"
          textAlign="center"
        >
          <Text fontSize="lg" color={textColor}>
            🚀 **Vous avez un projet ambitieux ?** Discutons-en et voyons comment je peux vous aider !
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
