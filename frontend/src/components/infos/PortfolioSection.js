import { Box, Heading, SimpleGrid, Text, Button } from '@chakra-ui/react';

function PortfolioSection() {
  const projects = [
    {
      title: "API de gestion d'utilisateurs",
      description: "Développement d'une API REST complète avec FastAPI et PostgreSQL.",
      link: "https://github.com/ton_projet1"
    },
    {
      title: "Chatbot IA intégré",
      description: "Chatbot basé sur OpenAI, automatisant les interactions client.",
      link: "https://github.com/ton_projet2"
    }
  ];

  return (
    <Box padding="4rem" bg="gray.100">
      <Heading mb={6}>Portfolio</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
        {projects.map((project, index) => (
          <Box key={index} bg="white" p={4} borderRadius="md" shadow="md">
            <Heading fontSize="xl">{project.title}</Heading>
            <Text mt={2}>{project.description}</Text>
            <Button mt={4} colorScheme="primary.500" as="a" href={project.link} target="_blank">
              Voir le projet
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default PortfolioSection;
