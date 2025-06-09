import { Box, Heading, SimpleGrid, VStack, useColorModeValue } from "@chakra-ui/react";
import ServiceMissionCard from "./services/ServiceMissionCard";

import { MISSIONS } from "./services/missions";
import CTAContactUnsure from "./services/CTAContactUnsure";
import StickyCTA from "./services/StickyCTA";

export default function Services() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.900", "gray.100");

  return (
    <Box bg={bgColor} pb={12} px={6}>
      <StickyCTA />
      <Heading textAlign="center" color={textColor} size="xl" my={10}>
        💼 Missions typiques que je propose
      </Heading>

      <VStack spacing={10} align="stretch">


     <SimpleGrid
       columns={{ base: 1, "2xl": 2 }}
       spacing={10}
     >
       {MISSIONS.map((mission, idx) => (
         <ServiceMissionCard
           key={mission.id}
           index={idx+1}
           {...mission}
         />
       ))}
     </SimpleGrid>

     <Box mt={12}>
       <CTAContactUnsure />
     </Box>

      </VStack>

    </Box>
  );
}
