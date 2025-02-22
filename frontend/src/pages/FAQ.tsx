import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, useColorModeValue } from '@chakra-ui/react';
import CircularText from '../components/react-bits/CircularText';

const QUESTIONS = [
    { question: "Ou suis je? Ou puis travailler?", answer: "Je suis sur Paris, mais suivant la mission peut me déplacer aux alentours, habitué des outils de travail à distance, je peux aussi télétravailler sans problèmes." },
    { question: "Peux-tu travailler sur un projet existant ?", answer: "Oui, je peux reprendre et optimiser un backend existant." },
    { question: "Quels sont tes délais habituels ?", answer: "Tout dépend du projet, je propose qu'on en discute en direct." },
  ];

function FAQ() {
  const bgColor = useColorModeValue("surface.light.200", "surface.dark.200");
  const textColor = useColorModeValue("text.light.primary", "text.dark.primary");

  return (
    <Box bg={bgColor} p={8}>
      <Heading color={textColor} size="xl" textAlign="center">
      ❓ FAQ ❓
      <CircularText
            text="*Questions-Les-Plus-Fréquentes"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
            />
      </Heading>
      <Accordion allowToggle mt={6}>
        {QUESTIONS.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="lg" fontWeight="bold" color={textColor}>
                  {item.question}
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

export default FAQ;
/*
A tester:

Infinite Scroll=> images instagram
Circular Gallery=> images instagram
Rolling Gallery => images instagram auto 
Image Trail => an other image animation

Infinite Menu =>  images instagram ou presentation de projets 

Pixel Transition => image to text

Rotating Text => texte dynamique pour la vente

Click Spark => click cool

Decrypted Text => animation pour faire du text

Decay Card => effet random
Pixel Card => effet random cool
Spotlight Card => effet random cool

Stepper => form tres cool avec plusieurs inputs

Flowing Menu => effet cool en over sur un menu

Dock => ameliore le navbar

Count Up => pour donner des chiffres

Magnet => pour les boutons(reseau sociaux)

Pixel Trail => navbar

Ribbons => effet cool similaire 
Splash Cursor => effet cool en mode fumee
Blob Cursor => effect cool en mode bulle


Star Border => cool border
Shiny Text => idem for text
Gradient Text => idem with color


Noise => dans le call to action en mode, "ne laisser pa svos projets mourrir " ou un autre fear call
Fuzzy Text => a mettre avec

!!!!!!!!!!!!!!!
Backgrounds => pour les projett !!!!  et autre, possible un par page

Magnet Lines=> idem 

*/