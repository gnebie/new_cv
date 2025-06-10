import { Box, Heading, Text, VStack, HStack, Icon, useColorModeValue, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCogs, FaProjectDiagram, FaCode } from 'react-icons/fa';

const MotionBox = motion(Box);

const MISSIONS = [
  {
    title: "🚀 Livrer un MVP IA en 15 jours",
    tagline: "Tester une idée rapidement, avec une base propre.",
    description: "Conception et livraison d’un MVP fonctionnel intégrant de l’IA (texte, image ou agents), pour valider une hypothèse, montrer une démo ou démarcher des investisseurs.",
    client: "Startups early-stage, solo-founders, incubateurs",
    valeur: "Un produit crédible, qui tourne, avec une IA utile et pas gadget. Code propre, structuré, réutilisable. De quoi tester sans jeter.",
    duration: "10–15 jours",
    icon: FaProjectDiagram,
    image: "/code-944499_1280.jpg",
  },
  {
    title: "🧱 Stabiliser un backend existant",
    tagline: "Reprendre sans tout casser. Repartir sur des bases solides.",
    description: "Audit et refonte progressive d’un backend instable ou mal structuré. Nettoyage, refacto modulaire, tests, CI/CD, docs. Pas besoin de tout réécrire.",
    client: "PME avec dette technique, équipes produit débordées",
    valeur: "Un backend plus fiable, compréhensible par d’autres devs, facile à maintenir. Moins de bugs, plus de sérénité en prod.",
    duration: "7–20 jours selon taille",
    icon: FaCode,
    image: "/backend_refacto.jpg",
  },
  {
    title: "⚙️ Clarifier une roadmap IA & former vos équipes",
    tagline: "Moins d’incertitude. Plus d’impact réel.",
    description: "Audit tech et produit pour identifier les cas d’usage IA qui valent le coup. Recommandations d’outils/modèles réalistes. Formations internes pour rendre vos équipes autonomes.",
    client: "CTO, CEO non-tech, DSI, scale-ups",
    valeur: "Une vision claire, des choix techniques alignés, et des équipes capables de comprendre et de piloter l’IA en interne.",
    duration: "3 à 5 jours + accompagnement à la demande",
    icon: FaCogs,
    image: "/code-8779047_1280.jpg",
  },
];

function Missions() {
const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
const accentColor = useColorModeValue("primary.600", "secondary.400"); // Changement très léger pour une nuance différente
const bgColor = useColorModeValue("gray.50", "gray.800"); // Plus clair ou plus profond pour distinguer légèrement la section
const bgCartColor = useColorModeValue("rgba(255, 255, 255, 0.15)", "rgba(255, 255, 255, 0.08)"); // Moins de contraste que dans la section précédente
const borderCartColor = useColorModeValue("rgba(0, 0, 0, 0.05)", "rgba(255, 255, 255, 0.05)"); // Ton plus doux pour la bordure, moins intrusif


  return (
    <Box bg={bgColor} py={20} px={8} position="relative">
      <Heading color={textColor} size="xl" textAlign="center" mb={12}>
        📌 Missions typiques que je propose
      </Heading>

      <HStack spacing={8} justify="center" align="stretch" wrap="wrap">
        {MISSIONS.map((mission, index) => (
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
            {/* Background image */}
            <Image
              src={mission.image}
              alt={mission.title}
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
              <Icon as={mission.icon} boxSize={10} color={accentColor} />
              <Heading size="md" color={accentColor} textAlign="center">
                {mission.title}
              </Heading>
              
              <Text fontSize="sm" fontStyle="italic" color={accentColor} opacity="0.9" textAlign="center">
  {mission.tagline}
</Text>
              <Text fontSize="md" color={textColor} textAlign="center" mt={2}>
              {mission.description}
            </Text>

              <Text fontSize="sm" fontStyle="italic" color={textColor} opacity="0.8" textAlign="center">
                  Client type : {mission.client}
              </Text>
              <Text fontSize="sm" mt={2} color={textColor} fontWeight="medium" textAlign="center">
                {mission.valeur}
              </Text>
              <Text fontSize="sm" fontStyle="italic" color={textColor} opacity="0.8" textAlign="center">
                Durée estimée : {mission.duration}
              </Text>
            </VStack>

            {/* Glow hover effect */}
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

export default Missions;
