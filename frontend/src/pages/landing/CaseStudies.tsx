import { Box, Heading, Text, VStack, HStack, Tag, useColorModeValue, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

// Liste des cas d'études
const CASE_STUDIES = [
  {
    client: "Startup FinTech - Automatisation KYC",
    problem: "Processus de vérification d'identité manuel, lent et sujet aux erreurs.",
    solution: "Développement d'une API d'automatisation du KYC avec reconnaissance OCR et validation de documents.",
    results: "+70% de gain de temps, réduction des fraudes et intégration fluide avec le CRM.",
    techs: ["FastAPI", "OpenAI API", "AWS Lambda", "PostgreSQL", "OCR"],
  },
  {
    client: "Plateforme IA - Optimisation API",
    problem: "API de Machine Learning trop lente et non scalable.",
    solution: "Optimisation du code, mise en cache intelligente et passage sur Kubernetes.",
    results: "Réduction du temps de réponse de 200ms à 50ms, gestion de 10x plus de requêtes simultanées.",
    techs: ["Python", "TensorFlow", "Redis", "Kubernetes", "Docker"],
  },
  {
    client: "Entreprise e-commerce - Recommandation produit IA",
    problem: "Faible conversion des recommandations produits sur le site.",
    solution: "Implémentation d’un moteur de recommandations basé sur le Machine Learning.",
    results: "+25% de taux de conversion, recommandations dynamiques et personnalisées.",
    techs: ["Flask", "Scikit-learn", "MongoDB", "NLP"],
  },
];

function CaseStudies() {
  const bgColor = useColorModeValue("surface.light.200", "surface.dark.200");
  const cardColor = useColorModeValue("white", "surface.dark.100");
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");
  const accentColor = useColorModeValue("primary.500", "secondary.500");

  return (
    <Box bg={bgColor} p={8}>
      <VStack spacing={12} align="stretch">
        {/* Titre de la section */}
        <Heading color={textColor} size="xl" textAlign="center">
          📊 Études de Cas : Impact Concret
        </Heading>

        {/* Affichage des cas d'études */}
        {CASE_STUDIES.map((caseStudy, index) => (
          <MotionBox
            key={index}
            bg={cardColor}
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Heading size="md" color={accentColor} mb={2}>
              {caseStudy.client}
            </Heading>
            <Text fontSize="md" fontWeight="bold" color={textColor} mt={1}>
              🚨 Problème :
            </Text>
            <Text fontSize="md" color={textColor}>
              {caseStudy.problem}
            </Text>

            <Text fontSize="md" fontWeight="bold" color={textColor} mt={4}>
              🛠️ Solution :
            </Text>
            <Text fontSize="md" color={textColor}>
              {caseStudy.solution}
            </Text>

            <Text fontSize="md" fontWeight="bold" color={textColor} mt={4}>
              📈 Résultats :
            </Text>
            <Text fontSize="md" color={textColor}>
              {caseStudy.results}
            </Text>

            {/* Technologies utilisées */}
            <HStack spacing={3} wrap="wrap" mt={4}>
              {caseStudy.techs.map((tech) => (
                <Tag key={tech} size="lg" variant="subtle" colorScheme="blue">
                  {tech}
                </Tag>
              ))}
            </HStack>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
}

export default CaseStudies;
