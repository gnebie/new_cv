import { Box, Text, useColorModeValue, Link, HStack, IconButton, Center } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Magnet from '../../components/react-bits/Magnet'

function Footer() {
  // Utilisation du thème pour la gestion automatique des couleurs
  const bgColor = useColorModeValue("footer.light", "footer.dark");
  const textColor = useColorModeValue("text.dark.primary", "text.dark.primary");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const iconHoverColor = useColorModeValue("primary.500", "secondary.500");


  return (
    <Box 
      bg={bgColor}
      color={textColor}
      padding="1.5rem"
      textAlign="center"
      borderTop="1px solid"
      borderColor={borderColor}  // Ajout d'une bordure subtile
      boxShadow="sm"
    >
      <Center>
      <HStack spacing={50}>
      <Magnet padding={100} disabled={false} magnetStrength={10}>
          <Link href="https://linkedin.com/in/nebieguillaumelale" isExternal>
            <IconButton fontSize="3xl" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" variant="ghost" _hover={{ color: iconHoverColor }} />
          </Link>
        </Magnet>
          <Magnet padding={100} disabled={false} magnetStrength={10}>
          <Link href="https://github.com/gnebie" isExternal>
            <IconButton  fontSize="3xl" aria-label="GitHub" icon={<FaGithub />} size="lg" variant="ghost" _hover={{ color: iconHoverColor }} />
          </Link>
          </Magnet>
          <Magnet padding={100} disabled={false} magnetStrength={10}>
          <Link href="mailto:guillaumelale@gmail.com">
            <IconButton  fontSize="3xl" aria-label="Email" icon={<FaEnvelope />} size="lg" variant="ghost" _hover={{ color: iconHoverColor }} />
          </Link>
          </Magnet>
      </HStack>
      </Center>
      <Text fontSize="sm">
        © 2025 NEBIE Guillaume CV. Tous droits réservés.
      </Text>

    </Box>
  );
}

export default Footer;
