import { Box, Center, Heading, Text, VStack, HStack, Button, useColorModeValue } from '@chakra-ui/react';
import { FaCode, FaRocket, FaRobot, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FallingText from '../components/react-bits/FallingText';
import InfiniteScroll from '../components/react-bits/InfiniteScroll';
import SplitText from '../components/react-bits/SplitText';
import DecryptedText from '../components/react-bits/DecryptedText';
import Threads from '../components/react-bits/Threads';
import WhatCanIDo from './services/whatcanido';
import BreakBack from './services/BreakBack';

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
    const bgColor = useColorModeValue("surface.light.100", "surface.dark.100");
  const threadColor1 = useColorModeValue("primary.100", "secondary.100");
  const threadColor2 = useColorModeValue("primary.500", "secondary.500");
  const threadColor3 = useColorModeValue("primary.900", "secondary.900");
  const items = SERVICES.map((service) => ( { content: service.title}))//[

  return (
    <Box bg={bgColor}>
<Box zIndex={1} width="100%"  position='relative'>
<Box zIndex={1} width= '100%' height= '80vh' position= 'fixed' top="50px">

<Threads
  amplitude={5}
  distance={0}
  enableMouseInteraction={true}
  color={[threadColor1,threadColor2,threadColor3]}
/>

</Box>
</Box>

    <Box p={8} >

      <VStack spacing={12} align="stretch">
        <WhatCanIDo />
        <BreakBack />

        <Box style={{height: '500px', position: 'relative'}} zIndex={2} bg={bgColor}>
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
    </Box>
  );
}

export default Services;
