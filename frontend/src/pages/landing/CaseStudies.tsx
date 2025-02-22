import { Box, Heading, Text, VStack, HStack, Tag, useColorModeValue, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

// Liste des cas d'études
const CASE_STUDIES = [
    {
      client: "LCH - Extraction de Données",
      problem: "Besoin d'une **API robuste** pour extraire automatiquement des **données complexes** depuis de multiples sources.",
      solution: "Développement d'un **module API Spring Boot** optimisé avec une architecture modulaire, et Swagger pour la documentation.",
      results: "Automatisation du processus, meilleure conformité aux régulations financières.",
      techs: ["Spring Boot", "PostgreSQL", "JPA", "Hibernate", "Swagger", "Tests Unitaires"],
    },
    {
      client: "Qarnot Computing - SDK de calcul distribué",
      problem: "Besoin d'un **CLI performant et scalable** pour permettre aux développeurs d'exploiter facilement **la puissance de calcul distribuée sur CPU/GPU**.",
      solution: "Conception et développement d'un **CLI open-source** en C#, permettant une **utilisation simplifiée des ressources de calcul**.",
      results: "Adoption du CLI par plusieurs entreprises, meilleure accessibilité aux ressources de calcul haute performance.",
      techs: ["C#",  "Multithreading", "git", "bash", "Tests Unitaires"],
    },
    {
      client: "Samsung - Reconnaissance vocale pour Bixby",
      problem: "Manque de **données textuelles francophones** pour entraîner les modèles de reconnaissance vocale de Bixby (Samsung).",
      solution: "Mise en place d’un **pipeline complet de data engineering**, incluant **scraping de texte, nettoyage et génération automatique de corpus linguistique**.",
      results: "Augmentation du volume de données francophones disponibles, **amélioration de la précision des modèles NLP**.",
      techs: ["Python", "TensorFlow", "Pandas", "Kaldi", "Unix", "NLP", "Scraping"],
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
