import { Box, Heading, Text, VStack, HStack, Icon, useColorModeValue, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUserTie } from 'react-icons/fa';

const MotionBox = motion(Box);

// Définition des cartes
const FEATURES = [
    {
    title: "🔧 Backend & API sur-mesure",
    description_produit: "Des APIs fiables, scalables, prêtes à encaisser la montée en charge. Je construis des services backend clairs, modulaires, et documentés pour vous permettre d'avancer sereinement.",
    description_technique: "Backend Python (FastAPI), tests, CI/CD, auth, docs Swagger, SOLID. Code lisible, modulaire, testé, pensé pour être maintenu à plusieurs.",
    icon: FaCode,
    image: "/code-944499_1280.jpg",
  },
  {
    title: "🚀 Intégration d'outils IA",
    description_produit: "Vous voulez ajouter de l’intelligence dans vos outils ? Tester rapidement un MVP ? Je vous aide à intégrer des briques IA utiles (génération de texte, agents, automatisation) pour rendre votre produit plus efficace et plus différenciant.",
    description_technique: "LLMs, modèles préentraînés : équipe CrewAI, agents LangChain, RAG, embeddings, orchestrés dans une architecture maîtrisée.",
    icon: FaRocket,
    image: "/blockchain-3537389_1280.jpg",
  },
  {
  title: "🤝 Accompagnement IA & Vision Produit",
  description_produit: 
    "Besoin d'aide pour prendre les bonnes décisions IA? \
    Je peux vous aider a évaluer les usages pertinents, \
    structurer une roadmap IA réaliste, et accompagner la montée en compétence des equipes.",
    
  description_technique: 
      "J’dentifie les cas d’usage utiles, \
      conseil sur l’intégration (outils, modèle, stack). \
      J’accompagne aussi vos équipes dans la montée en compétence, via des formations internes \
      pour qu’elles puissent rester autonomes et prendre des décisions éclairées.",
  
    
  icon: FaUserTie,
  image: "/code-8779047_1280.jpg",
}
];

function WhyMe() {
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const accentColor = useColorModeValue("primary.500", "secondary.500");
  const bgColor = useColorModeValue("gray.100", "gray.900"); // Fond de la section
  const bgCartColor = useColorModeValue("rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)"); // Effet Glassmorphism
  const borderCartColor = useColorModeValue("rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0.1)");

  return (
    <Box bg={bgColor} py={20} px={8} position="relative">
      <Heading color={textColor} size="xl" textAlign="center" mb={12}>
        💡 Pourquoi travailler avec moi ?
      </Heading>

      <HStack
        spacing={8}
        justify="center"
        align="stretch"
        wrap="wrap"
      >
        {FEATURES.map((feature, index) => (
          <MotionBox
            key={index}
            position="relative"
            p={8}
            borderRadius="20px"
            boxShadow="lg"
            width={{ base: "100%", md: "30%" }}
            border="1px solid"
            borderColor={borderCartColor}
            bg={bgCartColor}
            backdropFilter="blur(10px)"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            overflow="hidden"
          >
            {/* Effet image de fond semi-transparent */}
            <Image
              src={feature.image}
              alt={feature.title}
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              objectFit="cover"
              opacity="0.2"
              zIndex="-1"
            />

            <VStack spacing={4} align="center">
              <Icon as={feature.icon} boxSize={10} color={accentColor} />
              <Heading size="md" color={accentColor} textAlign="center">
                {feature.title}
              </Heading>
              <Text fontSize="md" textAlign="center" color={textColor}>
                {feature.description_produit}
              </Text>
              <Text fontSize="md" textAlign="center" color={textColor}>
                {feature.description_technique}
              </Text>
            </VStack>

            {/* Effet lumineux au hover */}
            <Box
              position="absolute"
              top="-50px"
              left="-50px"
              width="200px"
              height="200px"
              bg={accentColor}
              opacity="0.15"
              filter="blur(80px)"
              transition="all 0.5s ease-in-out"
              _hover={{
                opacity: "0.3",
                transform: "scale(1.2)",
              }}
            />
          </MotionBox>
        ))}
      </HStack>
    </Box>
  );
}

export default WhyMe;
