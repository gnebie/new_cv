import { Box, Heading, Text, VStack, HStack, Tag, useColorModeValue, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Animation des blocs d'expérience
const MotionBox = motion(Box);

// Liste des expériences (modifiable facilement)
const EXPERIENCES = [
  {
    role: "Développeur Backend Python & IA",
    company: "Freelance",
    date: "2022 - Aujourd'hui",
    description: "Développement d'APIs performantes et intégration d'intelligence artificielle pour l'automatisation des processus métiers.",
    techs: ["FastAPI", "Flask", "PostgreSQL", "Docker", "Kubernetes", "TensorFlow", "OpenAI"],
  },
  {
    role: "Ingénieur Backend & Data",
    company: "Qarnot Computing",
    date: "2019 - 2021",
    description: "Conception et optimisation d'un SDK open-source pour le calcul distribué sur CPU/GPU dans le cloud.",
    techs: ["Python", "FastAPI", "MongoDB", "C#", "Kubernetes"],
  },
  {
    role: "Développeur IA & Data Engineer",
    company: "Harman / Samsung",
    date: "2019",
    description: "Création de pipelines de data engineering et implémentation d'algorithmes de Machine Learning pour l'analyse audio.",
    techs: ["Python", "Pandas", "TensorFlow", "PostgreSQL"],
  },
  {
    role: "Développeur API & Data",
    company: "LCH (London Clearing House)",
    date: "2021 - 2024",
    description: "Développement d'APIs bancaires pour l'extraction et la validation de données financières complexes.",
    techs: ["Spring Boot", "PostgreSQL", "Docker", "Java"],
  },
];

function Experience() {
  const bgColor = useColorModeValue("surface.light.200", "surface.dark.200");
  const cardColor = useColorModeValue("white", "surface.dark.100");
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const accentColor = useColorModeValue("primary.500", "secondary.500");

  return (
    <Box bg={bgColor} p={8}>
      <VStack spacing={12} align="stretch">
        {/* Titre */}
        <Heading color={textColor} size="xl" textAlign="center">
          💼 Mon Expérience
        </Heading>

        {/* Timeline des expériences */}
        {EXPERIENCES.map((exp, index) => (
          <MotionBox
            key={index}
            bg={cardColor}
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <HStack justify="space-between">
              <Heading size="md" color={accentColor}>
                {exp.role}
              </Heading>
              <Text fontSize="sm" color={textColor}>
                {exp.date}
              </Text>
            </HStack>
            <Text fontSize="lg" fontWeight="bold" color={textColor} mt={1}>
              {exp.company}
            </Text>
            <Text fontSize="md" color={textColor} mt={3}>
              {exp.description}
            </Text>

            {/* Technologies utilisées */}
            <HStack spacing={3} wrap="wrap" mt={4}>
              {exp.techs.map((tech) => (
                <Tag key={tech} size="lg" variant="subtle" colorScheme="blue">
                  {tech}
                </Tag>
              ))}
            </HStack>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
}

export default Experience;
