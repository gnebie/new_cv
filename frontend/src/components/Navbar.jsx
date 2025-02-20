import { Flex, Text, Button, HStack, Link, IconButton } from '@chakra-ui/react';
// import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { forwardRef } from 'react'; // Import correct du forwardRef

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Flex 
      as="nav" 
      bg="teal.500" 
      padding="1.5rem" 
      color="white" 
      align="center" 
      justify="space-between"
    >
      <Text fontSize="xl" fontWeight="bold" cursor="pointer">Mon Site</Text>

      {/* Navigation pour écrans larges */}
      <HStack 
        spacing={6} 
        display={{ base: "none", md: "flex" }}
      >
        <Link href="#portfolio" fontSize="lg" _hover={{ color: "teal.200" }}>Portfolio</Link>
        <Link href="#skills" fontSize="lg" _hover={{ color: "teal.200" }}>Compétences</Link>
        <Link href="#about" fontSize="lg" _hover={{ color: "teal.200" }}>À propos</Link>
        <Button as="a" href="#contact" colorScheme="teal" variant="outline" _hover={{ bg: "teal.700" }}>
          Contact
        </Button>
      </HStack>

      {/* Menu hamburger pour petits écrans */}
      <IconButton 
        aria-label="Ouvrir le menu" 
        // icon={<HamburgerIcon />} 
        size="lg" 
        display={{ base: "flex", md: "none" }}
        onClick={toggleMenu}
        bg="transparent" 
        _hover={{ bg: "teal.600" }}
      />

      {/* Menu mobile */}
      {showMenu && (
        <Flex 
          direction="column" 
          bg="teal.600" 
          position="absolute" 
          top="4rem"  
          left="0" 
          width="100%" 
          padding="1rem" 
          zIndex="10" 
          display={{ base: "flex", md: "none" }}
        >
          <Link href="#portfolio" fontSize="lg" color="white" mb={3} _hover={{ color: "teal.300" }}>Portfolio</Link>
          <Link href="#skills" fontSize="lg" color="white" mb={3} _hover={{ color: "teal.300" }}>Compétences</Link>
          <Link href="#about" fontSize="lg" color="white" mb={3} _hover={{ color: "teal.300" }}>À propos</Link>
          <Button as="a" href="#contact" colorScheme="teal" variant="solid">
            Contact
          </Button>
        </Flex>
      )}
    </Flex>
  );
}

export default Navbar;

// import { Flex, Text, Button, Spacer } from '@chakra-ui/react';

// function Navbar() {
//   return (
//     <Flex as="nav" bg="teal.500" padding="1.5rem" color="white">
//       <Text fontSize="xl" fontWeight="bold">Mon Site</Text>
//       <Spacer />
//       <Button variant="outline" color="white" _hover={{ bg: 'teal.700' }}>Contact</Button>
//     </Flex>
//   );
// }

// export default Navbar;
