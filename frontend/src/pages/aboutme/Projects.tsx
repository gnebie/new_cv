import { Box, Heading, Text, VStack, HStack, Tag, Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Animation pour les cartes de projet
const MotionBox = motion(Box);

// Liste des projets
const PROJECTS = [
  {
    name: "FairyTale Stories",
    description: "Génération d'histoires interactives basées sur ChatGPT et Stable Diffusion.",
    techs: ["FastAPI", "OpenAI API", "React", "Stable Diffusion", "MongoDB"],
    github: "https://github.com/gnebie/fairytale-stories",
    demo: "https://fairytale-ai-demo.com",
  },
  {
    name: "SDK de calcul distribué",
    description: "Développement d'un SDK pour gérer le calcul distribué sur CPU/GPU avec Qarnot Computing.",
    techs: ["Python", "FastAPI", "C#", "Docker", "Kubernetes"],
    github: "https://github.com/gnebie/qarnot-sdk",
  },
  {
    name: "API de gestion d'utilisateurs",
    description: "Conception et déploiement d'une API REST robuste pour la gestion d'utilisateurs.",
    techs: ["Django", "PostgreSQL", "JWT Auth", "Redis", "CI/CD"],
    github: "https://github.com/gnebie/user-management-api",
  },
  {
    name: "Modèle ASR personnalisé",
    description: "Optimisation d'un modèle de reconnaissance vocale avec TensorFlow et preprocessing avancé.",
    techs: ["Python", "TensorFlow", "Librosa", "Flask"],
    github: "https://github.com/gnebie/asr-model",
  },
];

function Projects() {
  const bgColor = useColorModeValue("surface.light.200", "surface.dark.200");
  const cardColor = useColorModeValue("white", "surface.dark.100");
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const accentColor = useColorModeValue("primary.500", "secondary.500");

  return (
    <Box bg={bgColor} p={8}>
      <VStack spacing={12} align="stretch">
        {/* Titre */}
        <Heading color={textColor} size="xl" textAlign="center">
          🔥 Mes Projets
        </Heading>

        {/* Liste des projets */}
        {PROJECTS.map((project, index) => (
          <MotionBox
            key={index}
            bg={cardColor}
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Heading size="md" color={accentColor} mb={2}>
              {project.name}
            </Heading>
            <Text fontSize="md" color={textColor} mb={3}>
              {project.description}
            </Text>

            {/* Technologies utilisées */}
            <HStack spacing={3} wrap="wrap">
              {project.techs.map((tech) => (
                <Tag key={tech} size="lg" variant="subtle" colorScheme="blue">
                  {tech}
                </Tag>
              ))}
            </HStack>

            {/* Boutons GitHub et Démo */}
            <HStack spacing={4} mt={4}>
              <Button as="a" href={project.github} target="_blank" colorScheme="gray">
                GitHub
              </Button>
              {project.demo && (
                <Button as="a" href={project.demo} target="_blank" colorScheme="primary">
                  Voir la démo
                </Button>
              )}
            </HStack>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
}

export default Projects;
