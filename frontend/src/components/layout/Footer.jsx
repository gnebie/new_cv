import { Box, Text, useColorModeValue } from '@chakra-ui/react';

function Footer() {
  // Utilisation du thème pour la gestion automatique des couleurs
  const bgColor = useColorModeValue("footer.light", "footer.dark");
  const textColor = useColorModeValue("text.dark.primary", "text.dark.primary");
  const borderColor = useColorModeValue("gray.300", "gray.600");

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
      <Text fontSize="sm">
        © 2025 NEBIE Guillaume CV. Tous droits réservés.
      </Text>
    </Box>
  );
}

export default Footer;
