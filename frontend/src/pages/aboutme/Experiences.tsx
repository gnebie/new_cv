import { Box, Heading, Text, VStack, HStack, Tag, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Animation des blocs d'expérience
const MotionBox = motion(Box);

// Liste des expériences (modifiable facilement)
const EXPERIENCES = [
  {
    role: "Développeur Backend Python & IA",
    company: "Projet personnel",
    date: "2022 - Aujourd'hui",
    description: "Développement d’APIs performantes et intégration d’intelligence artificielle pour automatiser les processus métiers. Travail sur des architectures microservices et scalabilité.",
    techs: ["FastAPI", "SQLModel", "React", "Chakra UI", "Redis", "PostgreSQL", "Kubernetes", "Docker", "Stable Diffusion", "ChatGPT", "Stripe"],
  },
  {
    role: "Développeur Backend & API",
    company: "LCH (London Clearing House) - LSEG",
    date: "10/2021 - 01/2024",
    description: "Développement d’une application de validation de données et d’un module API de récupération sous Java. Mise en place d’une architecture modulaire pour l’extension des fonctionnalités.",
    techs: ["Python", "Flask", "Java", "Spring Boot", "Spring Batch", "Hibernate", "JPA", "Swagger", "PostgreSQL", "Angular", "Git"],
  },
  {
    role: "Ingénieur Logiciel",
    company: "Qarnot Computing",
    date: "10/2019 - 10/2021",
    description: "Développement et maintenance des SDK open-source pour le calcul distribué (C#, NodeJS, Python). Création d’un CLI pour l’API de calculs de Qarnot et test de modèles ML sur les machines Qarnot.",
    techs: ["Python", "C#", "NodeJS", "Bash", "Docker", "Linux", "Git", "TensorFlow", "PyTorch"],
  },
  {
    role: "Data Engineer - Machine Learning",
    company: "Harman / Samsung - Bixby2",
    date: "02/2019 - 08/2019",
    description: "Développement d’outils de nettoyage et de génération de corpus de texte. Création d’un modèle ASR personnalisé avec TensorFlow/Kaldi et phonétisation automatique.",
    techs: ["Python", "Pandas", "TensorFlow", "Kaldi", "PostgreSQL", "Unix", "Linux", "Git"],
  },
  {
    role: "Développeur Chatbot & API",
    company: "The Chatbot Factory",
    date: "06/2017 - 12/2017",
    description: "Développement de chatbots intelligents pour divers cas d’usage (FAQ, formation, conseil, jeu) avec des arbres décisionnels non linéaires et NLP.",
    techs: ["NodeJS", "ReactJS", "NLP", "PHP", "Git", "Trello"],
  },
  {
    role: "Étudiant - Développeur Algorithmique",
    company: "École 42",
    date: "2016 - 2018",
    description: "Formation intense en algorithmie et développement bas niveau. Développement de projets en C, création d’un shell POSIX et d’une machine virtuelle Corewar.",
    techs: ["C", "Python", "OCaml", "Rust", "Shell Scripting", "Git", "Unix"],
  }
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
          Mon Expérience
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
