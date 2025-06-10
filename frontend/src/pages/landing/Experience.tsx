import { Box, Heading, Text, VStack, HStack, Icon, useColorModeValue, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaTrophy, FaRobot, FaShieldAlt, FaServer, FaBrain } from 'react-icons/fa';

const MotionBox = motion(Box);

const ACHIEVEMENTS = [
    {
      title: "🎓 Top performer à 42",
      description: "6ᵉ de ma promotion à l'école 42, avec un parcours intense du niveau 0 au niveau 20 en seulement 2 ans.",
      icon: FaBrain,
      image: "/42.png",
      details: "J’ai remporté le Corewar Championship 2017 (seul projet algorithmique concurenciel avancé de l’école). : low-level assembleur, optimisations extrêmes",
    },
    {
      title: "🚀 Une expertise complète & transversale",
      description: "Développement complet de projets backend/IA, de l’API au déploiement en production. Intégration d’IA générative dans des outils métiers.",
      icon: FaServer,
      image: "/web-1935737_1280.png",
      details: "Ce site est fullstack, fait maison. Il reflète ma maîtrise de bout en bout.",
    },
    {
      // title: "🔐 APIs robustes et maintenables",
        title: "🔧 Spécialisation API & backend",
        description: "Conception de services robustes, documentés, testés. Expertise Python, FastAPI, C#, CI/CD, architecture modulaire.",
        details: "J’aime quand le code est clair, testable, maintenable. Je mets en place des backends qui peuvent être repris par d’autres sans douleur. Et je documente tout.",
        icon: FaTrophy,
      image: "/software-developer-6521720_1280.jpg",
    },
    {

    title: "🤖 Projets concrets en IA",
    description: "Contribution à des projets IA réels : assistants vocaux, génération de texte, agents sur mesure. Utilisation de LangChain, CrewAI, embeddings, et orchestration sur API.",
      icon: FaRobot,
      image: "/d43e8792_altxl_v50_20250221_215449_048419_DPM++ 2M_3.png",
      details: "Samsung Bixby (ASR), agents LangChain, générateurs narratifs… des projets où l’IA a un vrai impact métier."    
    },
    {
    title: "🔒 Rigueur logicielle & sécurité",
    description: "Respect des bonnes pratiques de développement : SOLID, Clean Code, CI/CD, architecture modulaire, sécurité embarquée.",
    details: "Je n’écris pas du code juste pour moi. Je l’écris pour l’équipe, pour ceux qui vont passer derrière, pour que le système tienne la route à long terme.",
      icon: FaShieldAlt,
      image: "/security-1163108_1280.jpg",
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
