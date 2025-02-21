import { Box, Input, Textarea, Button, VStack, Heading } from '@chakra-ui/react';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulaire envoyé ! (Ajoutez la logique backend ici)");
  };

  return (
    <Box padding="4rem" bg="gray.200">
      <Heading mb={6}>Me Contacter</Heading>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <Input placeholder="Votre nom" required />
        <Input type="email" placeholder="Votre adresse e-mail" required />
        <Textarea placeholder="Votre message" required />
        <Button type="submit" colorScheme="primary.500" size="lg">Envoyer</Button>
      </VStack>
    </Box>
  );
}

export default ContactForm;
