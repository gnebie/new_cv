import { Box, Heading, VStack, Progress, Text } from '@chakra-ui/react';

function SkillsSection() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "FastAPI / Flask", level: 85 },
    { name: "Docker / CI-CD", level: 70 },
    { name: "n8n (Automatisation)", level: 80 },
    { name: "Intégration IA (ChatGPT, TensorFlow)", level: 65 }
  ];

  return (
    <Box padding="4rem" bg="gray.50">
      <Heading mb={6}>Compétences Techniques</Heading>
      <VStack spacing={4} align="start">
        {skills.map((skill, index) => (
          <Box key={index} width="100%">
            <Text fontSize="lg" mb={2}>{skill.name}</Text>
            <Progress value={skill.level} size="lg" colorScheme="teal" />
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default SkillsSection;
