import { Box, Heading, Text, VStack, HStack, Image, Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

// Liste des projets
const PROJECTS = [
  {
    name: "FairyTale Stories",
    description: "Web-app interactive permettant de générer des histoires personnalisées en temps réel avec IA.",
    techs: ["FastAPI", "React", "Stable Diffusion", "PostgreSQL", "Kubernetes"],
    image: "/images/fairytale_stories.png",  // Image illustrative
    github: "https://github.com/gnebie/fairytale-stories",
    demo: "https://fairytale-ai-demo.com",
  },
  {
    name: "SDK de calcul distribué",
    description: "Développement d'un SDK open-source pour gérer du calcul distribué sur CPU/GPU.",
    techs: ["Python", "FastAPI", "C#", "Docker", "Kubernetes"],
    image: "/images/qarnot_sdk.png",
    github: "https://github.com/gnebie/qarnot-sdk",
  },
  {
    name: "API de gestion d'utilisateurs",
    description: "API REST robuste avec gestion avancée des utilisateurs et authentification JWT.",
    techs: ["Django", "PostgreSQL", "Redis", "CI/CD"],
    image: "/images/user_management.png",
    github: "https://github.com/gnebie/user-management-api",
  },
  {
    name: "Modèle ASR personnalisé",
    description: "Optimisation d'un modèle de reconnaissance vocale avec preprocessing avancé.",
    techs: ["Python", "TensorFlow", "Librosa", "Flask"],
    image: "/images/asr_model.png",
    github: "https://github.com/gnebie/asr-model",
  },
];

function Portfolio() {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const cardColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("blue.500", "cyan.400");

  return (
    <Box bg={bgColor} py={16} px={8}>
      <VStack spacing={12} align="stretch">
        {/* Titre */}
        <Heading color={textColor} size="xl" textAlign="center">
          🎨 Mon Portfolio
        </Heading>

        {/* Liste des projets */}
        <HStack spacing={6} wrap="wrap" justify="center">
          {PROJECTS.map((project, index) => (
            <MotionBox
              key={index}
              bg={cardColor}
              p={6}
              borderRadius="lg"
              boxShadow="lg"
              width={{ base: "100%", md: "45%", lg: "30%" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={project.image} alt={project.name} borderRadius="md" mb={4} />
              <Heading size="md" color={accentColor} mb={2}>
                {project.name}
              </Heading>
              <Text fontSize="md" color={textColor} mb={3}>
                {project.description}
              </Text>

              {/* Technologies utilisées */}
              <HStack spacing={2} wrap="wrap" mb={4}>
                {project.techs.map((tech) => (
                  <Button key={tech} size="sm" variant="outline" colorScheme="blue">
                    {tech}
                  </Button>
                ))}
              </HStack>

              {/* Liens GitHub et Démo */}
              <HStack spacing={4}>
                <Button as="a" href={project.github} target="_blank" colorScheme="gray">
                  GitHub
                </Button>
                {project.demo && (
                  <Button as="a" href={project.demo} target="_blank" colorScheme="blue">
                    Voir la démo
                  </Button>
                )}
              </HStack>
            </MotionBox>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
}

export default Portfolio;
