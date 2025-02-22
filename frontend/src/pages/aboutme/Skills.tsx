import { Box, Heading, VStack, HStack, Tag, useColorModeValue, Progress, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Animation pour les sections de compétences
const MotionBox = motion(Box);

// Liste des compétences par catégories
const SKILLS = [
    {
      category: "Backend",
      technologies: ["Python", "FastAPI", "Flask", "Django (Notions)", "REST API", "Microservices"],
    },
    {
      category: "Intelligence Artificielle",
      technologies: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "NLP", "Computer Vision"],
    },
    {
      category: "DevOps & Cloud",
      technologies: ["Docker", "Kubernetes", "CI/CD", "Linux", "Bash", "Automatisation"],
    },
    {
      category: "Bases de Données",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "SQLite"],
    },
    {
      category: "Soft Skills",
      technologies: ["Gestion de projet", "Lead technique", "Travail en équipe", "Résolution de problèmes"],
    },
  ];
  
  // Liste des compétences avancées avec progression
  const ADVANCED_SKILLS = [
    { skill: "Optimisation Backend", level: 90 },
    { skill: "Scalabilité & Haute Disponibilité", level: 85 },
    { skill: "Automatisation IA", level: 80 },
    { skill: "Sécurité API", level: 75 },
  ];
  

function Skills() {
  const bgColor = useColorModeValue("surface.light.200", "surface.dark.200");
  const cardColor = useColorModeValue("white", "surface.dark.100");
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const accentColor = useColorModeValue("primary.500", "secondary.500");

  return (
    <Box bg={bgColor} p={8}>
      <VStack spacing={12} align="stretch">
        {/* Titre */}
        <Heading color={textColor} size="xl" textAlign="center">
          🚀 Mes Compétences
        </Heading>

        {/* Affichage des compétences par catégorie */}
        {SKILLS.map((section, index) => (
          <MotionBox
            key={index}
            bg={cardColor}
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Heading size="md" color={accentColor} mb={3}>
              {section.category}
            </Heading>
            <HStack spacing={3} wrap="wrap">
              {section.technologies.map((tech) => (
                <Tag key={tech} size="lg" variant="subtle" colorScheme="blue">
                  {tech}
                </Tag>
              ))}
            </HStack>
          </MotionBox>
        ))}

        {/* Section compétences avancées avec progression */}
        <Divider />
        <Heading color={textColor} size="lg">
          📈 Compétences Avancées
        </Heading>
        <VStack spacing={4} align="start">
          {ADVANCED_SKILLS.map((skill) => (
            <MotionBox
              key={skill.skill}
              bg={cardColor}
              p={4}
              borderRadius="md"
              boxShadow="md"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              width="100%"
            >
              <HStack justify="space-between">
                <Heading size="sm" color={accentColor}>
                  {skill.skill}
                </Heading>
                <Heading size="sm" color={textColor}>
                  {skill.level}%
                </Heading>
              </HStack>
              <Progress colorScheme="blue" size="lg" value={skill.level} mt={2} />
            </MotionBox>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}

export default Skills;
