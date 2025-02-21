import { Box, Heading, Text, VStack, HStack, Button, useColorModeValue } from '@chakra-ui/react';
import { FaCode, FaRobot, FaCloud, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FallingText from '../components/react-bits/FallingText';
import InfiniteScroll from '../components/react-bits/InfiniteScroll';

const MotionBox = motion(Box);

const SERVICES = [
  {
    title: "Développement Backend sur-mesure",
    description: "Création et optimisation d’APIs robustes et scalables avec FastAPI, Flask et Django.",
    icon: FaCode,
  },
  {
    title: "Automatisation et Intelligence Artificielle",
    description: "Mise en place d’algorithmes et d’IA générative pour automatiser vos processus métier.",
    icon: FaRobot,
  },
  {
    title: "Déploiement et Scalabilité Cloud",
    description: "Optimisation des architectures serveurs avec Docker, Kubernetes et CI/CD.",
    icon: FaCloud,
  },
  {
    title: "Optimisation et Sécurisation des Bases de Données",
    description: "Amélioration des performances et sécurisation des bases PostgreSQL, MongoDB et Redis.",
    icon: FaDatabase,
  },
];

function Services() {
  const bgColor = useColorModeValue("surface.light.200", "surface.dark.200");
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const accentColor = useColorModeValue("primary.500", "secondary.500");
  const items = [
    { content: "Text Item 1" },
    { content: <p>Paragraph Item 2</p> },
    { content: "Text Item 3" },
    { content: <p>Paragraph Item 4</p> },
    { content: "Text Item 5" },
    { content: <p>Paragraph Item 6</p> },
    { content: "Text Item 7" },
    { content: <p>Paragraph Item 8</p> },
    { content: "Text Item 9" },
    { content: <p>Paragraph Item 10</p> },
    { content: "Text Item 11" },
    { content: <p>Paragraph Item 12</p> },
    { content: "Text Item 13" },
    { content: <p>Paragraph Item 14</p> },
  ];

  return (
    <Box bg={bgColor} p={8}>
      <VStack spacing={12} align="stretch">
        <Heading color={textColor} size="xl" textAlign="center">
          🔧 Mes Services
        </Heading>


        {SERVICES.map((service, index) => (
          <MotionBox
            key={index}
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <HStack spacing={4}>
              <service.icon color={accentColor} size="40px" />
              <VStack align="start">
                <Heading size="md" color={textColor}>
                  {service.title}
                </Heading>
                <Text fontSize="md" color={textColor}>
                  {service.description}
                </Text>
              </VStack>
            </HStack>
          </MotionBox>
        ))}

        <Button as={Link} to="/contact" colorScheme="primary" size="lg">
          Demander un devis
        </Button>
        <Box height="150px">
        <FallingText
        text={`Ne créez pas des services a base de code de mauvaise qualite qui se cassera au premier utilisateur qui utilisera votre service.`}
        highlightWords={["React", "Bits", "animated", "components", "simplify"]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
        />
        </Box>
  
        <Box style={{height: '500px', position: 'relative'}}>
        <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection='left'
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="down"
            pauseOnHover={true}
        />
        </Box>
      </VStack>
    </Box>
  );
}

export default Services;
