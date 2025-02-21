import { Box, Heading, Text, VStack, HStack, Icon, useColorModeValue, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUserTie } from 'react-icons/fa';

const MotionBox = motion(Box);

// Définition des cartes
const FEATURES = [
  {
    title: "🔧 Backend & API sur-mesure",
    description: "Développement de **microservices performants**, optimisés pour la scalabilité.",
    icon: FaCode,
    image: "/assets/backend.svg",  // Ajoute une image SVG ou PNG ici
  },
  {
    title: "🚀 Scalabilité & Performance",
    description: "Optimisation d'**API rapides et sécurisées**, capables de gérer des milliers d'utilisateurs.",
    icon: FaRocket,
    image: "/assets/scalability.svg",
  },
  {
    title: "🤝 Accompagnement & Stratégie",
    description: "Conseils techniques, architecture et intégration IA **sur-mesure pour votre projet**.",
    icon: FaUserTie,
    image: "/assets/mentoring.svg",
  },
];

function WhyMe() {
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const accentColor = useColorModeValue("primary.500", "secondary.500");
  const bgColor = useColorModeValue("gray.100", "gray.900");  // Fond pour séparer la section

  return (
    <Box bg={bgColor} py={16} px={8}>
      <Heading color={textColor} size="xl" textAlign="center" mb={8}>
        💡 Pourquoi me choisir ?
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
            bg="white"
            p={6}
            borderRadius="lg"
            boxShadow="xl"
            width={{ base: "100%", md: "30%" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <VStack spacing={4} align="center">
              <Image src={feature.image} boxSize="100px" alt={feature.title} />
              <Icon as={feature.icon} boxSize={8} color={accentColor} />
              <Heading size="md" color={accentColor} textAlign="center">
                {feature.title}
              </Heading>
              <Text fontSize="md" textAlign="center" color={textColor}>
                {feature.description}
              </Text>
            </VStack>
          </MotionBox>
        ))}
      </HStack>
    </Box>
  );
}

export default WhyMe;
