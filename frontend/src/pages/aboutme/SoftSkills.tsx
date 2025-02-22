import { Box, Heading, Text, HStack, Icon, Tag, Divider, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaUsers, FaBrain, FaLightbulb, FaFlag, FaTheaterMasks, FaGamepad, FaGlobe, FaMusic, FaUtensils, FaPlane } from 'react-icons/fa';

const MotionBox = motion(Box);

// 🏆 Soft Skills et Qualités Humaines
const SOFT_SKILLS = [
  { title: "💡 Esprit Analytique", description: "Capacité à résoudre des problèmes complexes rapidement avec une approche méthodique et logique.", icon: FaBrain },
  { title: "🎯 Autonomie & Adaptabilité", description: "Capable de gérer des projets en solo ou en équipe, avec une grande flexibilité.", icon: FaUsers },
  { title: "🚀 Créativité & Innovation", description: "Je trouve toujours des solutions techniques originales et efficaces.", icon: FaLightbulb },
  { title: "🛠️ Persévérance & Résolution", description: "Jamais bloqué, chaque problème a une solution.", icon: FaFlag },
  { title: "🎤 Communication & Partage", description: "Expérience en formation, présentations techniques et mentorat.", icon: FaTheaterMasks },
];

// 🌍 Compétences linguistiques
const LANGUAGES = [
  { name: "Français", level: "Langue maternelle", proficiency: "C2" },
  { name: "Anglais", level: "Compétences professionnelles", proficiency: "C1" },
];

// 🎭 Loisirs et Centres d'intérêt
const HOBBIES = [
  { title: "🎮 Jeu de Go", description: "Classé **3 kyu**, un jeu stratégique qui stimule la réflexion et la patience.", icon: FaGamepad },
  { title: "🎵 Musique & Théâtre", description: "Passionné par les **arts vivants**, j’ai fait du théâtre et j’adore les musiques du monde.", icon: FaMusic },
  { title: "🍳 Cuisine", description: "J’adore **expérimenter** en cuisine, mélanger les influences et découvrir de nouvelles saveurs.", icon: FaUtensils },
  { title: "✈️ Voyages", description: "Chaque voyage est une aventure ! **Découverte culturelle et nouvelles expériences**.", icon: FaPlane },
];

function SoftSkills() {
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const accentColor = useColorModeValue("primary.500", "secondary.500");
  const cardBgColor = useColorModeValue("rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)");
  const borderCartColor = useColorModeValue("rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0.1)");

  return (
    <Box py={20} px={8}>
      {/* 🏆 Soft Skills */}
      <Heading color={textColor} size="xl" textAlign="center" mb={12}>
        🎭 Soft Skills : Mon ADN Professionnel
      </Heading>

      <HStack spacing={6} justify="center" wrap="wrap">
        {SOFT_SKILLS.map((skill, index) => (
          <MotionBox
            key={index}
            p={6}
            borderRadius="20px"
            boxShadow="lg"
            width={{ base: "100%", md: "30%" }}
            border="1px solid"
            borderColor={borderCartColor}
            bg={cardBgColor}
            backdropFilter="blur(10px)"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            textAlign="center"
          >
            <Icon as={skill.icon} boxSize={10} color={accentColor} mb={2} />
            <Heading size="md" color={accentColor} mb={2}>{skill.title}</Heading>
            <Text fontSize="md" color={textColor}>{skill.description}</Text>
          </MotionBox>
        ))}
      </HStack>

      <Divider my={12} />

      {/* 🌍 Langues */}
      <Heading color={textColor} size="xl" textAlign="center" mb={8}>
        🌍 Langues Parlées
      </Heading>
      <HStack spacing={6} justify="center">
        {LANGUAGES.map((language, index) => (
          <MotionBox
            key={index}
            p={4}
            borderRadius="12px"
            boxShadow="md"
            width={{ base: "100%", md: "25%" }}
            border="1px solid"
            borderColor={borderCartColor}
            bg={cardBgColor}
            backdropFilter="blur(8px)"
            textAlign="center"
          >
            <Icon as={FaGlobe} boxSize={8} color={accentColor} mb={2} />
            <Heading size="md" color={accentColor}>{language.name}</Heading>
            <Text fontSize="lg" color={textColor}>{language.level}</Text>
            <Tag colorScheme="blue" mt={2}>{language.proficiency}</Tag>
          </MotionBox>
        ))}
      </HStack>

      <Divider my={12} />

      {/* 🎭 Loisirs & Intérêts */}
      <Heading color={textColor} size="xl" textAlign="center" mb={8}>
        🎭 Ce qui m’inspire au quotidien
      </Heading>

      <HStack spacing={6} justify="center" wrap="wrap">
        {HOBBIES.map((hobby, index) => (
          <MotionBox
            key={index}
            p={6}
            borderRadius="16px"
            boxShadow="lg"
            width={{ base: "100%", md: "30%" }}
            border="1px solid"
            borderColor={borderCartColor}
            bg={cardBgColor}
            backdropFilter="blur(10px)"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            textAlign="center"
          >
            <Icon as={hobby.icon} boxSize={10} color={accentColor} mb={2} />
            <Heading size="md" color={accentColor} mb={2}>{hobby.title}</Heading>
            <Text fontSize="md" color={textColor}>{hobby.description}</Text>
          </MotionBox>
        ))}
      </HStack>
    </Box>
  );
}

export default SoftSkills;
