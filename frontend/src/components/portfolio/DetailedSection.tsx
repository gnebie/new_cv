import { Box, Flex, Image, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { useRef } from 'react';
import VariableProximity from '../../components/react-bits/VariableProximity';

function DetailedSection() {
  const bgColor = useColorModeValue("surface.light.100", "surface.dark.100");
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  return (
    <Box padding="4rem" bg={bgColor}>
      <VStack spacing={4} align="start">
        <Flex>
        <Image src="/public/portrait.png" borderRadius="full" boxSize="80px" marginX={10}/>
        <Box>
          <Heading fontSize="3xl">À propos de moi</Heading>
          <Text fontSize="lg" ref={containerRef}>
          <VariableProximity
          label={'Je suis un développeur backend spécialisé en Python et intégration de solutions IA. Avec plus de 5 ans d’expérience, j’ai conçu des architectures backend robustes, des solutions automatisées et des intégrations de services intelligents.'}
className={'variable-proximity-demo'}
fromFontVariationSettings="'wght' 400, 'opsz' 9"
toFontVariationSettings="'wght' 1000, 'opsz' 40"
containerRef={containerRef}
radius={100}
falloff='linear'
/>
            
          </Text>
          <Text fontSize="lg" ref={containerRef2}>
          <VariableProximity
          label={'J’ai travaillé sur des projets d’envergure dans la finance, les systèmes distribués, et la rétro-ingénierie de systèmes complexes. Je suis passionné par les technologies émergentes et l’automatisation.'}
className={'variable-proximity-demo'}
fromFontVariationSettings="'wght' 400, 'opsz' 9"
toFontVariationSettings="'wght' 1000, 'opsz' 40"
containerRef={containerRef2}
radius={100}
falloff='linear'
/>
            
          </Text>
        </Box>
        </Flex>
      </VStack>
    </Box>
  );
}

export default DetailedSection;