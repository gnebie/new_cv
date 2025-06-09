import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Wrap,
  WrapItem,
  Image,
  Button,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

// Liste des projets
const PROJECTS = [
  {
    name: "FairyTale Stories",
    description: "Web-app interactive permettant de générer des histoires personnalisées en temps réel avec IA.",
    techs: ["FastAPI", "React", "Stable Diffusion", "PostgreSQL", "Kubernetes"],
    image: "/fairytale_stories_site.png", 
    github: "https://github.com/gnebie/public_fairytale_stories",
    // site: "https://fairytale-stories.nebie.fr/",
    readme: "https://github.com/gnebie/public_fairytale_stories/blob/master/FREELANCE.md",
    video: "https://youtu.be/seC7YNu_CIE",
    status: "Projet mis de coté",
    featured: true,
  },
  {
  name: "Inspiring Daily IA Song Generator",
  description: "Application low-code qui récupère les actus via Google News, résume avec ChatGPT, et propose des chansons inspirantes quotidiens pour les réseaux sociaux.",
  techs: ["n8n", "Google News API", "ChatGPT", "Prompt Engineering", "NoCode"],
  image: "/portfolio/actu_ai_song.png",
//   site: "https://daily-inspiration.nebie.fr/", // si hébergé
  video: "https://youtu.be/daily_inspiration_demo", // optionnel
  github: "https://github.com/gnebie/daily-inspiration-bot", // si tu veux le publier
  readme: "https://github.com/gnebie/daily-inspiration-bot/blob/main/README.md",
  type: "Agent IA / Automatisation",
  status: "Prototype fonctionnel",
  featured: false,
},
{
  name: "AI Music content creator",
  description: "Plateforme full-stack pour générer automatiquement pour des chansons, tout le contenu a destination des reseaux sociaux, illustrées avec IA (texte, images, vidéo, descriptions).",
  techs: ["React", "OpenAI", "FastAPI", "ffmpeg", "Prompt Engineering", "Chakra UI", "TypeScript", "MoviePy", "Celery", "Docker", "Kubernetes"],
  image: "/portfolio/music_content_manager.png",
  github: "https://github.com/gnebie/song_manager", // si dispo
//   site: "https://ai-songwriter.nebie.fr/", // ou lien à définir
  video: "https://youtu.be/TmAMmhg4jGs", // si tu veux faire une démo YouTube ou Loom
//   readme: "https://github.com/gnebie/ai-songwriter/blob/main/README.md",
  type: "Création IA / Musique",
  status: "Produit utilisé en interne",
  featured: true,
},
];



function Section({
  title,
  projects,
  featured = false,
}: {
  title: string
  projects: typeof PROJECTS
  featured?: boolean
}) {
  const gridCols = featured
    ? { base: 1, md: 2 }
    : { base: 1, md: 2, lg: 3 }
  return (
    <Box w="100%">
      <Heading size="lg" mb={6} textAlign="center">
        {title}
      </Heading>
      <SimpleGrid columns={gridCols} spacing={6}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} featured={featured} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

function ProjectCard({
  project,
  featured,
}: {
  project: typeof PROJECTS[0]
  featured?: boolean
}) {
  const cardBg = featured
    ? useColorModeValue('blue.50', 'blue.900')
    : useColorModeValue('white', 'gray.800')
  const accentColor = useColorModeValue('blue.500', 'cyan.400')
  const shadow = featured ? '2xl' : 'lg'
  return (
    <MotionBox
      bg={cardBg}
      p={featured ? 8 : 6}
      borderRadius="xl"
      boxShadow={shadow}
      whileHover={{ scale: featured ? 1.01 : 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <VStack align="start" spacing={4}>
        <Heading size="md" color={featured ? 'blue.600' : accentColor}>
          {project.name}
        </Heading>

        {project.image && (
          <Image
            src={project.image}
            alt={project.name}
            borderRadius="md"
            // maxH="200px"
            objectFit="cover"
          />
        )}

        <Text fontSize="md">{project.description}</Text>

        <Wrap spacing={2}>
          {project.techs.map((tech) => (
            <WrapItem key={tech}>
              <Button size="sm" variant={featured ? 'solid' : 'outline'} colorScheme="blue">
                {tech}
              </Button>
            </WrapItem>
          ))}
        </Wrap>

        <Wrap mt={2} spacing={3}>
          {project.github && (
            <WrapItem>
              <Button
                as="a"
                href={project.github}
                target="_blank"
                colorScheme="gray"
                size="sm"
              >
                GitHub
              </Button>
            </WrapItem>
          )}
          {project.site && (
            <WrapItem>
              <Button
                as="a"
                href={project.site}
                target="_blank"
                colorScheme="blue"
                size="sm"
              >
                Voir le site
              </Button>
            </WrapItem>
          )}
          {project.readme && (
            <WrapItem>
              <Button
                as="a"
                href={project.readme}
                target="_blank"
                colorScheme="green"
                size="sm"
              >
                README
              </Button>
            </WrapItem>
          )}
          {project.video && (
            <WrapItem>
              <Button
                as="a"
                href={project.video}
                target="_blank"
                colorScheme="purple"
                size="sm"
              >
                Démo vidéo
              </Button>
            </WrapItem>
          )}
        </Wrap>

        <Text fontSize="sm" color="gray.500">
          {project.type} — <Text as="span" fontStyle="italic">{project.status}</Text>
        </Text>
      </VStack>
    </MotionBox>
  )
}

export default function MyPortfolio() {
  const featuredProjects = PROJECTS.filter((p) => p.featured)
  const otherProjects = PROJECTS.filter((p) => !p.featured)

  return (
    <VStack spacing={12} align="stretch">
      {featuredProjects.length > 0 && (
        <Section title="🚀 Projets phare" projects={featuredProjects} featured />
      )}
      <Section title="Autres projets" projects={otherProjects} />
    </VStack>
  )
}