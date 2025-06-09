import { Box, Heading, Text, VStack, HStack, Image, Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

// Liste des projets
const PROJECTS = [
  {
    name: "FairyTale Stories",
    description: "Web-app interactive permettant de générer des histoires personnalisées en temps réel avec IA.",
    techs: ["FastAPI", "React", "Stable Diffusion", "PostgreSQL", "Kubernetes"],
    image: "/fairytale_stories_site.png", 
    github: "https://github.com/gnebie/fairytale-stories",
    site: "https://fairytale-stories.nebie.fr/",
  },
  {
    name: "Pretty souls Instagram",
    description: "Echantillon d'image generees pr moi meme utilisant differents themes .",
    techs: ["Stable Diffusion", ],
    image: "/instagram_prettysouls.png", 
    // github: "https://github.com/gnebie/fairytale-stories",
    site: "https://www.instagram.com/pretty.soul.2042/",
  },
  {
    name: "N8n Conversational agent",
    description: "Creation d'agent conversationels locaux et personnalisables pour les documents internes.",
    techs: ["n8n","IA Agent", "IA Integration", "Chatgpt", "LowCode" ],
    image: "/n8n_agent.png", 
    // github: "https://github.com/gnebie/fairytale-stories",
    // site: "https://www.instagram.com/pretty.soul.2042/",
  },
  {
    name: "Python CLI",
    description: "Python CLi to easly connect to an api.",
    techs: ["bash", "python", "CLI", "docker",  ],
    image: "/cli_auto.png", 
    github: "https://github.com/gnebie/stable_diffusion_1111_sdk",
    // site: "https://www.instagram.com/pretty.soul.2042/",
  },
  {
    name: "Web inseptions",
    description: "This website.",
    techs: ["React", "Typescript", "docker", "docker-compose",  ],
    image: "/this_website.png", 
    github: "https://github.com/gnebie/new_cv",
    // site: "https://www.instagram.com/pretty.soul.2042/",
  },
  //
//   {
//     name: "SDK de calcul distribué",
//     description: "Développement d'un SDK open-source pour gérer du calcul distribué sur CPU/GPU.",
//     techs: ["Python", "FastAPI", "C#", "Docker", "Kubernetes"],
//     image: "/images/qarnot_sdk.png",
//     github: "https://github.com/gnebie/qarnot-sdk",
//   },
//   {
//     name: "API de gestion d'utilisateurs",
//     description: "API REST robuste avec gestion avancée des utilisateurs et authentification JWT.",
//     techs: ["Django", "PostgreSQL", "Redis", "CI/CD"],
//     image: "/images/user_management.png",
//     github: "https://github.com/gnebie/user-management-api",
//   },
];

function MyPortfolio() {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const cardColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("blue.500", "cyan.400");
  const particuleColor1 = useColorModeValue("primary.100", "#FFFFFF");
  const particuleColor2 = useColorModeValue("secondary.100", "#FFFFFF");

  return (
        <HStack spacing={6} wrap="wrap" justify="center">
          {PROJECTS.map((project, index) => (
            <MotionBox
              key={index}
              bg={cardColor}
              p={6}
              zIndex={2} position="sticky"

              borderRadius="lg"
              boxShadow="lg"
              width={{ base: "100%", md: "45%", lg: "30%" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={project.image} alt={project.name} borderRadius="md" mb={4} />
              <Heading size="md" color={accentColor} mb={2}>
                {project.name}
              </Heading>
              <Text fontSize="md" color={textColor} mb={3}>
                {project.description}
              </Text>

              {/* Technologies utilisées */}
              <HStack spacing={2} wrap="wrap" mb={4}>
                {project.techs.map((tech) => (
                  <Button key={tech} size="sm" variant="outline" colorScheme="blue">
                    {tech}
                  </Button>
                ))}
              </HStack>

              {/* Liens GitHub et Démo */}
              <HStack spacing={4}>
              {project.github && (
                <Button as="a" href={project.github} target="_blank" colorScheme="gray">
                  GitHub
                </Button>)}
                {project.site && (
                  <Button as="a" href={project.site} target="_blank" colorScheme="blue">
                    Voir le site
                  </Button>
                )}
              </HStack>
            </MotionBox>
          ))}
        </HStack>
    );
}

export default MyPortfolio;
