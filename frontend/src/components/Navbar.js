import { Flex, Text, Button, Spacer } from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex as="nav" bg="teal.500" padding="1.5rem" color="white">
      <Text fontSize="xl" fontWeight="bold">Mon Site</Text>
      <Spacer />
      <Button variant="outline" color="white" _hover={{ bg: 'teal.700' }}>Contact</Button>
    </Flex>
  );
}

export default Navbar;