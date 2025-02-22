import { Box, Heading, Text, VStack, HStack, Icon, useColorModeValue, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaTrophy, FaRobot, FaShieldAlt, FaServer, FaBrain } from 'react-icons/fa';

const MotionBox = motion(Box);

const ACHIEVEMENTS = [
    {
      title: "🎓 Un parcours d'excellence à 42",
      description: "6ᵉ de ma promotion à l'école 42, avec un parcours intense du niveau 0 au niveau 20 en seulement 2 ans.",
      icon: FaBrain,
      image: "/42.png",
      details: "J’ai également remporté le championnat 2017 du seul projet algorithmique avancé de l’école (Corewar Championship), démontrant mes compétences en optimisation et en résolution de problèmes complexes.",
    },
    {
      title: "🚀 Une expertise complète & transversale",
      description: "Expérience réussie en Backend, DevOps, API, Machine Learning et Développement Fullstack.",
      icon: FaServer,
      image: "/web-1935737_1280.png",
      details: "Le site sur lequel vous naviguez est entièrement développé par moi, démontrant ma maîtrise des architectures modernes et des technologies fullstack.",
    },
    {
      title: "🏆 Spécialiste des APIs robustes et performantes",
      description: "Expertise en APIs Python et C#, avec une approche rigoureuse et des standards de qualité élevés.",
      icon: FaTrophy,
      image: "/software-developer-6521720_1280.jpg",
      details: "J'applique les meilleures pratiques : Design Patterns, Frameworks modernes (FastAPI, Flask, ASP.NET Core), tests unitaires, et sécurité avancée.",
    },
    {
      title: "📈 Automatisation et Intelligence Artificielle",
      description: "Développement d'**outils IA** pour optimiser les workflows et automatiser des tâches complexes.",      
      icon: FaRobot,
      image: "/d43e8792_altxl_v50_20250221_215449_048419_DPM++ 2M_3.png",
      details: "J’ai contribué à l'optimisation du modèle de reconnaissance vocale de Samsung Bixby, et je développe des outils de génération IA comme FairyTale Stories."    
    },
    {
      title: "🔍 Un code propre, sécurisé et scalable",
      description: "Maîtrise des principes SOLID, Clean Code, et CI/CD, garantissant des applications maintenables et évolutives.",
      icon: FaShieldAlt,
      image: "/security-1163108_1280.jpg",
      details: "J’implémente des tests automatisés, du chiffrement de données, et une architecture modulaire, assurant des performances optimales et une sécurité renforcée.",
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
