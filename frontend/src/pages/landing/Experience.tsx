import { Box, Heading, Text, VStack, HStack, Icon, useColorModeValue, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaTrophy, FaServer, FaBrain } from 'react-icons/fa';

const MotionBox = motion(Box);

// Meilleures réalisations (projets concrets)
const ACHIEVEMENTS = [
  {
    title: "⚡ Optimisation d'API IA",
    description: "Réduction du temps de réponse d’une API de Machine Learning de 200ms à 50ms.",
    icon: FaBrain,
    image: "/ai-performance.jpg",
    details: "Passage à un système de mise en cache avancé et parallélisation des traitements.",
  },
  {
    title: "🚀 Infrastructure Cloud évolutive",
    description: "Mise en place d’un backend scalable capable de gérer 10x plus d’utilisateurs.",
    icon: FaServer,
    image: "/cloud-infra.jpg",
    details: "Déploiement Kubernetes avec auto-scaling et architecture microservices.",
  },
  {
    title: "🏆 Automatisation KYC FinTech",
    description: "Développement d'une API de vérification d’identité automatisée.",
    icon: FaTrophy,
    image: "/kyc-automation.jpg",
    details: "Intégration d’un OCR et d’un système de validation multi-étapes pour conformité.",
  },
];

function TrustMe() {
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const accentColor = useColorModeValue("primary.500", "secondary.500");
  const bgColor = useColorModeValue("gray.100", "gray.900"); // Fond de la section
  const cardBgColor = useColorModeValue("rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)"); // Effet Glassmorphism
  const borderCartColor = useColorModeValue("rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0.1)");

  return (
    <Box bg={bgColor} py={20} px={8} position="relative">
      <Heading color={textColor} size="xl" textAlign="center" mb={12}>
        ⭐ Les raisons de me faire confiance 
      </Heading>

      <HStack spacing={8} justify="center" align="stretch" wrap="wrap">
        {ACHIEVEMENTS.map((achievement, index) => (
          <MotionBox
            key={index}
            position="relative"
            p={8}
            borderRadius="20px"
            boxShadow="lg"
            width={{ base: "100%", md: "30%" }}
            border="1px solid"
            borderColor={borderCartColor}
            bg={cardBgColor}
            backdropFilter="blur(10px)"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            overflow="hidden"
          >
            {/* Image en background semi-transparent */}
            <Image
              src={achievement.image}
              alt={achievement.title}
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
              <Icon as={achievement.icon} boxSize={10} color={accentColor} />
              <Heading size="md" color={accentColor} textAlign="center">
                {achievement.title}
              </Heading>
              <Text fontSize="md" textAlign="center" color={textColor}>
                {achievement.description}
              </Text>
              <Text fontSize="sm" textAlign="center" color={textColor} opacity={0.7}>
                {achievement.details}
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

export default TrustMe;
