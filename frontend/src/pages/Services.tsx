import { Box, Center, Heading, Text, VStack, HStack, Button, useColorModeValue } from '@chakra-ui/react';
import { FaCode, FaRocket, FaRobot, FaCloud, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FallingText from '../components/react-bits/FallingText';
import InfiniteScroll from '../components/react-bits/InfiniteScroll';
import SplitText from '../components/react-bits/SplitText';
import DecryptedText from '../components/react-bits/DecryptedText';

const MotionBox = motion(Box);

const SERVICES = [
  {
    title: "Développement Backend sur-mesure",
    description: "API **scalable, robuste et documentée** en FastAPI, Flask ou Django. **Réduction des temps de réponse jusqu'à 5x** et intégration rapide avec vos outils existants.",    icon: FaCode,
    details: "Je crée des architectures robustes et testées, avec une gestion avancée des performances (mise en cache, async, load balancing).",
  },
  {
    title: "Automatisation et Intelligence Artificielle",
    description: "Automatisez vos tâches avec **l’IA générative et des workflows optimisés**. De l’analyse de données aux assistants virtuels, gagnez en **efficacité et précision**.",    icon: FaRobot,
    details: "Développement d’outils IA personnalisés (analyse de données, NLP, OCR, prédictions) pour optimiser vos workflows et réduire vos coûts.",
  },

  {
    title: "Déploiement et Scalabilité Cloud",
    description: "Passez à **l’échelle sans downtime** grâce à **Docker, Kubernetes et CI/CD**. Optimisation des coûts cloud et **accélération du déploiement**.",    
    icon: FaCloud,
    details: "Mise en place d’environnements scalables et automatisés, optimisant les coûts et la sécurité de vos infrastructures.",
  },
  {
    title: "⚡ Accélération et refonte de code legacy",
    description: "Réécriture et optimisation de code pour **booster les performances et la maintenabilité de vos applications**.",
    icon: FaRocket,
    details: "J’améliore la qualité du code en respectant les standards SOLID, TDD et en adoptant des patterns modernes.",
  },
];

function Services() {
  const bgColor = useColorModeValue("surface.light.200", "surface.dark.200");
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const accentColor = useColorModeValue("primary.500", "secondary.500");
  const items = SERVICES.map((service) => ( { content: service.title}))//[
//     { content: "Text Item 1" },
//     { content: <p>Paragraph Item 2</p> },
//     { content: "Text Item 3" },
//     { content: <p>Paragraph Item 4</p> },
//     { content: "Text Item 5" },
//     { content: <p>Paragraph Item 6</p> },
//     { content: "Text Item 7" },
//     { content: <p>Paragraph Item 8</p> },
//     { content: "Text Item 9" },
//     { content: <p>Paragraph Item 10</p> },
//     { content: "Text Item 11" },
//     { content: <p>Paragraph Item 12</p> },
//     { content: "Text Item 13" },
//     { content: <p>Paragraph Item 14</p> },
//   ];

  return (
    <Box bg={bgColor} p={8}>
      <VStack spacing={12} align="stretch">
        <Heading color={textColor} size="xl" textAlign="center">
          🔧 En quoi puis je vous aider ?
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
                        <SplitText
      text={service.title}
      className="text-2xl font-semibold text-center"
      delay={150}
      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
      easing="easeOutCubic"
      threshold={0.2}
      rootMargin="-50px"
      />

                  
                </Heading>
                <Text fontSize="md" color={textColor}>

                          <DecryptedText
text={service.description}
speed={100}
animateOn="view"
maxIterations={10}
revealDirection="start"
sequential={true}
/>

                  
                </Text>
              </VStack>
            </HStack>
          </MotionBox>
        ))}

        <Button as={Link} to="/contact" colorScheme="primary" size="lg">
        🚀 Besoin de mon aide ? Échangeons sur votre projet !
                </Button>
        <Box height="150px">
            <Center>
        <Text fontSize="2xl" color={textColor}>
        Un backend optimisé, c'est l’assurance d’un service fiable et scalable dès le premier jour.
        </Text>
        </Center>
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
